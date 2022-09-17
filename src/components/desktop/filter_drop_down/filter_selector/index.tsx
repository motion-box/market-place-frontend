import React, { useEffect, useRef, useState } from "react";
import { CheckIcon } from "../../../../resources/icons/CommonIcons";
import FilterSelectorStyle from "./style";
import {
  AnimatePresence,
  motion,
  useElementScroll,
  useTransform,
} from "framer-motion";
import { FilterItemModel } from "../../../../resources/testCategories";
import SearchInput from "../../../global/search_input";
import { useAppSelector } from "../../../../redux/store";
import { FADE_SCALE_ANIMATION } from "../../../../resources/constants/animations";

interface Iprops {
  selectType: "selector" | "multiselect";
  search: boolean;
  title?: string;
  data: FilterItemModel[];
}

interface ItemModel extends FilterItemModel {
  isSelected: boolean;
}

const FilterSelector = (props: Iprops) => {
  const { selectType, search, title, data } = props;
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsContRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useElementScroll(itemsContRef);
  const topClipper = useTransform(scrollY, [0, 24], [0, 1]);
  const bottomClipper = useTransform(scrollYProgress, [0.95, 1], [1, 0]);
  const [isScrollable, setScrollable] = useState(false);
  const [items, setItems] = useState<ItemModel[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      console.log(containerRef.current.clientHeight);
      if (containerRef.current?.clientHeight >= 300) {
        setScrollable(true);
      }
    }

    const items_data = data.map((item) => ({ ...item, isSelected: false }));
    setItems(items_data);
  }, [items]);

  const onItemClick = (id: number) => {
    const item_data = [...items];
    item_data[id] = { ...item_data[id], isSelected: !item_data[id].isSelected };
    setItems([...item_data]);
  };

  return (
    <FilterSelectorStyle ref={containerRef}>
      {search && (
        <SearchInput
          placeholder="Поиск"
          styles={{
            height: 48,
            backgroundColor: "bg_color",
            placeholderColor: "icon_color",
          }}
        />
      )}
      {title && (
        <div className="selector_titler">
          <span>{title}</span>
        </div>
      )}
      <motion.div
        className="clipper top_clipper"
        style={{ opacity: topClipper }}
      />
      <motion.div className="container" ref={itemsContRef}>
        {items.map((item, index) => (
          <button key={item.id} onClick={() => onItemClick(index)}>
            <span>{item[`name_${locale}`]}</span>
            <AnimatePresence>
              {item.isSelected && (
                <motion.div
                  variants={FADE_SCALE_ANIMATION}
                  initial="hidden"
                  animate="active"
                  exit="hidden"
                >
                  <CheckIcon color="static_red" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}
      </motion.div>
      {isScrollable && (
        <motion.div
          className="clipper bottom_cliper"
          style={{ opacity: bottomClipper }}
        />
      )}
    </FilterSelectorStyle>
  );
};

export default FilterSelector;
