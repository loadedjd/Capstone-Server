import yfinance as yf
import sys 
import json
import ssl

# demo for using yfinance API to gather info about any stocks entered as an argument
# argument must be a real stock ticker, case insensitive
def main():


    ssl._create_default_https_context = ssl._create_unverified_context
    #t = input("Enter a stock ticker: ")
    stock = yf.Ticker(sys.argv[1])

    # # show actions (dividends, splits)
    # msft.actions

    # # show dividends  
    # msft.dividends

    # # show splits
    # msft.splits

    # # show financials
    # msft.financials
    # msft.quarterly_financials

    # # show major holders
    # msft.major_holders

    # # show institutional holders
    # msft.institutional_holders

    # # show balance sheet
    # msft.balance_sheet
    # msft.quarterly_balance_sheet

    # # show cashflow
    # msft.cashflow
    # msft.quarterly_cashflow

    # # show earnings
    # msft.earnings
    # msft.quarterly_earnings

    # # show sustainability
    # print("\nSUSTAINIBILITY\n")
    # print(stock.sustainability)

    # # show ISIN code - *experimental*
    # # ISIN = International Securities Identification Number
    # msft.isin

    # # show options expirations
    # msft.options

    # # get option chain for specific expiration
    # opt = msft.option_chain('YYYY-MM-DD')

    # data available via: opt.calls, opt.puts


    # get stock info
    info = stock.info
    # history = stock.history("1y")["Close"].to_numpy().tolist()
    # prices = {"prices": history}

    # print(json.dumps(prices))


    # different keys one can search for
    # print("\nINFO KEYS\n")
    # print(info.keys())

    # print (json.dumps(info))

    # print("\nSUMMARY\n")
    summary = info['longBusinessSummary']
    description = {"description":summary}
    print(json.dumps(description))

    # # get historical market data
    # hist = stock.history(period="max")
    # print("\nHISTORY\n")
    # print(hist)

    # # convert dataframe into json dump
    # result = hist.to_json(orient="split")
    # parsed = json.loads(result)
    # print(json.dumps(parsed, indent=4))


     # show analysts recommendations
    total = stock.recommendations
    r = stock.recommendations.to_numpy()[-1]
    firm = r[0]
    toGrade = r[1]
    fromGrade = r[2]
    Action = r[3]
    final = "FIRM: "+firm+", "+"TO GRADE: "+toGrade+", "+"FROM GRADE: "+fromGrade+", "+"ACTION: "+ Action

    rec = {"recommendation": final}
    # print("\Recommendation \n")
    #print(json.dumps(rec))


    # # show next event (earnings, etc)
    # earn = stock.calendar["Value"]
    # print("\nEARNINGS\n")
    # print(earn)
    




if __name__ == "__main__":
    main()