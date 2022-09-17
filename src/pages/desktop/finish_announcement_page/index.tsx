import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import * as AllBigIcons from "../../../resources/icons/BigIcons";
import FinishAnnouncementPageStyle from "./style";

interface PageProps {}

interface BoosterCardModel {
  id: number;
  icon: AllBigIcons.BigIconsType;
  title: string;
  description: string;
  price: string;
  route: string;
}

const data: BoosterCardModel[] = [
  {
    id: 0,
    icon: "RocketBigIcon",
    title: "sell_option_turbo",
    description: "sell_option_turbo_subtitle",
    price: "one_thd_sum_per_hour",
    route: "/boost_announcement/turbo?product_id=0",
  },
  {
    id: 1,
    icon: "TimeBigIcon",
    title: "sell_option_fifteen_min",
    description: "sell_option_fifteen_min_subtitle",
    price: "one_thd_sum_per_hour",
    route: "/boost_announcement/in_fifteen_minutes?product_id=0",
  },
];

const FinishAnnouncementPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();

  const mapItems = data.map((item) => (
    <Link key={item.id} href={item.route}>
      <a className="booster_item">
        <div className="circles">
          <AllBigIcons.CircleRowBigIcon />
        </div>
        {React.createElement(AllBigIcons[item.icon], {
          width: "36",
          height: "36",
        })}
        <div className="title_cont">
          <span className="title">{t(item.title)}</span>
          <p className="description">{t(item.description)}</p>
        </div>
        <span className="price">{t(item.price)}</span>
      </a>
    </Link>
  ));

  return (
    <FinishAnnouncementPageStyle>
      <div className="page_wrapper">
        <h1>{t("announcement_published")}</h1>
        <div className="card_cont">
          <div className="card_title_cont">
            <span className="card_title">{t("sell_product_faster")}</span>
            <span className="card_subtitle">
              {t("sell_product_faster_description")}
            </span>
          </div>
          <div className="card">{mapItems}</div>
        </div>
      </div>
    </FinishAnnouncementPageStyle>
  );
};

export default FinishAnnouncementPage;
