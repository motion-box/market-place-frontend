export interface OrderModel {
  id: number;
  product_id: number;
  status: {
    type: OrderStatusType;
    description?: string;
    time?: string;
  };
  description: string;
}

export type OrderStatusType =
  | "delivering"
  | "new_order"
  | "waiting_courier"
  | "pickup"
  | "rejected"
  | "client_received"
  | "you_received"
  | "delivered";

export interface OrderDetailModel {
  id: number;
  order_id: number;
  type: "seller" | "buyer" | "pickup";
  buyer_phone?: string;
  deliver_date?: string;
  address: string;
  order_date: string;
  steps?: OrderStepModel[];
}

export interface OrderStepModel {
  id: number;
  title: TitleType;
  date: string;
  status: StepStatusType;
}

export type TitleType =
  | "courier_took_product"
  | "product_on_way"
  | "buyer_get_product"
  | "order_formed"
  | "waiting_for_courier"
  | "courier_on_way"
  | "arrived";

export type StepStatusType =
  | "done"
  | "pending"
  | "on_way"
  | "not_awailable"
  | "rejected";
