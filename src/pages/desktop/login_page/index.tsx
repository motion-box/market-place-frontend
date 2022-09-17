import React, { useMemo, useState } from "react";
import LoginPageStyle from "./style";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import NiceModal from "@ebay/nice-modal-react";
import Button from "../../../components/global/button";
import ConfirmTimer from "../../../components/global/confim_timer";
import ConfirmInput from "../../../components/global/confirm_input";
import MaskInput from "../../../components/global/mask_input";
import { LockBigIcon } from "../../../resources/icons/BigIcons";
import RulesModal from "../../../components/desktop/modals/rules_modal";

interface PageProps {}

const MOBILE_OPERATORS = ["90", "91", "93", "94", "97", "98", "99", "33"];

type ValidatorModel = {
  error: string;
  valid: boolean;
};

const LoginPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const [page, setPage] = useState<"page" | "comfirm">("page");
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

  const goToMain = () => {
    router.push("/");
  };

  const openRulesModal = () => {
    NiceModal.show(RulesModal);
  };

  return (
    <LoginPageStyle>
      <div className="page_wrapper">
        <div className="card_cont">
          {page === "page" && (
            <div>
              <div className="image_wrapper">
                <div className="image_cont">
                  <div className="gradient" />
                  <div className="image">
                    <Image
                      src="/images/login_card_bg.png"
                      layout="fill"
                      objectFit="contain"
                      priority={true}
                    />
                  </div>
                </div>
              </div>
              <div className="content_cont">
                <h1 className="title">{t("login")}</h1>
                <div className="lock_icon">
                  <LockBigIcon width="128" height="128" />
                </div>
                <div className="inputs_cont">
                  <MaskInput
                    text={phone}
                    setText={setPhone}
                    mask="+\9\98 99 999 99 99"
                    placeholder={t("phone_number")}
                    error={isPhoneValid.error}
                  />
                  <Button
                    text={t("get_code")}
                    onClick={() => setPage("comfirm")}
                    disabled={!isPhoneValid.valid}
                    options={{
                      $width: "100%",
                      $textColor: "static_white",
                      $backgroundColor: "static_red",
                    }}
                  />
                  <span className="rules_cont">
                    {t("by_press_accept")}
                    <span className="btn">
                      <button onClick={openRulesModal}>{t("rules")}</button>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          )}
          {page === "comfirm" && (
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
                    onClick={goToMain}
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
        </div>
      </div>
    </LoginPageStyle>
  );
};

export default LoginPage;
