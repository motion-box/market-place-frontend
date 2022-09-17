import React, { useRef } from "react";
import { useRouter } from "next/router";
import { ColorsPaletTypes } from "../../../resources/constants/colors";
import {
  ArrowBackIcon,
  CloseFillIcon,
  SearchIcon,
} from "../../../resources/icons/CommonIcons";
import MHeaderSearchStyle from "./style";

interface Iprops {
  placeholder: string;
  searchText: string;
  setSearchText: (text: string) => void;
  background?: ColorsPaletTypes;
  closeClick: () => void;
}

const MHeaderSearch = (props: Iprops) => {
  const {
    searchText,
    setSearchText,
    placeholder,
    background = "bg_color",
    closeClick,
  } = props;
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  const onInputType = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };
  const onClearClick = () => {
    if (ref.current) {
      if (!ref.current.value) closeClick();
      setSearchText("");
      ref.current.value = "";
    }
  };

  return (
    <MHeaderSearchStyle background={background}>
      <button className="header_button" onClick={() => router.back()}>
        <ArrowBackIcon color="text_primary" />
      </button>
      <div className="input_cont">
        <div className="search_icon">
          <SearchIcon width="18" height="18" />
        </div>
        <input placeholder={placeholder} ref={ref} onChange={onInputType} />
        <button className="close_btn" onClick={onClearClick}>
          <CloseFillIcon width="18" height="18" color="icon_color" />
        </button>
      </div>
    </MHeaderSearchStyle>
  );
};
export default MHeaderSearch;
