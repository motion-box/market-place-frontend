import React, { useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import MUserAnnouncementsPageStyle from "./style";
import Slider from "../../../../components/global/slider";
import Image from "next/image";
import { productData } from "../../../../resources/testProducts";
import moment from "moment";
import {
  ArchiveIcon,
  ClockIcon,
} from "../../../../resources/icons/CommonIcons";
import { motion, AnimatePresence } from "framer-motion";
import { FADE_BOTTOM_ANIMATION } from "../../../../resources/constants/animations";
import { ProductModel } from "../../../../models/ProductModel";

interface PageProps {}

const sliderData = [
  {
    id: 0,
    key: "active",
    name_ru: "Активные",
    name_uz: "Фаол",
    name_oz: "Faol",
  },
  {
    id: 1,
    key: "not_active",
    name_ru: "Не активные",
    name_uz: "Фаол эмас",
    name_oz: "Faol emas",
  },
  {
    id: 2,
    key: "in_check",
    name_ru: "На проверке",
    name_uz: "Кориб чикилмокда",
    name_oz: "Ko'rib chiqilmoqda",
  },
];

const MUserAnnouncementsPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProducts = useMemo(
    () =>
      productData.map((item) => {
        return { ...item, expire_date: "2022-09-12T19:40", is_archive: false };
      }),
    []
  );
  const notActiveProducts = useMemo(
    () =>
      productData.map((item) => {
        return { ...item };
      }),
    []
  );

  const mapActiveItems = activeProducts.map((item, index) => (
    <Item
      key={index}
      {...item}
      index={index}
      productsLength={activeProducts.length}
      onClick={() =>
        router.push(`/mobile/user/announcements/announcement/${item.id}`)
      }
    />
  ));
  const mapNotActiveItems = notActiveProducts.map((item, index) => (
    <Item
      key={index}
      {...item}
      index={index}
      productsLength={activeProducts.length}
      onClick={() =>
        router.push(`/mobile/user/announcements/announcement/${item.id}`)
      }
    />
  ));

  return (
    <MUserAnnouncementsPageStyle>
      <div className="top_cont">
        <Slider
          data={sliderData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isMobile={true}
        />
      </div>
      <AnimatePresence exitBeforeEnter>
        {activeIndex === 0 && (
          <motion.div
            key={sliderData[0].key}
            className="cards_cont"
            variants={FADE_BOTTOM_ANIMATION}
            initial="hidden"
            animate="active"
            exit="hidden"
          >
            {mapActiveItems}
          </motion.div>
        )}
        {activeIndex === 1 && (
          <motion.div
            key={sliderData[1].key}
            className="cards_cont"
            variants={FADE_BOTTOM_ANIMATION}
            initial="hidden"
            animate="active"
            exit="hidden"
          >
            {mapNotActiveItems}
          </motion.div>
        )}
        {activeIndex === 2 && (
          <motion.div
            key={sliderData[2].key}
            className="cards_cont"
            variants={FADE_BOTTOM_ANIMATION}
            initial="hidden"
            animate="active"
            exit="hidden"
          >
            {mapActiveItems}
          </motion.div>
        )}
      </AnimatePresence>
    </MUserAnnouncementsPageStyle>
  );
};

interface ItemProps extends ProductModel {
  expire_date?: string;
  is_archive?: boolean;
  index: number;
  productsLength: number;
  onClick: () => void;
}

const Item = (props: ItemProps) => {
  const {
    id,
    image_url,
    title,
    price,
    currency,
    old_price,
    is_sale,
    sale_time,
    date,
    expire_date,
    is_archive,
    index,
    productsLength,
    onClick,
  } = props;
  const { t } = useTranslation();
  return (
    <button
      onClick={onClick}
      key={id}
      className={`product_item ${
        index === productsLength - 1 ? "product_item_last" : ""
      }`}
    >
      <div className="image_cont">
        <Image src={image_url} layout="fill" objectFit="cover" />
      </div>
      <div className="right_cont">
        <span className="title">{title}</span>
        <div className="center_cont">
          <div className="price_cont">
            <span className="price">
              {`${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
                currency
              )}`}
            </span>
            {old_price ? (
              <span className="old_price">
                {`${old_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(currency)}`}
                <s />
              </span>
            ) : null}
          </div>
          {expire_date && is_sale && (
            <div className="sale">{`${sale_time}:23`}</div>
          )}
        </div>
        <div className="bottom_cont">
          <span className="date">{moment(date).format("DD MMMM, HH:mm")}</span>
          {expire_date && (
            <div className="additional_cont">
              <ClockIcon width="16" height="16" color="text_secondary" />
              <span>
                {`${moment(expire_date).diff(moment(), "days")} ${t("days")}`}
              </span>
            </div>
          )}
          {is_archive && (
            <div className="additional_cont">
              <ArchiveIcon width="16" height="16" color="text_secondary" />
              <span>{t("in_archive")}</span>
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default MUserAnnouncementsPage;
