export interface Watchlist {
  name?: string;
  watchlistId?: string;
  accountId?: string;
  status?: 'UNCHANGED' | 'CREATED' | 'UPDATED' | 'DELETED';
  watchlistItems?: {
    sequenceId?: number;
    quantity?: number;
    averagePrice?: number;
    commission?: number;
    purchasedDate?: { [key: string]: any };
    instrument?: {
      symbol?: string;
      description?: string;
      assetType?:
        | 'EQUITY'
        | 'OPTION'
        | 'MUTUAL_FUND'
        | 'FIXED_INCOME'
        | 'INDEX';
    };
    status?: 'UNCHANGED' | 'CREATED' | 'UPDATED' | 'DELETED';
  }[];
}
