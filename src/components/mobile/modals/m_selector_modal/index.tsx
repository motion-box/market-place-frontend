import React, { useState } from "react";
import MSelectorModalStyle from "./style";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Modal from "../../../global/modal";
import { useTranslation } from "next-i18next";
import {
  ChevronBigLeftIcon,
  CloseIcon,
} from "../../../../resources/icons/CommonIcons";
import { AnimatePresence, motion } from "framer-motion";
import { BOTTOM_SHEET_SLIDE_ANIMATION } from "../../../../resources/constants/animations";
import { useAppSelector } from "../../../../redux/store";
import { useRouter } from "next/router";

export interface SelectorModalProps {
  modalTitle: string;
  data: {
    id: number;
    key: string;
    name_ru: string;
    name_uz: string;
    name_oz: string;
  }[];
  query: string;
  additional: string;
}

const MSelectorModal = NiceModal.create<SelectorModalProps>((props) => {
  const { modalTitle, data, query, additional } = props;
  const { t } = useTranslation();
  const router = useRouter();
  const modal = useModal();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [isModal, setModal] = useState(true);

  const closeModal = () => {
    setModal(false);
    setTimeout(() => {
      modal.remove();
    }, 400);
  };

  const onClick = (id: number) => {
    closeModal();
    router.push(`/mobile/${additional}${query}=${id}`, undefined, {
      shallow: true,
    });
  };

  return (
    <Modal isModal={modal.visible}>
      <AnimatePresence>
        {isModal && (
          <MSelectorModalStyle>
            <motion.div
              className="container"
              variants={BOTTOM_SHEET_SLIDE_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
            >
              <h1 className="title">{modalTitle}</h1>
              <button className="close_btn" onClick={closeModal}>
                <CloseIcon color="text_primary" />
              </button>
              <div className="selectors_cont">
                {data.map((item, index) => (
                  <button
                    key={item.id}
                    className="item"
                    onClick={() => onClick(index)}
                  >
                    <span className="name">{item[`name_${locale}`]}</span>
                    <ChevronBigLeftIcon width="18" height="18" />
                  </button>
                ))}
              </div>
            </motion.div>
          </MSelectorModalStyle>
        )}
      </AnimatePresence>
    </Modal>
  );
});

export default MSelectorModal;
