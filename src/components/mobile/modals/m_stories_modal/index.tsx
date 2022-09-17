import React, { useEffect, useState } from "react";
import MStoriesModalStyle from "./style";
import Modal from "../../../global/modal";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { BOTTOM_SHEET_SLIDE_ANIMATION } from "../../../../resources/constants/animations";
import { useTranslation } from "next-i18next";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import * as AllBigIcons from "../../../../resources/icons/BigIcons";
import {
  ChevronSmallDownIcon,
  CloseIcon,
} from "../../../../resources/icons/CommonIcons";
import Button from "../../../global/button";

export interface MobileStoriesModalProps {
  data: {
    id: number;
    title: string;
    description: string;
    icon: AllBigIcons.BigIconsType;
    grad1: string;
    grad2: string;
    button_text: string;
  }[];
  activeIndex: number;
}

const MStoriesModal = NiceModal.create<MobileStoriesModalProps>((props) => {
  const { data, activeIndex } = props;
  const { t } = useTranslation();
  const modal = useModal();
  const [isModal, setModal] = useState(true);
  const [active, setActive] = useState(activeIndex);

  const closeModal = () => {
    setModal(false);
    setTimeout(() => {
      modal.remove();
    }, 400);
  };

  const onControllClick = (dir: "left" | "right") => {
    if (dir === "left" && active > 0) {
      setActive(active - 1);
    } else if (dir === "right" && active < data.length - 1) {
      setActive(active + 1);
    }
  };

  return (
    <Modal isModal={modal.visible}>
      <AnimatePresence>
        {isModal && (
          <MStoriesModalStyle colors={[data[active].grad1, data[active].grad2]}>
            <motion.div
              className="container"
              variants={BOTTOM_SHEET_SLIDE_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
            >
              <div className="top_cont">
                <Indicator
                  dataLength={data.length}
                  active={active}
                  setActive={setActive}
                />
                <button className="close" onClick={closeModal}>
                  <CloseIcon color="static_white" />
                </button>
              </div>
              <button
                className="controll controll_left"
                onClick={() => onControllClick("left")}
              />
              {React.createElement(AllBigIcons[data[active].icon], {
                width: "176",
                height: "176",
              })}
              <h1>{data[active].description}</h1>
              <Button
                text={data[active].button_text}
                onClick={() => console.log(data[active].button_text)}
                options={{
                  $width: "100%",
                  $height: 60,
                  $backgroundColor: "static_red",
                  $textColor: "static_white",
                }}
              />
              <button
                className="controll controll_right"
                onClick={() => onControllClick("right")}
              />
            </motion.div>
          </MStoriesModalStyle>
        )}
      </AnimatePresence>
    </Modal>
  );
});

interface IndicatorProps {
  dataLength: number;
  active: number;
  setActive: (state: number) => void;
}

const Indicator = (props: IndicatorProps) => {
  const { dataLength, active, setActive } = props;

  return (
    <div className="indicator_cont">
      {Array.from(Array(dataLength).keys()).map((item) => (
        <IndicatorItem
          key={item}
          id={item}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

interface IndicatorItemProps {
  id: number;
  active: number;
  setActive: (state: number) => void;
}
const variants = {
  toEnd: {
    width: "100%",
    transition: {
      duration: 5,
      ease: "linear",
    },
  },
  fromStart: {
    width: "0%",
    transition: {
      duration: 0,
      ease: "linear",
    },
  },
  fromEnd: {
    width: "100%",
    transition: {
      duration: 0,
      ease: "linear",
    },
  },
};
const IndicatorItem = (props: IndicatorItemProps) => {
  const { id, active, setActive } = props;
  const controls = useAnimation();

  //   useEffect(() => {
  //     console.log("change");
  //     if (active === id) {
  //       controls.start("toEnd");
  //     } else if (active < id) {
  //       controls.set("fromEnd");
  //     } else if (active > id) {
  //       controls.set("fromStart");
  //     }
  //   }, [active]);

  return (
    <div className="indicator_item">
      <motion.div
        className="line"
        variants={variants}
        initial={active > id ? "fromEnd" : "fromStart"}
        animate={controls}
      />
    </div>
  );
};

export default MStoriesModal;
