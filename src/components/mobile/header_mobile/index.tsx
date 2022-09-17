import React from "react";
import MHeaderStyle from "./style";
import * as AllCommonIcons from "../../../resources/icons/CommonIcons";
import * as AllColorIcons from "../../../resources/icons/ColorIcons";
import { useRouter } from "next/router";
import { ColorsPaletTypes } from "../../../resources/constants/colors";
const AllIcons = { ...AllColorIcons, ...AllCommonIcons };

interface Iprops {
  title?: string;
  titleType?: "small" | "big";
  goBack?: true;
  background?: ColorsPaletTypes;
  rightSide?: {
    firstBtn?: {
      icon: AllCommonIcons.CommonIconsType | AllColorIcons.ColorIconsType;
      onClick: () => void;
    };
    secondBtn?: {
      icon: AllCommonIcons.CommonIconsType | AllColorIcons.ColorIconsType;
      onClick: () => void;
    };
  };
}

const MHeader = (props: Iprops) => {
  const {
    title,
    titleType = "small",
    background = "bg_color",
    goBack,
    rightSide,
  } = props;
  const router = useRouter();

  return (
    <MHeaderStyle background={background}>
      <div className="container">
        <div className="left_side">
          {goBack && (
            <button className="header_button" onClick={() => router.back()}>
              <AllCommonIcons.ArrowBackIcon color="text_primary" />
            </button>
          )}
          {titleType === "big" && (
            <span className="header_big_title">{title}</span>
          )}
        </div>
        <div className="center_side">
          {titleType === "small" && (
            <span className="header_small_title">{title}</span>
          )}
        </div>
        <div className="right_side">
          {rightSide && (
            <>
              {rightSide.firstBtn && (
                <button
                  className="header_button"
                  onClick={rightSide.firstBtn.onClick}
                >
                  {React.createElement(AllIcons[rightSide.firstBtn.icon], {
                    color: "text_primary",
                  })}
                </button>
              )}
              {rightSide.secondBtn && (
                <button
                  className="header_button"
                  onClick={rightSide.secondBtn.onClick}
                >
                  {React.createElement(AllIcons[rightSide.secondBtn.icon], {
                    color: "text_primary",
                  })}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </MHeaderStyle>
  );
};

export default MHeader;
