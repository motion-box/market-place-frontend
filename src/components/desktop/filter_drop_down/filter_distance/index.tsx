import { useTranslation } from "next-i18next";
import React from "react";
import FilterDistanceStyle from "./style";

interface Iprops {}

const FilterDistance = (props: Iprops) => {
  const {} = props;
  const { t } = useTranslation();

  return (
    <FilterDistanceStyle>
      <div className="inut_cont">
        <span>{t("from")}</span>
        <input placeholder="100 000" type="number" />
      </div>
      <div className="inut_cont">
        <span>{t("to")}</span>
        <input placeholder="18 000 000" type="number" />
      </div>
    </FilterDistanceStyle>
  );
};

export default FilterDistance;
