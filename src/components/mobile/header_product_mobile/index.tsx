import React from "react";
import MHeaderProductStyle from "./style";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { ColorsPaletTypes } from "../../../resources/constants/colors";
import { HeartOutlineIcon } from "../../../resources/icons/ColorIcons";
import {
  ArrowBackIcon,
  ExportIcon,
  HeartFillIcon,
  OptionIcon,
} from "../../../resources/icons/CommonIcons";
import { motion, AnimatePresence } from "framer-motion";
import NiceModal from "@ebay/nice-modal-react";
import MAnnouncementActionsModal from "../modals/m_announcement_actions_modal";

interface Iprops {
  background?: ColorsPaletTypes;
  active: boolean;
  product: {
    image_url: string;
    title: string;
    price: number;
    currency: "uzs" | "usd" | string;
    is_favorite: boolean;
  };
  isOptions?: true;
}

const MHeaderProduct = (props: Iprops) => {
  const { background = "card_color", product, active, isOptions } = props;
  const { t } = useTranslation();
  const router = useRouter();

  const onOptionClick = () => {
    NiceModal.show(MAnnouncementActionsModal);
  };

  return (
    <MHeaderProductStyle background={background}>
      <button className="header_button" onClick={() => router.back()}>
        <ArrowBackIcon color="text_primary" />
      </button>
      <AnimatePresence>
        {active ? (
          <motion.div
            key="product_header"
            className="product_cont"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            <div className="image_cont">
              <Image src={product.image_url} layout="fill" objectFit="cover" />
            </div>
            <div className="text_cont">
              <span className="title">{product.title}</span>
              <span className="price">{`${product.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
                product.currency
              )}`}</span>
            </div>
          </motion.div>
        ) : (
          <motion.div />
        )}
      </AnimatePresence>
      <div className="right_side">
        {isOptions ? (
          <button className="header_button" onClick={onOptionClick}>
            <OptionIcon color="text_primary" />
          </button>
        ) : (
          <>
            <button className="header_button">
              <ExportIcon color="text_primary" />
            </button>
            <button className="header_button">
              {product.is_favorite ? (
                <HeartFillIcon color="static_purple" />
              ) : (
                <HeartOutlineIcon color="text_primary" />
              )}
            </button>
          </>
        )}
      </div>
    </MHeaderProductStyle>
  );
};

export default MHeaderProduct;
