import React, { useEffect, useMemo, useState } from "react";
import MLoginPageStyle from "./style";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NiceModal from "@ebay/nice-modal-react";
import Button from "../../../components/global/button";
import ConfirmTimer from "../../../components/global/confim_timer";
import ConfirmInput from "../../../components/global/confirm_input";
import MaskInput from "../../../components/global/mask_input";
import { LockBigIcon } from "../../../resources/icons/BigIcons";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";
import MRulesModal from "../../../components/mobile/modals/m_rules_modal";

interface PageProps {}

const MOBILE_OPERATORS = ["90", "91", "93", "94", "97", "98", "99", "33"];

type ValidatorModel = {
  error: string;
  valid: boolean;
};

const MLoginPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const [page, setPage] = useState<"page" | "Confirm">("page");
  const [phone, setPhone] = useState("");

  const isPhoneValid = useMemo<ValidatorModel>(() => {
    console.log("phone number is:", phone);
    if (phone.length < 17)
      return {
        error: "",
        valid: false,
      };

    const numberSplit = phone.split(" ");
    if (MOBILE_OPERATORS.includes(numberSplit[1])) {
      return {
        error: "",
        valid: true,
      };
    } else {
      return {
        error: t("phone_number_operator_error"),
        valid: false,
      };
    }
  }, [phone]);

  const openRulesModal = () => {
    NiceModal.show(MRulesModal);
  };

  return (
    <MLoginPageStyle>
      {page === "page" && (
        <div className="page_cont">
          <div className="image_wrapper">
            <div className="image_cont">
              <div className="gradient" />
              <div className="image">
                <Image
                  src="/images/login_card_bg.png"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
            </div>
          </div>
          <div className="content_cont">
            <div className="wallet_icon">
              <LockBigIcon width="128" height="128" />
            </div>
            <div className="inputs_cont">
              <MaskInput
                text={phone}
                setText={setPhone}
                mask="+\9\98 99 999 99 99"
                placeholder={t("phone_number")}
              />
              <div className="spacer" />
              <Button
                text={t("get_code")}
                onClick={() => setPage("Confirm")}
                disabled={!isPhoneValid.valid}
                options={{
                  $width: "100%",
                  $backgroundColor: "static_red",
                  $textColor: "static_white",
                }}
              />
              <div className="spacer" />
              <span className="rules_cont">
                {t("by_press_accept")}
                <span className="btn">
                  <button onClick={openRulesModal}>{t("rules")}</button>
                </span>
              </span>
            </div>
          </div>
          <ErrorPopup {...isPhoneValid} />
        </div>
      )}
      {page === "Confirm" && (
        <div>
          <div className="confirm_cont">
            <div className="title_cont">
              <h1 className="title">{t("adding_bank_card_sms_title")}</h1>
              <p className="description">
                {t("adding_bank_card_sms_description", {
                  number: "+99890 919 13 04",
                })}
              </p>
            </div>
            <ConfirmInput />
            <div className="bottom_cont">
              <ConfirmTimer />
              <Button
                text={t("continue")}
                onClick={() => router.replace("/mobile")}
                options={{
                  $width: "100%",
                  $backgroundColor: "static_red",
                  $textColor: "static_white",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </MLoginPageStyle>
  );
};

const ErrorPopup = (props: ValidatorModel) => {
  const { valid, error } = props;
  const [isActive, setActive] = useState(valid);

  useEffect(() => {
    if (error?.length) {
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, 4000);
    } else {
      setActive(false);
    }
  }, [error]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="error_popup_cont dialog_shadow"
          variants={FADE_BOTTOM_ANIMATION}
          initial="hidden"
          animate="active"
          exit="hidden"
        >
          <span className="error_text">{error}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MLoginPage;
