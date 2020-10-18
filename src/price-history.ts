export interface CandleList {
  /**
   * List of candles
   */
  candles?: {
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
  }[];
  empty?: boolean;
  /**
   * Symbol
   */
  symbol?: string;
}
