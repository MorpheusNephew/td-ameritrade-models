export interface MarketHours {
  category?: string;
  date?: string;
  exchange?: string;
  isOpen?: boolean;
  marketType?:
    | 'BOND'
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
  product?: string;
  productName?: string;
  sessionHours?: { [key: string]: string[] };
}
