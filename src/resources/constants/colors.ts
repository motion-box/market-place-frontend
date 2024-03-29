import { ArrayTyper } from "../../utils/typesUtil";
export const colorsPalet = {
  light: {
    bg_color: "#F4F4F4",
    bgt_color: "rgba(22, 22, 22, 0.5)",
    mbgt_color: "rgba(22,22,22,0.6)",
    card_color: "#FFFFFF",
    border_color: "#E8E8E8",
    text_primary: "#161616",
    text_secondary: "#AAAAAA",
    select_color: "#555555",

    icon_color: "#AAAAAA",
    grid_border_color: "rgba(170, 170, 170, 0.5)",
    grid_bar_first: "#E8E8E8",
    grid_bar_second: "#AAAAAA",

    static_white: "#FFFFFF",
    static_white50: "rgba(255,255,255,0.5)",
    static_white12: "rgba(255,255,255,0.12)",
    static_black: "#161616",
    static_black30: "rgba(22,22,22,0.3)",
    static_red: "#D32424",
    static_red30: "rgba(211, 36, 36, 0.3)",
    static_red50: "rgba(211, 36, 36, 0.5)",
    static_green: "#32B949",
    static_gray: "#8e8e93",
    static_blue: "#2194f9",
    static_purple: "#ea2754",
    static_pantone: "#1cbfb9",
    static_yellow: "#EBAC1E",
    static_modal_bg: "rgba(0, 0, 0, 0.5)",
  },
  dark: {
    bg_color: "#000000",
    bgt_color: "rgba(255,255, 255, 0.5)",
    mbgt_color: "rgba(22,22,22,0.6)",
    card_color: "#1A1A1A",
    border_color: "#2F2F2F",
    text_primary: "#FFFFFF",
    text_secondary: "#AAAAAA",
    select_color: "#FFFFFF",

    icon_color: "#AAAAAA",
    grid_border_color: "rgba(170, 170, 170, 0.1)",
    grid_bar_first: "#1A1A1A",
    grid_bar_second: "#161616",

    static_white: "#FFFFFF",
    static_white50: "rgba(255,255,255,0.5)",
    static_white12: "rgba(255,255,255,0.12)",
    static_black: "#161616",
    static_black30: "rgba(22,22,22,0.3)",
    static_red: "#D32424",
    static_red30: "rgba(211, 36, 36, 0.3)",
    static_red50: "rgba(211, 36, 36, 0.5)",
    static_green: "#32B949",
    static_gray: "#8e8e93",
    static_blue: "#2194f9",
    static_purple: "#ea2754",
    static_pantone: "#1cbfb9",
    static_yellow: "#EBAC1E",
    static_modal_bg: "rgba(0, 0, 0, 0.5)",
  },
};

export const colorsPaletName = [
  "bg_color",
  "bgt_color",
  "mbgt_color",
  "card_color",
  "border_color",
  "text_primary",
  "text_secondary",
  "select_color",
  "icon_color",
  "static_white",
  "static_white50",
  "static_white12",
  "static_black",
  "static_black30",
  "static_red",
  "static_red30",
  "static_red50",
  "static_green",
  "static_gray",
  "static_blue",
  "static_purple",
  "static_pantone",
  "static_yellow",
  "static_modal_bg",
] as const;
export type ColorsPaletTypes = ArrayTyper<typeof colorsPaletName>;
export type ThemeTypes = "light" | "dark";

export default colorsPalet;
