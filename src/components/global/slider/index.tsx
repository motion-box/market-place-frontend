import React from "react";
import SliderStyle from "./style";
import { useAppSelector } from "../../../redux/store";
import { AnimateSharedLayout, motion } from "framer-motion";

interface Iprops {
  data: {
    id: number;
    key: string;
    name_ru: string;
    name_uz: string;
    name_oz: string;
  }[];
  activeIndex: number;
  setActiveIndex: (state: number) => void;
}

const Slider = (props: Iprops) => {
  const { data, activeIndex, setActiveIndex } = props;
  const { locale } = useAppSelector((state) => state.globalSliceReducer);

  const mapData = data.map((item) => (
    <button key={item.id} onClick={() => setActiveIndex(item.id)}>
      <span>{item[`name_${locale}`]}</span>
      {activeIndex === item.id && (
        <motion.div className="bg" layoutId={`slider_bg`} />
      )}
      {item.id !== data.length - 1 && <div className="border" />}
    </button>
  ));

  return (
    <SliderStyle>
      <AnimateSharedLayout>{mapData}</AnimateSharedLayout>
    </SliderStyle>
  );
};

export default Slider;
