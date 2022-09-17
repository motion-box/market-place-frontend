import React from "react";
import PagePlaceholderStyle from "./style";
import * as AllBigIcons from "../../../resources/icons/BigIcons";

interface Iprops {
  icon: AllBigIcons.BigIconsType;
  title: string;
  description: string;
  height?: number;
}

const PagePlaceholder = (props: Iprops) => {
  const { icon, title, description, height = 162 } = props;

  return (
    <PagePlaceholderStyle height={height}>
      {React.createElement(AllBigIcons[icon], { width: "128", height: "128" })}
      <h1 className="placeholder_title">{title}</h1>
      <p className="placeholder_description">{description}</p>
    </PagePlaceholderStyle>
  );
};

export default PagePlaceholder;
