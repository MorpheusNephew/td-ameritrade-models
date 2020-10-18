export interface Mover {
  change?: number;
  description?: string;
  direction?: 'up' | 'down';
  last?: number;
  symbol?: string;
  totalVolume?: number;
}
