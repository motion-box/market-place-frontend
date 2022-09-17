import { useTranslation } from "next-i18next";
import React from "react";
import Toggle from "../toggle";
import GuaranteeToggleStyle from "./style";

interface Iprops {
  hasGurantee: boolean;
  setHasGuarantee: (state: boolean) => void;
}

const GuaranteeToggle = (props: Iprops) => {
  const { hasGurantee, setHasGuarantee } = props;
  const { t } = useTranslation();

  return (
    <GuaranteeToggleStyle>
      <div className="text_cont">
        <span className="title">{t("product_guarantee")}</span>
        <span className="description">
          {t(
            hasGurantee ? "product_has_guarantee" : "product_has_not_guarantee"
          )}
        </span>
      </div>
      <Toggle active={hasGurantee} setActive={setHasGuarantee} />
    </GuaranteeToggleStyle>
  );
};

export default GuaranteeToggle;
