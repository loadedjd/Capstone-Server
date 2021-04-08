import requests
import pandas as pd
import json
import ast
import sys
import yaml
import ssl
import os


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

def connect_to_azure(data):
    azure_url = "https://week.cognitiveservices.azure.com/"
    sentiment_url = "{}text/analytics/v2.1/sentiment".format(azure_url)
    subscription_key = data["azure"]["subscription_key"]
    return sentiment_url, subscription_key

def azure_header(subscription_key):
    return {"Ocp-Apim-Subscription-Key": subscription_key}

def create_document_format(res_json):
    data_only = res_json["data"]
    doc_start = '"documents": {}'.format(data_only)
    str_json = "{" + doc_start + "}"
    dump_doc = json.dumps(str_json)
    doc = json.loads(dump_doc)
    return ast.literal_eval(doc)

def sentiment_scores(headers, sentiment_url, document_format):
    response = requests.post(sentiment_url, headers=headers, json=document_format)
    return response.json()


def mean_score(sentiments):
    sentiment_df = pd.DataFrame(sentiments["documents"])
    return sentiment_df["score"].mean()


def week_logic(week_score):
    if week_score >= 0.75:
        print("Positive average.")
    elif week_score >= 0.45:
        print("Neutral average.")
    else:
        print("Negative average.")
        
def main():
    url = create_twitter_url(sys.argv[1])
    data = process_yaml()
    bearer_token = create_bearer_token(data)
    res_json = twitter_auth_and_connect(bearer_token, url)

    print(res_json)

    #sentiment_url, subscription_key = connect_to_azure(data)
    #headers = azure_header(subscription_key)
    #document_format = create_document_format(res_json)
    #sentiments = sentiment_scores(headers, sentiment_url, document_format)


    #week_score = mean_score(sentiments)
    #print("Mean sentiment score: " + str(week_score))
    #week_logic(week_score)

    # with open('tweets_test.json') as json_file:
    #     data = json.load(json_file)
    #     print(json.dumps(data))
    

if __name__ == "__main__":

    ssl._create_default_https_context = ssl._create_unverified_context
    main()