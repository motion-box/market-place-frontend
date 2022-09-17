export interface BankCardModel {
  id: number;
  main: boolean;
  type: "UZCARD" | "HUMO" | string;
  number: string;
}
