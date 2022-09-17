import React from "react";
import MSearchBtnStyle from "./style";
import { SearchIcon } from "../../../resources/icons/CommonIcons";

interface Iprops {
  placeholder: string;
  onClick: () => void;
}

const MSearchBtn = (props: Iprops) => {
  const { placeholder, onClick } = props;
  return (
    <MSearchBtnStyle onClick={onClick}>
      <SearchIcon width="18" height="18" color="icon_color" />
      <span>{placeholder}</span>
    </MSearchBtnStyle>
  );
};

export default MSearchBtn;
