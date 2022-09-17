import { useTranslation } from "next-i18next";
import React from "react";
import Button from "../../../../global/button";
import MDistanceStyle from "./style";

interface Iprops {}

const MDistance = (props: Iprops) => {
  const {} = props;
  const { t } = useTranslation();

  return (
    <MDistanceStyle>
      <div className="inputs_cont">
        <div className="inut_cont">
          <span>{t("from")}</span>
          <input placeholder="100 000" type="number" />
        </div>
        <div className="inut_cont">
          <span>{t("to")}</span>
          <input placeholder="18 000 000" type="number" />
        </div>
      </div>
      <Button
        text={t("accept")}
        onClick={() => console.log("accept")}
        options={{
          $width: "100%",
          $backgroundColor: "static_red",
          $textColor: "static_white",
        }}
      />
    </MDistanceStyle>
  );
};

export default MDistance;
