import React, { FunctionComponent } from "react";
import { ColorsPaletTypes } from "../../../resources/constants/colors";
import { SearchOutlineIcon } from "../../../resources/icons/ColorIcons";
import { SearchIcon } from "../../../resources/icons/CommonIcons";
import Button from "../button";
import SearchInputStyle from "./style";

interface Iprops {
  placeholder: string;
  setFocuse?: (state: boolean) => void;
  addition?: React.ReactNode;
  styles: {
    backgroundColor?: ColorsPaletTypes;
    textColor?: ColorsPaletTypes;
    placeholderColor?: ColorsPaletTypes;
    height?: 48 | 60;
  };
}

const SearchInput = (props: Iprops) => {
  const actionFunc = (type: "focuse" | "blur") => {
    if (type === "focuse") {
      props.setFocuse && props.setFocuse(true);
    } else {
      props.setFocuse && props.setFocuse(false);
    }
  };
  return (
    <SearchInputStyle {...props.styles}>
      <SearchIcon width="24" height="24" />
      <input
        placeholder={props.placeholder}
        onFocus={() => actionFunc("focuse")}
        onBlur={() => actionFunc("blur")}
      />
      {props.addition && props.addition}
    </SearchInputStyle>
  );
};
export default SearchInput;
