from nltk.stem.wordnet import WordNetLemmatizer
from nltk.corpus import twitter_samples, stopwords
from nltk.tag import pos_tag
from nltk.tokenize import word_tokenize
from nltk import FreqDist, classify, NaiveBayesClassifier

import pickle
import re, string, random

import requests
import pandas as pd
import json
import ast
import sys
import yaml
import ssl
import os

def remove_noise(tweet_tokens, stop_words = ()):

    cleaned_tokens = []

    for token, tag in pos_tag(tweet_tokens):
        token = re.sub('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+#]|[!*\(\),]|'\
                       '(?:%[0-9a-fA-F][0-9a-fA-F]))+','', token)
        token = re.sub("(@[A-Za-z0-9_]+)","", token)

        if tag.startswith("NN"):
            pos = 'n'
        elif tag.startswith('VB'):
            pos = 'v'
        else:
            pos = 'a'

        lemmatizer = WordNetLemmatizer()
        token = lemmatizer.lemmatize(token, pos)

        if len(token) > 0 and token not in string.punctuation and token.lower() not in stop_words:
            cleaned_tokens.append(token.lower())
    return cleaned_tokens

def create_twitter_url(ticker):
    handle = ticker
    max_results = 10
    mrf = "max_results={}".format(max_results)
    q = "query={}".format(handle)
    expan = "expansions=author_id&user.fields=username"
    url = "https://api.twitter.com/2/tweets/search/recent?{}&{}&{}".format(
        mrf, q, expan
    )
    return url

def process_yaml():

    CURR_DIR = os.path.dirname(os.path.realpath(__file__))

    with open(CURR_DIR + "/config.yaml") as file:
        return yaml.safe_load(file)

def create_bearer_token(data):
    return data["search_tweets_api"]["bearer_token"]

def twitter_auth_and_connect(bearer_token, url):
    headers = {"Authorization": "Bearer {}".format(bearer_token)}
    response = requests.request("GET", url, headers=headers)
    return response.json()

def GetAuthorNameFromID(data, id):
      for v in data:
          next_id = v['id']
          if (next_id == id):
              return(v['username'])

def main():
    ticker = sys.argv[1]
    url = create_twitter_url(ticker)
    data = process_yaml()
    bearer_token = create_bearer_token(data)
    data = twitter_auth_and_connect(bearer_token, url)

    f = open('tweet_classifier.pickle', 'rb')
    classifier = pickle.load(f)
    f.close()

    output = {}
    output['data'] = []
    output['ticker'] = "$" + ticker.upper()

    for v in data['data']:
        tweet_text = v['text']
        tweet_id = v['id']

        author_id = v['author_id']
        tweet_author = GetAuthorNameFromID(data['includes']['users'], author_id)

        tokens = remove_noise(word_tokenize(tweet_text))

        classification = classifier.classify(dict([token, True] for token in tokens))
        tweet_score = "~"
        if classification == "Positive":
            tweet_score = "+"
        elif classification == "Negative":
            tweet_score = "-"

        output['data'].append({
            "author": tweet_author,
            "score": tweet_score,
            "id": tweet_id,
            "text": tweet_text
        })

    with open('tweets_output.json', 'w') as outfile:
        json.dump(output, outfile)
    
if __name__ == "__main__":

    ssl._create_default_https_context = ssl._create_unverified_context
    main()