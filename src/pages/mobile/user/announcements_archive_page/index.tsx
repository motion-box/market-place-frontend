import React, { useMemo } from "react";
import MAnnouncementsArchivePageStyle from "./style";
import { useTranslation } from "next-i18next";
import { ProductModel } from "../../../../models/ProductModel";
import { productData } from "../../../../resources/testProducts";
import Image from "next/image";
import {
  ArchiveIcon,
  ClockIcon,
} from "../../../../resources/icons/CommonIcons";
import moment from "moment";
import { useRouter } from "next/router";

interface PageProps {}

const MAnnouncementsArchivePage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();

  const archiveProducts = useMemo(
    () =>
      productData.map((item) => {
        return { ...item, is_archive: true };
      }),
    []
  );

  const mapItems = archiveProducts.map((item, index) => (
    <Item
      key={index}
      {...item}
      index={index}
      productsLength={archiveProducts.length}
      onClick={() =>
        router.push(`/mobile/user/announcements/announcement/${item.id}`)
      }
    />
  ));

  return (
    <MAnnouncementsArchivePageStyle>
      <div className="cards_cont">{mapItems}</div>
    </MAnnouncementsArchivePageStyle>
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

export default MAnnouncementsArchivePage;
