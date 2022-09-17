import React, { useState } from "react";
import MFilterModalStyle from "./style";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Modal from "../../../global/modal";
import { motion, AnimatePresence } from "framer-motion";
import { BOTTOM_SHEET_SLIDE_ANIMATION } from "../../../../resources/constants/animations";
import { useTranslation } from "next-i18next";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import SearchInput from "../../../global/search_input";
import { FilterModel } from "../../../../resources/testCategories";
import { useAppSelector } from "../../../../redux/store";
import MSelector from "./selector";
import MDistance from "./distance";
import MLocation from "./location";

export interface MFilterModalProps {
  data: FilterModel;
}

const MFilterModal = NiceModal.create<MFilterModalProps>((props) => {
  const { data } = props;
  const { t } = useTranslation();
  const modal = useModal();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [isModal, setModal] = useState(true);

  const closeModal = () => {
    setModal(false);
    setTimeout(() => {
      modal.remove();
    }, 400);
  };

  return (
    <Modal isModal={modal.visible}>
      <AnimatePresence>
        {isModal && (
          <MFilterModalStyle>
            <motion.div
              className="container"
              variants={BOTTOM_SHEET_SLIDE_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
            >
              <div className="top_cont">
                <button className="clear">{t("reset")}</button>
                <span className="title">{data[`name_${locale}`]}</span>
                <button className="close_btn" onClick={closeModal}>
                  <CloseIcon color="text_primary" />
                </button>
              </div>
              {data.type.includes("search") && (
                <div className="sarch_cont">
                  <SearchInput
                    placeholder={t("find")}
                    styles={{ backgroundColor: "bg_color" }}
                  />
                  <button className="cancel">{t("cancel")}</button>
                </div>
              )}
              {data.type.includes("selector") && (
                <MSelector type="select" data={data} height="fit" />
              )}
              {data.type.includes("multiselect") && (
                <MSelector type="multiselect" data={data} height="full" />
              )}
              {data.type.includes("interval") && <MDistance />}
              {data.type.includes("location") && (
                <MLocation data={data.items} />
              )}
            </motion.div>
          </MFilterModalStyle>
        )}
      </AnimatePresence>
    </Modal>
  );
});

export default MFilterModal;
