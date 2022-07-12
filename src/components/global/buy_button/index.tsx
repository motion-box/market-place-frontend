import { useTranslation } from "next-i18next";
import { ShieldColorIcon } from "../../../resources/icons/ColorIcons";
import Button from "../button";
import BuyButtonStyle from "./style";

interface Iprops {
  price: number;
  currency: "uzs" | "usd" | string;
  has_guarantee: boolean;
}

const BuyButton = (props: Iprops) => {
  const { t } = useTranslation();
  const { price, currency, has_guarantee } = props;
  return (
    <BuyButtonStyle>
      <div className="left_cont">
        <div className="top_cont">
          {has_guarantee ? (
            <>
              <ShieldColorIcon width="16" height="16" />
              <span className="guarantee_text">
                {t("money_back_guarantee")}
              </span>
            </>
          ) : (
            <span className="price_text">{t("price")}</span>
          )}
        </div>
        <span className="price">{`${price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(currency)}`}</span>
      </div>
      <Button
        text={t("buy")}
        onClick={() => console.log("buy")}
        options={{
          $backgroundColor: "static_red",
          $textColor: "static_white",
        }}
      />
    </BuyButtonStyle>
  );
};

export default BuyButton;
