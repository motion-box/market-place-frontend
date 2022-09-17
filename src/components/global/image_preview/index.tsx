import React, { useEffect, useState } from "react";
import ImagePreviewStyle from "./style";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Image from "next/image";
import Modal from "../modal";
import { useTranslation } from "next-i18next";
import {
  ChevronSmallDownIcon,
  CloseIcon,
} from "../../../resources/icons/CommonIcons";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import BuyButton from "../buy_button";

interface Iprops {
  activeIndex: number;
  images: string[];
  has_guarantee: boolean;
  currency: "uzs" | "usd" | string;
  price: number;
  product_id: number;
  is_mobile?: true;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ImagePreview = NiceModal.create<Iprops>((props) => {
  const {
    activeIndex,
    images,
    currency,
    has_guarantee,
    price,
    product_id,
    is_mobile,
  } = props;
  const { t } = useTranslation();
  const modal = useModal();
  const [[page, direction], setPage] = useState([activeIndex, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const hide = () => {
    modal.remove();
  };

  return (
    <Modal isModal={modal.visible}>
      <ImagePreviewStyle>
        <div className="number_cont" onClick={hide}>{`${imageIndex + 1} ${t(
          "of"
        )} ${images.length}`}</div>
        <button className="close_button" onClick={hide}>
          <CloseIcon width="24" height="24" color="static_white" />
        </button>
        <div className="image_cont">
          {!is_mobile && (
            <div className="control prev" onClick={() => paginate(-1)}>
              <ChevronSmallDownIcon
                width="20"
                height="20"
                color="static_white"
              />
            </div>
          )}
          <div className="image_preview">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                className="image_wrapper"
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <Image
                  src={images[imageIndex]}
                  layout="fill"
                  objectFit="contain"
                  alt={images[imageIndex]}
                  priority={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          {!is_mobile && (
            <div className="control next" onClick={() => paginate(1)}>
              <ChevronSmallDownIcon
                width="20"
                height="20"
                color="static_white"
              />
            </div>
          )}
        </div>
        <div className="buy_button_cont">
          <BuyButton
            price={price}
            currency={currency}
            has_guarantee={has_guarantee}
            product_id={product_id}
          />
        </div>
      </ImagePreviewStyle>
    </Modal>
  );
});

export default ImagePreview;
