import React, { useState } from "react";
import ConditionPickerStyle from "./style";
import { useTranslation } from "next-i18next";
import { motion, AnimateSharedLayout } from "framer-motion";
import Toggle from "../toggle";

interface Iprops {
  condition: number | false | null;
  setCondition: (state: number | false | null) => void;
  optionOnClick: () => void;
}

const ConditionPicker = (props: Iprops) => {
  const { condition, setCondition, optionOnClick } = props;
  const { t } = useTranslation();
  const [isToggle, setToggle] = useState(false);

  const onToggleClick = (state: boolean) => {
    setToggle(state);
    if (state) {
      setCondition(false);
    } else {
      setCondition(null);
    }
  };

  const mapItems = Array.from({ length: 10 }, (_, i) => i + 1).map((item) => (
    <button className="item" key={item} onClick={() => setCondition(item)}>
      <span className={item === condition ? "active_text" : ""}>{item}</span>
      {condition === item && <motion.div className="bg" layoutId="bg" />}
    </button>
  ));

  return (
    <ConditionPickerStyle>
      <div className="top_bottom_cont">
        <span className="text">{t("product_condition")}</span>
        <button className="option_btn" onClick={optionOnClick}>
          {t("what_is_this")}
        </button>
      </div>
      <div
        className={`selector_cont ${
          condition === false ? "selector_cont_disable" : ""
        }`}
      >
        <AnimateSharedLayout>{mapItems}</AnimateSharedLayout>
      </div>
      <div className="top_bottom_cont">
        <span className="text">{t("do_not_want_show_condition")}</span>
        <Toggle active={isToggle} setActive={onToggleClick} />
      </div>
    </ConditionPickerStyle>
  );
};

export default ConditionPicker;
