import json
from apiKeys import Init
from ibm_watson import DiscoveryV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator


def queryStocks():
    authenticator = IAMAuthenticator(Init.get("WatsonKey"))
    discovery = DiscoveryV1(
        version='2019-04-30',
        authenticator=authenticator
    )
    discovery.set_service_url('https://api.us-south.discovery.watson.cloud.ibm.com')
    environments = discovery.list_environments().get_result()
    print(json.dumps(environments, indent=2))

    system_environments = [x for x in environments['environments'] if x['name'] == 'Watson System Environment']
    system_environment_id = system_environments[0]['environment_id']

    collections = discovery.list_collections(system_environment_id).get_result()
    system_collections = [x for x in collections['collections']]
    print(json.dumps(system_collections, indent=2))
    natural_language_query = input('Enter a query: ')
    print("Results within last _____(number) _________(units of time)")
    timeAmount = input('Num: ')
    timeUnits = input('Units: (minutes hours days months years): ')
    print("Searching for articles about " + natural_language_query + " from the last " + str(timeAmount) + timeUnits)
    en_id = "system"
    query = natural_language_query
    passages = True
    count = 10
    highlight = True
    deduplicate = True
    filter = "crawl_date>=now-" + str(timeAmount) + timeUnits

    response = discovery.query(environment_id=en_id, collection_id='news-en', query=query,
                               natural_language_query=natural_language_query, passages=True,
                               count=10, highlight=True, deduplicate=True, filter=filter)
    print(response)
    # print("Query Watson Discovery News for Sentimental Stock Data (News, web, etc) - Search: GameStop")
    # print(response2.text)


if __name__ == '__main__':
    queryStocks()

# /instances/a831d53b-e853-41b8-8e2a-'
#                               'b5664b665b96/v1/environments/system/collections/news-en/query?version=2018-12-03&'
#                               'filter=enriched_title.semantic_roles%3A%28action.normalized%3Aacquire%2Cobject.entities'
#                               '%3A%28'
#                               'type%3A%3ACompany%29%29&'
#                               'highlight=true&'
#                               'passages.count=5&'
#                               'natural_language_query=gamestop'
