export interface Transaction {
  type?:
    | 'TRADE'
    | 'RECEIVE_AND_DELIVER'
    | 'DIVIDEND_OR_INTEREST'
    | 'ACH_RECEIPT'
    | 'ACH_DISBURSEMENT'
    | 'CASH_RECEIPT'
    | 'CASH_DISBURSEMENT'
    | 'ELECTRONIC_FUND'
    | 'WIRE_OUT'
    | 'WIRE_IN'
    | 'JOURNAL'
    | 'MEMORANDUM'
    | 'MARGIN_CALL'
    | 'MONEY_MARKET'
    | 'SMA_ADJUSTMENT';
  clearingReferenceNumber?: string;
  subAccount?: string;
  settlementDate?: string;
  orderId?: string;
  sma?: number;
  requirementReallocationAmount?: number;
  dayTradeBuyingPowerEffect?: number;
  netAmount?: number;
  transactionDate?: string;
  orderDate?: string;
  transactionSubType?: string;
  transactionId?: number;
  cashBalanceEffectFlag?: boolean;
  description?: string;
  achStatus?: 'Approved' | 'Rejected' | 'Cancel' | 'Error';
  accruedInterest?: number;
  fees?: { [key: string]: number };
  transactionItem?: {
    accountId?: number;
    amount?: number;
    price?: number;
    cost?: number;
    parentOrderKey?: number;
    parentChildIndicator?: string;
    instruction?: 'BUY' | 'SELL';
    positionEffect?: 'OPENING' | 'CLOSING' | 'AUTOMATIC';
    instrument?: {
      symbol?: string;
      underlyingSymbol?: string;
      optionExpirationDate?: string;
      optionStrikePrice?: number;
      putCall?: 'PUT' | 'CALL';
      cusip?: string;
      description?: string;
      assetType?:
        | 'EQUITY'
        | 'MUTUAL_FUND'
        | 'OPTION'
        | 'FIXED_INCOME'
        | 'CASH_EQUIVALENT';
      bondMaturityDate?: string;
      bondInterestRate?: number;
    };
  };
}
