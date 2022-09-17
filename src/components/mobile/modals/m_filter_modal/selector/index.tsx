import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../../../redux/store";
import { CheckIcon } from "../../../../../resources/icons/CommonIcons";
import { FilterModel } from "../../../../../resources/testCategories";
import MSelectorStyle from "./style";

interface Iprops {
  type: "select" | "multiselect";
  data: FilterModel;
  height: "full" | "fit";
}

const MSelector = (props: Iprops) => {
  const { type, data, height } = props;
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [selected, setSelected] = useState<number[] | number | null>(
    type === "multiselect" ? [] : null
  );

  useEffect(() => console.log(selected), [selected]);

  const onItemClick = (id: number) => {
    if (type === "select") {
      if (selected === id) setSelected(null);
      setSelected(id);
    } else if (type === "multiselect") {
      if (Array.isArray(selected) && selected.includes(id)) {
        const indexOfId = selected.indexOf(id);
        if (indexOfId !== -1) {
          let newArr = [...selected];
          newArr.splice(indexOfId, 1);
          setSelected(newArr);
        }
      } else if (Array.isArray(selected) && !selected.includes(id)) {
        const newArr = [...selected, id];
        setSelected(newArr);
      }
    }
  };

  return (
    <MSelectorStyle height={height}>
      {data.items.map((item, index) => (
        <button
          key={item.id}
          className="item"
          onClick={() => onItemClick(index)}
        >
          <span className="name">{item[`name_${locale}`]}</span>
          {type === "select" && selected == index && (
            <CheckIcon color="static_red" />
          )}
          {Array.isArray(selected)
            ? selected.includes(index) && <CheckIcon color="static_red" />
            : null}
        </button>
      ))}
    </MSelectorStyle>
  );
};

export default MSelector;
