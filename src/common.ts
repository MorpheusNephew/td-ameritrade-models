export interface Equity {
  assetType?:
    | 'EQUITY'
    | 'OPTION'
    | 'INDEX'
    | 'MUTUAL_FUND'
    | 'CASH_EQUIVALENT'
    | 'FIXED_INCOME'
    | 'CURRENCY';
  cusip?: string;
  symbol?: string;
  description?: string;
}
export interface FixedIncome {
  assetType?:
    | 'EQUITY'
    | 'OPTION'
    | 'INDEX'
    | 'MUTUAL_FUND'
    | 'CASH_EQUIVALENT'
    | 'FIXED_INCOME'
    | 'CURRENCY';
  cusip?: string;
  symbol?: string;
  description?: string;
  maturityDate?: string;
  variableRate?: number;
  factor?: number;
}
export interface MutualFund {
  assetType?:
    | 'EQUITY'
    | 'OPTION'
    | 'INDEX'
    | 'MUTUAL_FUND'
    | 'CASH_EQUIVALENT'
    | 'FIXED_INCOME'
    | 'CURRENCY';
  cusip?: string;
  symbol?: string;
  description?: string;
  type?:
    | 'NOT_APPLICABLE'
    | 'OPEN_END_NON_TAXABLE'
    | 'OPEN_END_TAXABLE'
    | 'NO_LOAD_NON_TAXABLE'
    | 'NO_LOAD_TAXABLE';
}
export interface CashEquivalent {
  assetType?:
    | 'EQUITY'
    | 'OPTION'
    | 'INDEX'
    | 'MUTUAL_FUND'
    | 'CASH_EQUIVALENT'
    | 'FIXED_INCOME'
    | 'CURRENCY';
  cusip?: string;
  symbol?: string;
  description?: string;
  type?: 'SAVINGS' | 'MONEY_MARKET_FUND';
}
export interface Option {
  assetType?:
    | 'EQUITY'
    | 'OPTION'
    | 'INDEX'
    | 'MUTUAL_FUND'
    | 'CASH_EQUIVALENT'
    | 'FIXED_INCOME'
    | 'CURRENCY';
  cusip?: string;
  symbol?: string;
  description?: string;
  type?: 'VANILLA' | 'BINARY' | 'BARRIER';
  putCall?: 'PUT' | 'CALL';
  underlyingSymbol?: string;
  optionMultiplier?: number;
  optionDeliverables?: {
    symbol?: string;
    deliverableUnits?: number;
    currencyType?: 'USD' | 'CAD' | 'EUR' | 'JPY';
    assetType?:
      | 'EQUITY'
      | 'OPTION'
      | 'INDEX'
      | 'MUTUAL_FUND'
      | 'CASH_EQUIVALENT'
      | 'FIXED_INCOME'
      | 'CURRENCY';
  }[];
}
export interface Execution {
  activityType?: 'EXECUTION' | 'ORDER_ACTION';
  executionType?: 'FILL';
  quantity?: number;
  orderRemainingQuantity?: number;
  executionLegs?: {
    legId?: number;
    quantity?: number;
    mismarkedQuantity?: number;
    price?: number;
    time?: string;
  }[];
}
