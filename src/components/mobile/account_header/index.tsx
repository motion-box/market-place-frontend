import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import RatingStars from "../../global/rating_stars";
import AccountHeaderStyle from "./style";

interface Iprops {
  user_name: string;
  rate: number;
  address?: string;
  image_url?: string;
}

const AccountHader = (props: Iprops) => {
  const { user_name, rate, address, image_url } = props;
  const { t } = useTranslation();

  return (
    <AccountHeaderStyle>
      <div className="left_cont">
        <h1>{user_name}</h1>
        <RatingStars rating={rate} />
      </div>
      <div className="image_cont">
        <Image
          src={image_url || "/images/seller/0.png"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {address ? (
        <span className="address">{address}</span>
      ) : (
        <button className="fill_data_cont">
          <span className="title">{t("fill_prifile")}</span>
          <span className="subtitle">{t("fill")}</span>
        </button>
      )}
    </AccountHeaderStyle>
  );
};

export default AccountHader;
