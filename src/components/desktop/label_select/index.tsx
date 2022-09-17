import React, { useCallback, useEffect, useState } from "react";
import LabelSelectStyle from "./style";
import { useTranslation } from "next-i18next";
import {
  CheckIcon,
  ChevronSmallDownIcon,
} from "../../../resources/icons/CommonIcons";
import { useAppSelector } from "../../../redux/store";
import { motion, AnimatePresence } from "framer-motion";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";

interface Iprops {
  label: string;
  placeholder: string;
  selected: number | null;
  setSelected: (state: number | null) => void;
  optionText?: string;
  optionOnClick?: () => void;
  data: {
    id: number;
    name_ru: string;
    name_uz: string;
    name_oz: string;
  }[];
}

const LabelSelect = (props: Iprops) => {
  const {
    label,
    placeholder,
    selected,
    setSelected,
    data,
    optionText,
    optionOnClick,
  } = props;
  const { t } = useTranslation();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [focused, setFocused] = useState(false);

  const closeDialog = () => {
    setFocused(false);
  };

  return (
    <LabelSelectStyle>
      <div className="top_cont">
        <label>{label}</label>
        {optionText && (
          <button className="option" onClick={optionOnClick}>
            {optionText}
          </button>
        )}
      </div>
      <button className="select_btn" onClick={() => setFocused(true)}>
        {selected !== null ? (
          <span className="text">{data[selected][`name_${locale}`]}</span>
        ) : (
          <span className="placeholder">{placeholder}</span>
        )}
        <div className={`chevron ${focused ? "chevron_active" : ""}`}>
          <ChevronSmallDownIcon />
        </div>
      </button>
      <AnimatePresence>
        {focused && (
          <Dialog
            closeDialog={closeDialog}
            title={placeholder}
            data={data}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </AnimatePresence>
    </LabelSelectStyle>
  );
};

interface DialogProps {
  title: string;
  closeDialog: () => void;
  selected: number | null;
  setSelected: (state: number | null) => void;
  data: {
    id: number;
    name_ru: string;
    name_uz: string;
    name_oz: string;
  }[];
}
const Dialog = (props: DialogProps) => {
  const { title, closeDialog, data, selected, setSelected } = props;
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [afterOpen, setAfterOpen] = useState(false);

  useEffect(() => {
    if (!afterOpen) return setAfterOpen(true);
    document.addEventListener("click", listenButtonClick, false);

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

  const onItemClick = (id: number) => {
    setSelected(id);
    closeDialog();
  };

  return (
    <motion.div
      id="dialog_element"
      className="dialog dialog_shadow"
      variants={FADE_BOTTOM_ANIMATION}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      <span className="title">{title}</span>
      <div className="options_cont">
        {data.map((item, index) => (
          <button
            key={item.id}
            className={`${index === data.length - 1 ? "last_btn" : ""}`}
            onClick={() => onItemClick(item.id)}
          >
            <span className={index === selected ? "active" : ""}>
              {item[`name_${locale}`]}
            </span>
            {item.id === selected && <CheckIcon color="static_red" />}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default LabelSelect;
