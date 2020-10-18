export interface OptionChain {
  symbol?: string;
  status?: string;
  underlying?: {
    ask?: number;
    askSize?: number;
    bid?: number;
    bidSize?: number;
    change?: number;
    close?: number;
    delayed?: boolean;
    description?: string;
    exchangeName?:
      | 'IND'
      | 'ASE'
      | 'NYS'
      | 'NAS'
      | 'NAP'
      | 'PAC'
      | 'OPR'
      | 'BATS';
    fiftyTwoWeekHigh?: number;
    fiftyTwoWeekLow?: number;
    highPrice?: number;
    last?: number;
    lowPrice?: number;
    mark?: number;
    markChange?: number;
    markPercentChange?: number;
    openPrice?: number;
    percentChange?: number;
    quoteTime?: number;
    symbol?: string;
    totalVolume?: number;
    tradeTime?: number;
  };
  strategy?:
    | 'SINGLE'
    | 'ANALYTICAL'
    | 'COVERED'
    | 'VERTICAL'
    | 'CALENDAR'
    | 'STRANGLE'
    | 'STRADDLE'
    | 'BUTTERFLY'
    | 'CONDOR'
    | 'DIAGONAL'
    | 'COLLAR'
    | 'ROLL';
  interval?: number;
  isDelayed?: boolean;
  isIndex?: boolean;
  daysToExpiration?: number;
  interestRate?: number;
  underlyingPrice?: number;
  volatility?: number;
  callExpDateMap?: { [key: string]: { [key: string]: any } };
  putExpDateMap?: { [key: string]: { [key: string]: any } };
}
export interface StrikePriceMap {
  [key: string]: any;
}
export interface OptionInfo {
  putCall?: 'PUT' | 'CALL';
  symbol?: string;
  description?: string;
  exchangeName?: string;
  bidPrice?: number;
  askPrice?: number;
  lastPrice?: number;
  markPrice?: number;
  bidSize?: number;
  askSize?: number;
  lastSize?: number;
  highPrice?: number;
  lowPrice?: number;
  openPrice?: number;
  closePrice?: number;
  totalVolume?: number;
  quoteTimeInLong?: number;
  tradeTimeInLong?: number;
  netChange?: number;
  volatility?: number;
  delta?: number;
  gamma?: number;
  theta?: number;
  vega?: number;
  rho?: number;
  timeValue?: number;
  openInterest?: number;
  isInTheMoney?: boolean;
  theoreticalOptionValue?: number;
  theoreticalVolatility?: number;
  isMini?: boolean;
  isNonStandard?: boolean;
  optionDeliverablesList?: {
    symbol?: string;
    assetType?: string;
    deliverableUnits?: string;
    currencyType?: string;
  }[];
  strikePrice?: number;
  expirationDate?: string;
  expirationType?: string;
  multiplier?: number;
  settlementType?: string;
  deliverableNote?: string;
  isIndexOption?: boolean;
  percentChange?: number;
  markChange?: number;
  markPercentChange?: number;
}
export interface Underlying {
  ask?: number;
  askSize?: number;
  bid?: number;
  bidSize?: number;
  change?: number;
  close?: number;
  delayed?: boolean;
  description?: string;
  exchangeName?: 'IND' | 'ASE' | 'NYS' | 'NAS' | 'NAP' | 'PAC' | 'OPR' | 'BATS';
  fiftyTwoWeekHigh?: number;
  fiftyTwoWeekLow?: number;
  highPrice?: number;
  last?: number;
  lowPrice?: number;
  mark?: number;
  markChange?: number;
  markPercentChange?: number;
  openPrice?: number;
  percentChange?: number;
  quoteTime?: number;
  symbol?: string;
  totalVolume?: number;
  tradeTime?: number;
}
export interface ExpirationDate {
  date?: string;
}
export interface OptionDeliverables {
  symbol?: string;
  assetType?: string;
  deliverableUnits?: string;
  currencyType?: string;
}
