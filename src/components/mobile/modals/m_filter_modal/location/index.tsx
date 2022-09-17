import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { useAppSelector } from "../../../../../redux/store";
import { FilterItemModel } from "../../../../../resources/testCategories";
import MLocationStyle from "./style";

interface Iprops {
  data: FilterItemModel[];
}

const MLocation = (props: Iprops) => {
  const { data } = props;
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { locale } = useAppSelector((state) => state.globalSliceReducer);

  const onButtonClick = (id: number) => {
    setActiveIndex(id !== activeIndex ? id : null);
  };

  return (
    <MLocationStyle>
      <input placeholder="Ул. Асака, дом 15" />
      <div className="buttons_cont">
        {data.map((item) => (
          <button
            key={item.id}
            className={activeIndex === item.id ? "active" : ""}
            onClick={() => onButtonClick(item.id)}
          >
            <span>{item[`name_${locale}`]}</span>
          </button>
        ))}
      </div>
    </MLocationStyle>
  );
};

export default MLocation;
