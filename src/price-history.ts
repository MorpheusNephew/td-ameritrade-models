export interface Candle {
  /**
   * Close
   */
  close?: number;
  /**
   * DateTime
   */
  datetime?: number;
  /**
   * High
   */
  high?: number;
  /**
   * Low
   */
  low?: number;
  /**
   * Open
   */
  open?: number;
  /**
   * Volume
   */
  volume?: number;
}

export interface CandleList {
  /**
   * List of candles
   */
  candles?: Candle[]
  /**
   * Empty
   */
  empty?: boolean;
  /**
   * Symbol
   */
  symbol?: string;
}
