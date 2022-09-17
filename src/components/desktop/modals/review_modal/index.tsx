import React, { useState } from "react";
import ReviewModalStyle from "./style";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import {
  CloseIcon,
  DislikeIcon,
  LikeIcon,
  StarFillIcon,
  StarOutlineIcon,
} from "../../../../resources/icons/CommonIcons";
import Modal from "../../../global/modal";
import Button from "../../../global/button";
import { useTranslation } from "next-i18next";
import { DIALOG_SLIDE_ANIMATION } from "../../../../resources/constants/animations";
import MessageModal, { MessageModalProps } from "../message_modal";

export interface ReviewModalProps {}

const ReviewModal = NiceModal.create<ReviewModalProps>((props) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const modal = useModal();
  const [step, setStep] = useState(0);

  const onContinueClick = () => {
    if (step == 0) {
      setStep(1);
    } else {
      modal.remove();
      NiceModal.show(MessageModal, {
        icon: "CheckBigIcon",
        title: t("review_thanks_title"),
        description: t("review_thanks_description"),
        button: {
          name: t("back_to_account"),
          route: "/user/orders",
        },
      } as MessageModalProps);
    }
  };

  return (
    <Modal isModal={modal.visible}>
      <ReviewModalStyle>
        <button
          aria-label="close_button"
          className="close_button"
          onClick={() => modal.remove()}
        >
          <CloseIcon color="text_primary" />
        </button>
        <Progress step={step} />
        <AnimatePresence exitBeforeEnter>
          {step === 0 && <SatisfyCurier key="satisfy_courier" />}
          {step === 1 && <SatisfySeller key="satisfy_seller" />}
        </AnimatePresence>
        <Button
          text={t("continue")}
          onClick={onContinueClick}
          options={{
            $width: "100%",
            $backgroundColor: "static_red",
            $textColor: "static_white",
          }}
        />
      </ReviewModalStyle>
    </Modal>
  );
});

interface ProgressProps {
  step: number;
}
const Progress = ({ step }: ProgressProps) => {
  return (
    <div className="progress_cont">
      <div className="progress">
        {step >= 0 && (
          <motion.div
            className="line"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
          />
        )}
        <div className="bg" />
      </div>
      <div className="progress">
        {step > 0 && (
          <motion.div
            className="line"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
          />
        )}
        <div className="bg" />
      </div>
    </div>
  );
};

const SatisfyCurier = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="step_cont"
      variants={DIALOG_SLIDE_ANIMATION}
      initial="visible"
      exit="left_hidden"
    >
      <div className="title_cont">
        <h1 className="title">{t("satisfied_courier_work")}</h1>
        <span className="description">
          {t("satisfied_courier_work_description")}
        </span>
      </div>
      <LikeDislike />
      <CommentCont />
    </motion.div>
  );
};

const SatisfySeller = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="step_cont"
      variants={DIALOG_SLIDE_ANIMATION}
      initial="visible"
      exit="left_hidden"
    >
      <div className="title_cont">
        <h1 className="title">{t("satisfied_seller_work")}</h1>
        <span className="description">
          {t("satisfied_seller_work_description")}
        </span>
      </div>
      <StarsSelector />
      <CommentCont />
    </motion.div>
  );
};

const LikeDislike = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<"dislike" | "like">();

  return (
    <div className="like_cont">
      <div className="cont">
        <button
          className={`dialog_shadow dislike_btn ${
            active === "dislike" ? "active_dislike" : ""
          }`}
          onClick={() =>
            setActive(active === "dislike" ? undefined : "dislike")
          }
        >
          <DislikeIcon
            color={active === "dislike" ? "static_white" : "static_red"}
            width="36"
            height="36"
          />
        </button>
        <span>{t("not_satisfied")}</span>
      </div>
      <div className="cont">
        <button
          className={`dialog_shadow like_btn ${
            active === "like" ? "active_like" : ""
          }`}
          onClick={() => setActive(active === "like" ? undefined : "like")}
        >
          <LikeIcon
            color={active === "like" ? "static_white" : "static_green"}
            width="36"
            height="36"
          />
        </button>
        <span>{t("all_good")}</span>
      </div>
    </div>
  );
};

const StarsSelector = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="stars_cont">
      {[1, 2, 3, 4, 5].map((item) => (
        <button key={item} onClick={() => setActive(item)}>
          <StarOutlineIcon width="48" height="48" color="static_red50" />
        </button>
      ))}
      <div className="active_stars">
        {[1, 2, 3, 4, 5].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0 }}
            animate={{ opacity: item <= active ? 1 : 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
          >
            <StarFillIcon
              key={item}
              width="48"
              height="48"
              color="static_red"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CommentCont = () => {
  const { t } = useTranslation();
  return (
    <div className="comment_cont">
      <span>{t("comment")}</span>
      <textarea placeholder={t("comment_optional_description")} />
    </div>
  );
};

export default ReviewModal;
