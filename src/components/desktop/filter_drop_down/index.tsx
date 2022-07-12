import React, { useCallback, useEffect, useState } from "react";
import CategoryDropDownStyle from "./style";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "../../../redux/store";
import { ChevronSmallDownIcon } from "../../../resources/icons/CommonIcons";
import { FilterModel } from "../../../resources/testCategories";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";
import FilterSelector from "./filter_selector";
import Button from "../../global/button";
import FilterDistance from "./filter_distance";
import FilterLocation from "./filter_location";

interface Iprops {
  data: FilterModel;
}

const FilterDropDown = (props: Iprops) => {
  const { data } = props;
  const { t } = useTranslation();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("click", listenButtonClick, false);

    return () =>
      document.removeEventListener("click", listenButtonClick, false);
  }, []);

  // will close dropdown if clicked outside container
  const listenButtonClick = useCallback((e: MouseEvent) => {
    const el = document.querySelector(`#dropdown_${data.key}`);
    if (e.target && el) {
      const outside = !el.contains(e.target as Node);
      // console.log("Dropdown key:", data.key, ";\n Is clicked:", outside);
      outside && setActive(false);
    }
  }, []);

  const onButtonClick = () => {
    setActive(!isActive);
  };

  return (
    <CategoryDropDownStyle id={`dropdown_${data.key}`}>
      <button className="dropdown_button" onClick={onButtonClick}>
        <span>{data[`name_${locale}`]}</span>
        <ChevronSmallDownIcon width="16" height="16" />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="dropdown filter_shadow"
            variants={FADE_BOTTOM_ANIMATION}
            initial="hidden"
            animate="active"
            exit="hidden"
          >
            <div className="titler">
              <span>{data[`name_${locale}`]}</span>
              <button>{t("reset")}</button>
            </div>
            {data.type.includes("multiselect") && (
              <FilterSelector
                selectType="multiselect"
                search={data.type.includes("search")}
                title={
                  data[`title_${locale}`] ? data[`title_${locale}`] : undefined
                }
                data={data.items}
              />
            )}
            {data.type.includes("selector") && (
              <FilterSelector
                selectType="selector"
                search={data.type.includes("search")}
                title={data[`title_${locale}`]}
                data={data.items}
              />
            )}
            {data.type.includes("interval") && <FilterDistance />}
            {data.type.includes("location") && (
              <FilterLocation data={data.items} />
            )}
            <Button
              text={t("accept")}
              onClick={() => console.log("accept changes")}
              options={{
                $width: "100%",
                $height: 48,
                $backgroundColor: "static_red",
                $textColor: "static_white",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </CategoryDropDownStyle>
  );
};

export default FilterDropDown;
