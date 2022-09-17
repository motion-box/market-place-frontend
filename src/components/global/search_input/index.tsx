import React, { useEffect, useRef } from "react";
import { ColorsPaletTypes } from "../../../resources/constants/colors";
import { SearchIcon } from "../../../resources/icons/CommonIcons";
import SearchInputStyle from "./style";

interface Iprops {
  placeholder: string;
  autoFocus?: true;
  setFocus?: (state: boolean) => void;
  addition?: React.ReactNode;
  styles?: {
    backgroundColor?: ColorsPaletTypes;
    textColor?: ColorsPaletTypes;
    placeholderColor?: ColorsPaletTypes;
    height?: 48 | 60;
  };
}

const SearchInput = (props: Iprops) => {
  const { autoFocus, setFocus, placeholder, addition, styles } = props;
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && ref.current) {
      console.log("focuse");
      ref.current.focus();
    }
  }, []);

  const actionFunc = (type: "focus" | "blur") => {
    if (type === "focus") {
      setFocus && setFocus(true);
    } else {
      setFocus && setFocus(false);
    }
  };
  return (
    <SearchInputStyle {...styles}>
      <SearchIcon width="24" height="24" />
      <input
        ref={ref}
        placeholder={placeholder}
        onFocus={() => actionFunc("focus")}
        onBlur={() => actionFunc("blur")}
      />
      {addition && addition}
    </SearchInputStyle>
  );
};
export default SearchInput;
