import React, { useCallback, useEffect, useRef, useState } from "react";
import SelectStyle from "./style";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  useTransform,
  useElementScroll,
} from "framer-motion";
import { useAppSelector } from "../../../redux/store";
import {
  CheckIcon,
  ChevronBigLeftIcon,
} from "../../../resources/icons/CommonIcons";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";
import SearchInput from "../../global/search_input";

interface Iprops {
  placeholder: string;
  is_search?: true;
  disabled?: true;
  selected: number | null;
  setSelected: (state: number | null) => void;
  data: {
    id: number;
    name_ru: string;
    name_uz: string;
    name_oz: string;
  }[];
}

const Select = (props: Iprops) => {
  const { placeholder, data, is_search, selected, setSelected, disabled } =
    props;
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [active, setActive] = useState(false);

  return (
    <SelectStyle disabled={disabled}>
      <div className="selector_cont" onClick={() => setActive(!active)}>
        <div className="text_cont">
          <AnimateSharedLayout>
            {selected === null ? (
              <motion.span
                layoutId={`placeholder_${placeholder}`}
                transition={{ duration: 0.1 }}
                className="placeholder_big"
              >
                {placeholder}
              </motion.span>
            ) : (
              <motion.span
                layoutId={`placeholder_${placeholder}`}
                transition={{ duration: 0.1 }}
                className="placeholder_small"
              >
                {placeholder}
              </motion.span>
            )}
          </AnimateSharedLayout>
          {selected !== null && (
            <div className="text">{data[selected][`name_${locale}`]}</div>
          )}
        </div>
        <div className={`chevron ${active ? "chevron_active" : ""}`}>
          <ChevronBigLeftIcon width="16" height="16" />
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <Options
            is_search={is_search}
            title={placeholder}
            data={data}
            active={selected}
            setActive={setSelected}
            closeDialog={() => setActive(false)}
          />
        )}
      </AnimatePresence>
    </SelectStyle>
  );
};

interface OptionsProps {
  title?: string;
  is_search?: boolean;
  data: {
    id: number;
    name_ru: string;
    name_uz: string;
    name_oz: string;
  }[];
  active: number | null;
  setActive: (state: number | null) => void;
  closeDialog: () => void;
}

const Options = (props: OptionsProps) => {
  const { title, is_search, data, active, setActive, closeDialog } = props;
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [afterOpen, setAfterOpen] = useState(false);
  const dialogContRef = useRef<HTMLDivElement>(null);
  const scrollContRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const { scrollY, scrollYProgress } = useElementScroll(scrollContRef);
  const topClipper = useTransform(scrollY, [0, 24], [0, 1]);
  const bottomClipper = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

  useEffect(() => {
    if (!afterOpen) return setAfterOpen(true);
    document.addEventListener("click", listenButtonClick, false);
    if (dialogContRef.current) {
      dialogContRef.current.clientHeight >= 363 && setIsScrollable(true);
    }

    return () =>
      document.removeEventListener("click", listenButtonClick, false);
  }, [afterOpen]);

  // will close dropdown if clicked outside container
  const listenButtonClick = useCallback((e: MouseEvent) => {
    const el = document.querySelector(`#dialog_element`);
    if (e.target && el) {
      const outside = !el.contains(e.target as Node);
      outside && closeDialog();
    }
  }, []);

  return (
    <motion.div
      ref={dialogContRef}
      id="dialog_element"
      className="options_cont dialog_shadow"
      variants={FADE_BOTTOM_ANIMATION}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      {title && <span className="title">{title}</span>}
      {is_search && (
        <SearchInput
          placeholder="Поиск"
          styles={{
            backgroundColor: "bg_color",
          }}
        />
      )}
      <div className="all_items_cont">
        <motion.div
          className="clipper top_clipper"
          style={{ opacity: topClipper }}
        />
        <motion.div className="items_cont" ref={scrollContRef}>
          {data.map((item, index) => (
            <button
              key={item.id}
              className={`option_item ${
                index === data.length - 1 ? "last_item" : ""
              }`}
              onClick={() => setActive(item.id)}
            >
              <span>{item[`name_${locale}`]}</span>
              {item.id === active && (
                <CheckIcon width="20" height="20" color="static_red" />
              )}
            </button>
          ))}
        </motion.div>
        {isScrollable ? (
          <motion.div className="clipper" style={{ opacity: bottomClipper }} />
        ) : null}
      </div>
    </motion.div>
  );
};

export default Select;
