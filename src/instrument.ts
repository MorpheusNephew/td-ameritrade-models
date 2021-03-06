export interface Bond {
  bondPrice?: number;
  cusip?: string;
  symbol?: string;
  description?: string;
  exchange?: string;
  assetType?: 'BOND';
}
export interface FundamentalData {
  symbol?: string;
  high52?: number;
  low52?: number;
  dividendAmount?: number;
  dividendYield?: number;
  dividendDate?: string;
  peRatio?: number;
  pegRatio?: number;
  pbRatio?: number;
  prRatio?: number;
  pcfRatio?: number;
  grossMarginTTM?: number;
  grossMarginMRQ?: number;
  netProfitMarginTTM?: number;
  netProfitMarginMRQ?: number;
  operatingMarginTTM?: number;
  operatingMarginMRQ?: number;
  returnOnEquity?: number;
  returnOnAssets?: number;
  returnOnInvestment?: number;
  quickRatio?: number;
  currentRatio?: number;
  interestCoverage?: number;
  totalDebtToCapital?: number;
  ltDebtToEquity?: number;
  totalDebtToEquity?: number;
  epsTTM?: number;
  epsChangePercentTTM?: number;
  epsChangeYear?: number;
  epsChange?: number;
  revChangeYear?: number;
  revChangeTTM?: number;
  revChangeIn?: number;
  sharesOutstanding?: number;
  marketCapFloat?: number;
  marketCap?: number;
  bookValuePerShare?: number;
  shortIntToFloat?: number;
  shortIntDayToCover?: number;
  divGrowthRate3Year?: number;
  dividendPayAmount?: number;
  dividendPayDate?: string;
  beta?: number;
  vol1DayAvg?: number;
  vol10DayAvg?: number;
  vol3MonthAvg?: number;
}
export interface Fundamental {
  cusip?: string;
  symbol?: string;
  description?: string;
  exchange?: string;
  assetType?: 'EQUITY' | 'ETF' | 'MUTUAL_FUND' | 'UNKNOWN';
  fundamental?: {
    symbol?: string;
    high52?: number;
    low52?: number;
    dividendAmount?: number;
    dividendYield?: number;
    dividendDate?: string;
    peRatio?: number;
    pegRatio?: number;
    pbRatio?: number;
    prRatio?: number;
    pcfRatio?: number;
    grossMarginTTM?: number;
    grossMarginMRQ?: number;
    netProfitMarginTTM?: number;
    netProfitMarginMRQ?: number;
    operatingMarginTTM?: number;
    operatingMarginMRQ?: number;
    returnOnEquity?: number;
    returnOnAssets?: number;
    returnOnInvestment?: number;
    quickRatio?: number;
    currentRatio?: number;
    interestCoverage?: number;
    totalDebtToCapital?: number;
    ltDebtToEquity?: number;
    totalDebtToEquity?: number;
    epsTTM?: number;
    epsChangePercentTTM?: number;
    epsChangeYear?: number;
    epsChange?: number;
    revChangeYear?: number;
    revChangeTTM?: number;
    revChangeIn?: number;
    sharesOutstanding?: number;
    marketCapFloat?: number;
    marketCap?: number;
    bookValuePerShare?: number;
    shortIntToFloat?: number;
    shortIntDayToCover?: number;
    divGrowthRate3Year?: number;
    dividendPayAmount?: number;
    dividendPayDate?: string;
    beta?: number;
    vol1DayAvg?: number;
    vol10DayAvg?: number;
    vol3MonthAvg?: number;
  };
}
export interface Instrument {
  cusip?: string;
  symbol?: string;
  description?: string;
  exchange?: string;
  assetType?:
    | 'EQUITY'
    | 'ETF'
    | 'FOREX'
    | 'FUTURE'
    | 'FUTURE_OPTION'
    | 'INDEX'
    | 'INDICATOR'
    | 'MUTUAL_FUND'
    | 'OPTION'
    | 'UNKNOWN';
}
