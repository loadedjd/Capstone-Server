import json
import sys

from apiKeys import Init
from ibm_watson import DiscoveryV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator


def setup():
    authenticator = IAMAuthenticator(Init.get("WatsonKey"))
    discovery = DiscoveryV1(
        version='2019-04-30',
        authenticator=authenticator
    )
    discovery.set_service_url('https://api.us-south.discovery.watson.cloud.ibm.com')
    return discovery


# Run query on Watson News given arguments Query [0], Time[1], Count[2]
# Time - Range of time to search
#   Format: NumUnit
#       Unit: minutes, hours, days, months, or years
#       Num: Integer
#   Searches articles within last (Num) (Units)
#       Ex: Within last 6 months
# Query - Text to search
#   Format: String
# Count - Number of articles to return
#   Format: Integer
# Return Value: json dump of all returned from query (May change to be more specifically formated
def queryStocks():
    discovery = setup()

    en_id = "system"
    passages = True
    query = sys.argv[1]
    natural_language_query = query
    time = sys.argv[2]
    count = sys.argv[3]
    highlight = True
    deduplicate = True
    filterSearch = "crawl_date>=now-" + time

    print("Searching for articles about " + natural_language_query + " from the last " + time)

    response = discovery.query(environment_id=en_id, collection_id='news-en', query=query,
                               natural_language_query=natural_language_query, passages=True,
                               count=10, highlight=True, deduplicate=True, filter=filterSearch)
    print(json.dumps(response))


def main():
    queryStocks()
