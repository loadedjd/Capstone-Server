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


# Run query on Watson News given arguments Query [2], Time[3], Count[4]
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
def queryStocks(discovery_):
    if len(sys.argv) < 3:  # Error check for arguments needed
        print("ERROR: Invalid Arguments. Use format: 'WatsonNews.py query {query} {time} {count}. Time and Count "
              "optional")
    else:
        print("Query")
        discovery = discovery_  # Init discovery with passed in object
        en_id = "system"  # Set environment
        query = sys.argv[1]  # get query from args
        natural_language_query = query
        if len(sys.argv) > 3:  # Check for optional args
            time = sys.argv[2]
        else:
            time = 'years'
        if len(sys.argv) > 4:
            count = sys.argv[3]
        else:
            count = '1'
        time = count + time  # Create time filter, default to 1 year
        filterSearch = "crawl_date>=now-" + time

        print("Searching for articles about " + natural_language_query + " from the last " + time)

        response = discovery.query(environment_id=en_id, collection_id='news-en', query=query,
                                   natural_language_query=natural_language_query, passages=False,
                                   count=10, highlight=True, deduplicate=True, filter=filterSearch)  # query Discovery
        print(response)  # Print response to stdout


# Run query on Watson News
# Return Value: json dump of top 10 most recent articles about the stock market
def headlines(discovery_):
    if len(sys.argv) < 3:  # Error check for arguments needed
        print("ERROR: Invalid Arguments. Use format: 'WatsonNews.py headlines {query}")
    else:
        print("Headlines")
        discovery = discovery_

        en_id = "system"
        query = "Stocks"
        natural_language_query = query
        qty = 5  # Number of results to return
        filterSearch = "crawl_date>=now-1day"

        print("Showing top articles for Stocks in the last day")

        response = discovery.query(environment_id=en_id, collection_id='news-en', query=query,
                                   natural_language_query=natural_language_query, passages=False,
                                   count=qty, highlight=True, deduplicate=True, filter=filterSearch)  # Query discovery
        print(response)  # Print to stdout

    # out_file = open("news.json", "w")
    # json.dump(response.get_result(), out_file, indent=6, skipkeys=True)
    #
    # out_file.close()


def main():
    discovery = setup()
    print("Main")
    if sys.argv[1] == 'query':
        print("Calling query")
        queryStocks(discovery)
    elif sys.argv[1] == 'headlines':
        print("Calling headlines")
        headlines(discovery)


if __name__ == '__main__':
    main()
