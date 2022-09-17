import React, { useState } from "react";
import ToggleStyle from "./style";

interface Iprops {
  active: boolean;
  setActive: (state: boolean) => void;
}

const Toggle = (props: Iprops) => {
  const { active, setActive } = props;

  const toggleClick = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <ToggleStyle onClick={toggleClick}>
      <div className={`path ${active ? "path_active" : ""}`} />
      <div className={`circle ${active ? "circle_active" : ""}`} />
    </ToggleStyle>
  );
};

export default Toggle;
