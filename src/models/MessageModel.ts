import { ConditionType, ConditionalTypes } from "./GlobalModel";
import { SellerModel } from "./SellerModel";
import { ProductModel } from "./ProductModel";

export interface MessageItemModel<T extends ConditionType> {
  id: number;
  product: ConditionalTypes<T, ProductModel>;
  last_message: string;
  last_edit_date: string;
  user: ConditionalTypes<T, SellerModel>;
  status?: string;
}

export interface ChatModel {
  id: number;
  data: MessagesModel[];
}

export interface MessagesModel {
  date: string;
  messages: MessageModel[];
}

export type MessageModel = {
  id: number;
  date: string;
} & MessageType;

type MessageType = MessageYou | MessageCompanion | MessageMarket;

type MessageYou = {
  author: "you";
  message: string;
  image?: string;
  has_seen: boolean;

  price?: never;
  status?: never;
};
type MessageCompanion = {
  author: "companion";
  message: string;
  image?: string;

  has_seen?: never;
  price?: never;
  status?: never;
};

type MessageMarket = {
  author: "market";
  price: number;
  status: OfferStatusTypes;

  image?: never;
  message?: never;
  has_seen?: never;
};

export type OfferStatusTypes =
  | "seller_offer"
  | "user_offer"
  | "seller_accepted"
  | "user_accepted"
  | "user_refused"
  | "seller_refused";
