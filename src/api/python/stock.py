import yfinance as yf
import sys 
import json
import ssl
# demo for using yfinance API to gather info about any stocks entered as an argument
# argument must be a real stock ticker, case insensitive
def main():
    #t = input("Enter a stock ticker: ")
    stock = yf.Ticker(sys.argv[1])

      # convert dataframe into json dump
     

    ssl._create_default_https_context = ssl._create_unverified_context
    info = stock.info
    history = stock.history(period='max')

    history = history.to_json(orient="split")
    history = json.loads(history)

    results = []

    results.append(info)
    results.append(history)

    print(json.dumps(results))






if __name__ == "__main__":
    main()