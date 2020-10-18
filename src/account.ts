export interface Account {
  securitiesAccount?: {
    type?: 'CASH' | 'MARGIN';
    accountId?: string;
    roundTrips?: number;
    isDayTrader?: boolean;
    isClosingOnlyRestricted?: boolean;
    positions?: {
      shortQuantity?: number;
      averagePrice?: number;
      currentDayProfitLoss?: number;
      currentDayProfitLossPercentage?: number;
      longQuantity?: number;
      settledLongQuantity?: number;
      settledShortQuantity?: number;
      agedQuantity?: number;
      instrument?: {
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
      };
      marketValue?: number;
    }[];
    orderStrategies?: {
      session?: 'NORMAL' | 'AM' | 'PM' | 'SEAMLESS';
      duration?: 'DAY' | 'GOOD_TILL_CANCEL' | 'FILL_OR_KILL';
      orderType?:
        | 'MARKET'
        | 'LIMIT'
        | 'STOP'
        | 'STOP_LIMIT'
        | 'TRAILING_STOP'
        | 'MARKET_ON_CLOSE'
        | 'EXERCISE'
        | 'TRAILING_STOP_LIMIT'
        | 'NET_DEBIT'
        | 'NET_CREDIT'
        | 'NET_ZERO';
      cancelTime?: { date?: string; shortFormat?: boolean };
      complexOrderStrategyType?:
        | 'NONE'
        | 'COVERED'
        | 'VERTICAL'
        | 'BACK_RATIO'
        | 'CALENDAR'
        | 'DIAGONAL'
        | 'STRADDLE'
        | 'STRANGLE'
        | 'COLLAR_SYNTHETIC'
        | 'BUTTERFLY'
        | 'CONDOR'
        | 'IRON_CONDOR'
        | 'VERTICAL_ROLL'
        | 'COLLAR_WITH_STOCK'
        | 'DOUBLE_DIAGONAL'
        | 'UNBALANCED_BUTTERFLY'
        | 'UNBALANCED_CONDOR'
        | 'UNBALANCED_IRON_CONDOR'
        | 'UNBALANCED_VERTICAL_ROLL'
        | 'CUSTOM';
      quantity?: number;
      filledQuantity?: number;
      remainingQuantity?: number;
      requestedDestination?:
        | 'INET'
        | 'ECN_ARCA'
        | 'CBOE'
        | 'AMEX'
        | 'PHLX'
        | 'ISE'
        | 'BOX'
        | 'NYSE'
        | 'NASDAQ'
        | 'BATS'
        | 'C2'
        | 'AUTO';
      destinationLinkName?: string;
      releaseTime?: string;
      stopPrice?: number;
      stopPriceLinkBasis?:
        | 'MANUAL'
        | 'BASE'
        | 'TRIGGER'
        | 'LAST'
        | 'BID'
        | 'ASK'
        | 'ASK_BID'
        | 'MARK'
        | 'AVERAGE';
      stopPriceLinkType?: 'VALUE' | 'PERCENT' | 'TICK';
      stopPriceOffset?: number;
      stopType?: 'STANDARD' | 'BID' | 'ASK' | 'LAST' | 'MARK';
      priceLinkBasis?:
        | 'MANUAL'
        | 'BASE'
        | 'TRIGGER'
        | 'LAST'
        | 'BID'
        | 'ASK'
        | 'ASK_BID'
        | 'MARK'
        | 'AVERAGE';
      priceLinkType?: 'VALUE' | 'PERCENT' | 'TICK';
      price?: number;
      taxLotMethod?:
        | 'FIFO'
        | 'LIFO'
        | 'HIGH_COST'
        | 'LOW_COST'
        | 'AVERAGE_COST'
        | 'SPECIFIC_LOT';
      orderLegCollection?: {
        orderLegType?:
          | 'EQUITY'
          | 'OPTION'
          | 'INDEX'
          | 'MUTUAL_FUND'
          | 'CASH_EQUIVALENT'
          | 'FIXED_INCOME'
          | 'CURRENCY';
        legId?: number;
        instrument?: {
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
        };
        instruction?:
          | 'BUY'
          | 'SELL'
          | 'BUY_TO_COVER'
          | 'SELL_SHORT'
          | 'BUY_TO_OPEN'
          | 'BUY_TO_CLOSE'
          | 'SELL_TO_OPEN'
          | 'SELL_TO_CLOSE'
          | 'EXCHANGE';
        positionEffect?: 'OPENING' | 'CLOSING' | 'AUTOMATIC';
        quantity?: number;
        quantityType?: 'ALL_SHARES' | 'DOLLARS' | 'SHARES';
      }[];
      activationPrice?: number;
      specialInstruction?:
        | 'ALL_OR_NONE'
        | 'DO_NOT_REDUCE'
        | 'ALL_OR_NONE_DO_NOT_REDUCE';
      orderStrategyType?: 'SINGLE' | 'OCO' | 'TRIGGER';
      orderId?: number;
      cancelable?: boolean;
      editable?: boolean;
      status?:
        | 'AWAITING_PARENT_ORDER'
        | 'AWAITING_CONDITION'
        | 'AWAITING_MANUAL_REVIEW'
        | 'ACCEPTED'
        | 'AWAITING_UR_OUT'
        | 'PENDING_ACTIVATION'
        | 'QUEUED'
        | 'WORKING'
        | 'REJECTED'
        | 'PENDING_CANCEL'
        | 'CANCELED'
        | 'PENDING_REPLACE'
        | 'REPLACED'
        | 'FILLED'
        | 'EXPIRED';
      enteredTime?: string;
      closeTime?: string;
      tag?: string;
      accountId?: number;
      orderActivityCollection?: {
        activityType?: 'EXECUTION' | 'ORDER_ACTION';
      }[];
      replacingOrderCollection?: any[];
      childOrderStrategies?: any[];
      statusDescription?: string;
    }[];
  };
}
export interface MarginAccount {
  type?: 'CASH' | 'MARGIN';
  accountId?: string;
  roundTrips?: number;
  isDayTrader?: boolean;
  isClosingOnlyRestricted?: boolean;
  positions?: {
    shortQuantity?: number;
    averagePrice?: number;
    currentDayProfitLoss?: number;
    currentDayProfitLossPercentage?: number;
    longQuantity?: number;
    settledLongQuantity?: number;
    settledShortQuantity?: number;
    agedQuantity?: number;
    instrument?: {
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
    };
    marketValue?: number;
  }[];
  orderStrategies?: {
    session?: 'NORMAL' | 'AM' | 'PM' | 'SEAMLESS';
    duration?: 'DAY' | 'GOOD_TILL_CANCEL' | 'FILL_OR_KILL';
    orderType?:
      | 'MARKET'
      | 'LIMIT'
      | 'STOP'
      | 'STOP_LIMIT'
      | 'TRAILING_STOP'
      | 'MARKET_ON_CLOSE'
      | 'EXERCISE'
      | 'TRAILING_STOP_LIMIT'
      | 'NET_DEBIT'
      | 'NET_CREDIT'
      | 'NET_ZERO';
    cancelTime?: { date?: string; shortFormat?: boolean };
    complexOrderStrategyType?:
      | 'NONE'
      | 'COVERED'
      | 'VERTICAL'
      | 'BACK_RATIO'
      | 'CALENDAR'
      | 'DIAGONAL'
      | 'STRADDLE'
      | 'STRANGLE'
      | 'COLLAR_SYNTHETIC'
      | 'BUTTERFLY'
      | 'CONDOR'
      | 'IRON_CONDOR'
      | 'VERTICAL_ROLL'
      | 'COLLAR_WITH_STOCK'
      | 'DOUBLE_DIAGONAL'
      | 'UNBALANCED_BUTTERFLY'
      | 'UNBALANCED_CONDOR'
      | 'UNBALANCED_IRON_CONDOR'
      | 'UNBALANCED_VERTICAL_ROLL'
      | 'CUSTOM';
    quantity?: number;
    filledQuantity?: number;
    remainingQuantity?: number;
    requestedDestination?:
      | 'INET'
      | 'ECN_ARCA'
      | 'CBOE'
      | 'AMEX'
      | 'PHLX'
      | 'ISE'
      | 'BOX'
      | 'NYSE'
      | 'NASDAQ'
      | 'BATS'
      | 'C2'
      | 'AUTO';
    destinationLinkName?: string;
    releaseTime?: string;
    stopPrice?: number;
    stopPriceLinkBasis?:
      | 'MANUAL'
      | 'BASE'
      | 'TRIGGER'
      | 'LAST'
      | 'BID'
      | 'ASK'
      | 'ASK_BID'
      | 'MARK'
      | 'AVERAGE';
    stopPriceLinkType?: 'VALUE' | 'PERCENT' | 'TICK';
    stopPriceOffset?: number;
    stopType?: 'STANDARD' | 'BID' | 'ASK' | 'LAST' | 'MARK';
    priceLinkBasis?:
      | 'MANUAL'
      | 'BASE'
      | 'TRIGGER'
      | 'LAST'
      | 'BID'
      | 'ASK'
      | 'ASK_BID'
      | 'MARK'
      | 'AVERAGE';
    priceLinkType?: 'VALUE' | 'PERCENT' | 'TICK';
    price?: number;
    taxLotMethod?:
      | 'FIFO'
      | 'LIFO'
      | 'HIGH_COST'
      | 'LOW_COST'
      | 'AVERAGE_COST'
      | 'SPECIFIC_LOT';
    orderLegCollection?: {
      orderLegType?:
        | 'EQUITY'
        | 'OPTION'
        | 'INDEX'
        | 'MUTUAL_FUND'
        | 'CASH_EQUIVALENT'
        | 'FIXED_INCOME'
        | 'CURRENCY';
      legId?: number;
      instrument?: {
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
      };
      instruction?:
        | 'BUY'
        | 'SELL'
        | 'BUY_TO_COVER'
        | 'SELL_SHORT'
        | 'BUY_TO_OPEN'
        | 'BUY_TO_CLOSE'
        | 'SELL_TO_OPEN'
        | 'SELL_TO_CLOSE'
        | 'EXCHANGE';
      positionEffect?: 'OPENING' | 'CLOSING' | 'AUTOMATIC';
      quantity?: number;
      quantityType?: 'ALL_SHARES' | 'DOLLARS' | 'SHARES';
    }[];
    activationPrice?: number;
    specialInstruction?:
      | 'ALL_OR_NONE'
      | 'DO_NOT_REDUCE'
      | 'ALL_OR_NONE_DO_NOT_REDUCE';
    orderStrategyType?: 'SINGLE' | 'OCO' | 'TRIGGER';
    orderId?: number;
    cancelable?: boolean;
    editable?: boolean;
    status?:
      | 'AWAITING_PARENT_ORDER'
      | 'AWAITING_CONDITION'
      | 'AWAITING_MANUAL_REVIEW'
      | 'ACCEPTED'
      | 'AWAITING_UR_OUT'
      | 'PENDING_ACTIVATION'
      | 'QUEUED'
      | 'WORKING'
      | 'REJECTED'
      | 'PENDING_CANCEL'
      | 'CANCELED'
      | 'PENDING_REPLACE'
      | 'REPLACED'
      | 'FILLED'
      | 'EXPIRED';
    enteredTime?: string;
    closeTime?: string;
    tag?: string;
    accountId?: number;
    orderActivityCollection?: {
      activityType?: 'EXECUTION' | 'ORDER_ACTION';
    }[];
    replacingOrderCollection?: any[];
    childOrderStrategies?: any[];
    statusDescription?: string;
  }[];
  initialBalances?: {
    accruedInterest?: number;
    availableFundsNonMarginableTrade?: number;
    bondValue?: number;
    buyingPower?: number;
    cashBalance?: number;
    cashAvailableForTrading?: number;
    cashReceipts?: number;
    dayTradingBuyingPower?: number;
    dayTradingBuyingPowerCall?: number;
    dayTradingEquityCall?: number;
    equity?: number;
    equityPercentage?: number;
    liquidationValue?: number;
    longMarginValue?: number;
    longOptionMarketValue?: number;
    longStockValue?: number;
    maintenanceCall?: number;
    maintenanceRequirement?: number;
    margin?: number;
    marginEquity?: number;
    moneyMarketFund?: number;
    mutualFundValue?: number;
    regTCall?: number;
    shortMarginValue?: number;
    shortOptionMarketValue?: number;
    shortStockValue?: number;
    totalCash?: number;
    isInCall?: boolean;
    unsettledCash?: number;
    pendingDeposits?: number;
    marginBalance?: number;
    shortBalance?: number;
    accountValue?: number;
  };
  currentBalances?: {
    accruedInterest?: number;
    cashBalance?: number;
    cashReceipts?: number;
    longOptionMarketValue?: number;
    liquidationValue?: number;
    longMarketValue?: number;
    moneyMarketFund?: number;
    savings?: number;
    shortMarketValue?: number;
    pendingDeposits?: number;
    availableFunds?: number;
    availableFundsNonMarginableTrade?: number;
    buyingPower?: number;
    buyingPowerNonMarginableTrade?: number;
    dayTradingBuyingPower?: number;
    dayTradingBuyingPowerCall?: number;
    equity?: number;
    equityPercentage?: number;
    longMarginValue?: number;
    maintenanceCall?: number;
    maintenanceRequirement?: number;
    marginBalance?: number;
    regTCall?: number;
    shortBalance?: number;
    shortMarginValue?: number;
    shortOptionMarketValue?: number;
    sma?: number;
    mutualFundValue?: number;
    bondValue?: number;
    isInCall?: boolean;
    stockBuyingPower?: number;
    optionBuyingPower?: number;
  };
  projectedBalances?: {
    accruedInterest?: number;
    cashBalance?: number;
    cashReceipts?: number;
    longOptionMarketValue?: number;
    liquidationValue?: number;
    longMarketValue?: number;
    moneyMarketFund?: number;
    savings?: number;
    shortMarketValue?: number;
    pendingDeposits?: number;
    availableFunds?: number;
    availableFundsNonMarginableTrade?: number;
    buyingPower?: number;
    buyingPowerNonMarginableTrade?: number;
    dayTradingBuyingPower?: number;
    dayTradingBuyingPowerCall?: number;
    equity?: number;
    equityPercentage?: number;
    longMarginValue?: number;
    maintenanceCall?: number;
    maintenanceRequirement?: number;
    marginBalance?: number;
    regTCall?: number;
    shortBalance?: number;
    shortMarginValue?: number;
    shortOptionMarketValue?: number;
    sma?: number;
    mutualFundValue?: number;
    bondValue?: number;
    isInCall?: boolean;
    stockBuyingPower?: number;
    optionBuyingPower?: number;
  };
}
export interface CashAccount {
  type?: 'CASH' | 'MARGIN';
  accountId?: string;
  roundTrips?: number;
  isDayTrader?: boolean;
  isClosingOnlyRestricted?: boolean;
  positions?: {
    shortQuantity?: number;
    averagePrice?: number;
    currentDayProfitLoss?: number;
    currentDayProfitLossPercentage?: number;
    longQuantity?: number;
    settledLongQuantity?: number;
    settledShortQuantity?: number;
    agedQuantity?: number;
    instrument?: {
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
    };
    marketValue?: number;
  }[];
  orderStrategies?: {
    session?: 'NORMAL' | 'AM' | 'PM' | 'SEAMLESS';
    duration?: 'DAY' | 'GOOD_TILL_CANCEL' | 'FILL_OR_KILL';
    orderType?:
      | 'MARKET'
      | 'LIMIT'
      | 'STOP'
      | 'STOP_LIMIT'
      | 'TRAILING_STOP'
      | 'MARKET_ON_CLOSE'
      | 'EXERCISE'
      | 'TRAILING_STOP_LIMIT'
      | 'NET_DEBIT'
      | 'NET_CREDIT'
      | 'NET_ZERO';
    cancelTime?: { date?: string; shortFormat?: boolean };
    complexOrderStrategyType?:
      | 'NONE'
      | 'COVERED'
      | 'VERTICAL'
      | 'BACK_RATIO'
      | 'CALENDAR'
      | 'DIAGONAL'
      | 'STRADDLE'
      | 'STRANGLE'
      | 'COLLAR_SYNTHETIC'
      | 'BUTTERFLY'
      | 'CONDOR'
      | 'IRON_CONDOR'
      | 'VERTICAL_ROLL'
      | 'COLLAR_WITH_STOCK'
      | 'DOUBLE_DIAGONAL'
      | 'UNBALANCED_BUTTERFLY'
      | 'UNBALANCED_CONDOR'
      | 'UNBALANCED_IRON_CONDOR'
      | 'UNBALANCED_VERTICAL_ROLL'
      | 'CUSTOM';
    quantity?: number;
    filledQuantity?: number;
    remainingQuantity?: number;
    requestedDestination?:
      | 'INET'
      | 'ECN_ARCA'
      | 'CBOE'
      | 'AMEX'
      | 'PHLX'
      | 'ISE'
      | 'BOX'
      | 'NYSE'
      | 'NASDAQ'
      | 'BATS'
      | 'C2'
      | 'AUTO';
    destinationLinkName?: string;
    releaseTime?: string;
    stopPrice?: number;
    stopPriceLinkBasis?:
      | 'MANUAL'
      | 'BASE'
      | 'TRIGGER'
      | 'LAST'
      | 'BID'
      | 'ASK'
      | 'ASK_BID'
      | 'MARK'
      | 'AVERAGE';
    stopPriceLinkType?: 'VALUE' | 'PERCENT' | 'TICK';
    stopPriceOffset?: number;
    stopType?: 'STANDARD' | 'BID' | 'ASK' | 'LAST' | 'MARK';
    priceLinkBasis?:
      | 'MANUAL'
      | 'BASE'
      | 'TRIGGER'
      | 'LAST'
      | 'BID'
      | 'ASK'
      | 'ASK_BID'
      | 'MARK'
      | 'AVERAGE';
    priceLinkType?: 'VALUE' | 'PERCENT' | 'TICK';
    price?: number;
    taxLotMethod?:
      | 'FIFO'
      | 'LIFO'
      | 'HIGH_COST'
      | 'LOW_COST'
      | 'AVERAGE_COST'
      | 'SPECIFIC_LOT';
    orderLegCollection?: {
      orderLegType?:
        | 'EQUITY'
        | 'OPTION'
        | 'INDEX'
        | 'MUTUAL_FUND'
        | 'CASH_EQUIVALENT'
        | 'FIXED_INCOME'
        | 'CURRENCY';
      legId?: number;
      instrument?: {
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
      };
      instruction?:
        | 'BUY'
        | 'SELL'
        | 'BUY_TO_COVER'
        | 'SELL_SHORT'
        | 'BUY_TO_OPEN'
        | 'BUY_TO_CLOSE'
        | 'SELL_TO_OPEN'
        | 'SELL_TO_CLOSE'
        | 'EXCHANGE';
      positionEffect?: 'OPENING' | 'CLOSING' | 'AUTOMATIC';
      quantity?: number;
      quantityType?: 'ALL_SHARES' | 'DOLLARS' | 'SHARES';
    }[];
    activationPrice?: number;
    specialInstruction?:
      | 'ALL_OR_NONE'
      | 'DO_NOT_REDUCE'
      | 'ALL_OR_NONE_DO_NOT_REDUCE';
    orderStrategyType?: 'SINGLE' | 'OCO' | 'TRIGGER';
    orderId?: number;
    cancelable?: boolean;
    editable?: boolean;
    status?:
      | 'AWAITING_PARENT_ORDER'
      | 'AWAITING_CONDITION'
      | 'AWAITING_MANUAL_REVIEW'
      | 'ACCEPTED'
      | 'AWAITING_UR_OUT'
      | 'PENDING_ACTIVATION'
      | 'QUEUED'
      | 'WORKING'
      | 'REJECTED'
      | 'PENDING_CANCEL'
      | 'CANCELED'
      | 'PENDING_REPLACE'
      | 'REPLACED'
      | 'FILLED'
      | 'EXPIRED';
    enteredTime?: string;
    closeTime?: string;
    tag?: string;
    accountId?: number;
    orderActivityCollection?: {
      activityType?: 'EXECUTION' | 'ORDER_ACTION';
    }[];
    replacingOrderCollection?: any[];
    childOrderStrategies?: any[];
    statusDescription?: string;
  }[];
  initialBalances?: {
    accruedInterest?: number;
    cashAvailableForTrading?: number;
    cashAvailableForWithdrawal?: number;
    cashBalance?: number;
    bondValue?: number;
    cashReceipts?: number;
    liquidationValue?: number;
    longOptionMarketValue?: number;
    longStockValue?: number;
    moneyMarketFund?: number;
    mutualFundValue?: number;
    shortOptionMarketValue?: number;
    shortStockValue?: number;
    isInCall?: boolean;
    unsettledCash?: number;
    cashDebitCallValue?: number;
    pendingDeposits?: number;
    accountValue?: number;
  };
  currentBalances?: {
    accruedInterest?: number;
    cashBalance?: number;
    cashReceipts?: number;
    longOptionMarketValue?: number;
    liquidationValue?: number;
    longMarketValue?: number;
    moneyMarketFund?: number;
    savings?: number;
    shortMarketValue?: number;
    pendingDeposits?: number;
    cashAvailableForTrading?: number;
    cashAvailableForWithdrawal?: number;
    cashCall?: number;
    longNonMarginableMarketValue?: number;
    totalCash?: number;
    shortOptionMarketValue?: number;
    mutualFundValue?: number;
    bondValue?: number;
    cashDebitCallValue?: number;
    unsettledCash?: number;
  };
  projectedBalances?: {
    accruedInterest?: number;
    cashBalance?: number;
    cashReceipts?: number;
    longOptionMarketValue?: number;
    liquidationValue?: number;
    longMarketValue?: number;
    moneyMarketFund?: number;
    savings?: number;
    shortMarketValue?: number;
    pendingDeposits?: number;
    cashAvailableForTrading?: number;
    cashAvailableForWithdrawal?: number;
    cashCall?: number;
    longNonMarginableMarketValue?: number;
    totalCash?: number;
    shortOptionMarketValue?: number;
    mutualFundValue?: number;
    bondValue?: number;
    cashDebitCallValue?: number;
    unsettledCash?: number;
  };
}
