import yfinance as yf
import sys 
import json
# demo for using yfinance API to gather info about any stocks entered as an argument
# argument must be a real stock ticker, case insensitive
def main():
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
    # different keys one can search for
    print("\nINFO KEYS\n")
    print(info.keys())

    print("\nSUMMARY\n")
    print(info['longBusinessSummary'])

    

    # get historical market data
    hist = stock.history(period="max")
    print("\nHISTORY\n")
    print(hist)

    # convert dataframe into json dump
    result = hist.to_json(orient="split")
    parsed = json.loads(result)
    print(json.dumps(parsed, indent=4))


     # show analysts recommendations
    print("\nRECCOMENDATIONS \n")
    print(stock.recommendations)

    # show next event (earnings, etc)
    print("\nEARNINGS\n")
    print(stock.calendar)
    




if __name__ == "__main__":
    main()