export type OrderSession = 'NORMAL' | 'AM' | 'PM' | 'SEAMLESS';
export type OrderDuration = 'DAY' | 'GOOD_TILL_CANCEL' | 'FILL_OR_KILL';
export type OrderType =
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

export type CancelTime = { date?: string; shortFormat?: boolean };

export type ComplexOrderStrategyType =
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

export type RequestedDestination =
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

export type PriceLinkBasis =
  | 'MANUAL'
  | 'BASE'
  | 'TRIGGER'
  | 'LAST'
  | 'BID'
  | 'ASK'
  | 'ASK_BID'
  | 'MARK'
  | 'AVERAGE';

export type PriceLinkType = 'VALUE' | 'PERCENT' | 'TICK';

export type StopType = 'STANDARD' | 'BID' | 'ASK' | 'LAST' | 'MARK';

export type TaxLotMethod =
  | 'FIFO'
  | 'LIFO'
  | 'HIGH_COST'
  | 'LOW_COST'
  | 'AVERAGE_COST'
  | 'SPECIFIC_LOT';

export type AssetType =
  | 'EQUITY'
  | 'OPTION'
  | 'INDEX'
  | 'MUTUAL_FUND'
  | 'CASH_EQUIVALENT'
  | 'FIXED_INCOME'
  | 'CURRENCY';

export type Instruction =
  | 'BUY'
  | 'SELL'
  | 'BUY_TO_COVER'
  | 'SELL_SHORT'
  | 'BUY_TO_OPEN'
  | 'BUY_TO_CLOSE'
  | 'SELL_TO_OPEN'
  | 'SELL_TO_CLOSE'
  | 'EXCHANGE';

export type PositionEffect = 'OPENING' | 'CLOSING' | 'AUTOMATIC';
export type QuantityType = 'ALL_SHARES' | 'DOLLARS' | 'SHARES';
export type SpecialInstruction =
  | 'ALL_OR_NONE'
  | 'DO_NOT_REDUCE'
  | 'ALL_OR_NONE_DO_NOT_REDUCE';

export type OrderStatus =
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

export type ActivityType = 'EXECUTION' | 'ORDER_ACTION';

export type OrderStrategyType = 'SINGLE' | 'OCO' | 'TRIGGER';

export interface Order {
  session?: OrderSession;
  duration?: OrderDuration;
  orderType?: OrderType;
  cancelTime?: CancelTime;
  complexOrderStrategyType?: ComplexOrderStrategyType;
  quantity?: number;
  filledQuantity?: number;
  remainingQuantity?: number;
  requestedDestination?: RequestedDestination;
  destinationLinkName?: string;
  releaseTime?: string;
  stopPrice?: number;
  stopPriceLinkBasis?: PriceLinkBasis;
  stopPriceLinkType?: PriceLinkType;
  stopPriceOffset?: number;
  stopType?: StopType;
  priceLinkBasis?: PriceLinkBasis;
  priceLinkType?: PriceLinkType;
  price?: number;
  taxLotMethod?: TaxLotMethod;
  orderLegCollection?: {
    orderLegType?: AssetType;
    legId?: number;
    instrument?: {
      assetType?: AssetType;
      cusip?: string;
      symbol?: string;
      description?: string;
    };
    instruction?: Instruction;
    positionEffect?: PositionEffect;
    quantity?: number;
    quantityType?: QuantityType;
  }[];
  activationPrice?: number;
  specialInstruction?: SpecialInstruction;
  orderId?: number;
  cancelable?: boolean;
  editable?: boolean;
  status?: OrderStatus;
  enteredTime?: string;
  closeTime?: string;
  tag?: string;
  accountId?: number;
  orderActivityCollection?: {
    activityType?: ActivityType;
  }[];
  replacingOrderCollection?: Order[];
  childOrderStrategies?: Order[];
  statusDescription?: string;
}
export interface SavedOrder {
  session?: OrderSession;
  duration?: OrderDuration;
  orderType?: OrderType;
  cancelTime?: CancelTime;
  complexOrderStrategyType?: ComplexOrderStrategyType;
  quantity?: number;
  filledQuantity?: number;
  remainingQuantity?: number;
  requestedDestination?: RequestedDestination;
  destinationLinkName?: string;
  releaseTime?: string;
  stopPrice?: number;
  stopPriceLinkBasis?: PriceLinkBasis;
  stopPriceLinkType?: PriceLinkType;
  stopPriceOffset?: number;
  stopType?: StopType;
  priceLinkBasis?: PriceLinkBasis;
  priceLinkType?: PriceLinkType;
  price?: number;
  taxLotMethod?: TaxLotMethod;
  orderLegCollection?: {
    orderLegType?: AssetType;
    legId?: number;
    instrument?: {
      assetType?: AssetType;
      cusip?: string;
      symbol?: string;
      description?: string;
    };
    instruction?: Instruction;
    positionEffect?: PositionEffect;
    quantity?: number;
    quantityType?: QuantityType;
  }[];
  activationPrice?: number;
  specialInstruction?: SpecialInstruction;
  orderStrategyType?: OrderStrategyType;
  orderId?: number;
  cancelable?: boolean;
  editable?: boolean;
  status?: OrderStatus;
  enteredTime?: string;
  closeTime?: string;
  tag?: string;
  accountId?: number;
  orderActivityCollection?: {
    activityType?: ActivityType;
  }[];
  replacingOrderCollection?: SavedOrder[];
  childOrderStrategies?: SavedOrder[];
  statusDescription?: string;
  savedOrderId?: number;
  savedTime?: string;
}
