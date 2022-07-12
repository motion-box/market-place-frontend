import { ThemeTypes } from "./../resources/constants/colors";

export interface GlobalModel {
  locale: LocaleModel;
  theme: ThemeTypes;
  token: string;
  userData: undefined;
}
export type LocaleModel = "ru" | "oz" | "uz";

export type ConditionalTypes<T extends ConditionType, M> = T extends "model"
  ? M
  : number;

export type ConditionType = "model" | "id";
