import React, { useMemo } from "react";
import MOrderHeaderStyle from "./style";
import { useTranslation } from "next-i18next";
import * as AllCommonIcons from "../../../resources/icons/CommonIcons";
import { OrderStatusType } from "../../../models/OrderModel";
import { ProductModel } from "../../../models/ProductModel";
import { ColorsPaletTypes } from "../../../resources/constants/colors";
import Image from "next/image";
import moment from "moment";

interface Iprops {
  product: ProductModel;
  buyer_phone?: string;
  deliver_date?: string;
  address: string;
  status_type: OrderStatusType;
  order_date: string;
}

const MOrderHeader = (props: Iprops) => {
  const {
    product,
    buyer_phone,
    deliver_date,
    address,
    status_type,
    order_date,
  } = props;
  const { t } = useTranslation();

  const statusData = useMemo(() => {
    const dataPicker = (status: OrderStatusType) => {
      let color: ColorsPaletTypes = "static_green";
      let icon: AllCommonIcons.CommonIconsType = "CheckIcon";
      switch (status) {
        case "delivering":
          color = "static_yellow";
          icon = "DeliverFillIcon";
          break;
        case "new_order":
          color = "static_red";
          icon = "NotifyIcon";
          break;
        case "waiting_courier":
          color = "static_yellow";
          icon = "ClockIcon";
          break;
        case "pickup":
          color = "static_green";
          icon = "SaleIcon";
          break;
        case "rejected":
          color = "static_red";
          icon = "CloseOutlineIcon";
          break;
        case "client_received":
          color = "static_green";
          icon = "CheckOutlineIcon";
          break;
        case "you_received":
          color = "static_green";
          icon = "CheckOutlineIcon";
          break;
        default:
          color = "static_green";
          icon = "CheckOutlineIcon";
          break;
      }
      return { color, icon };
    };
    const type = dataPicker(status_type);

    return {
      color: type.color,
      icon: type.icon,
    };
  }, []);

  return (
    <MOrderHeaderStyle>
      <div className="product_cont">
        <div className="image_cont">
          <Image src={product.image_url} layout="fill" objectFit="cover" />
        </div>
        <div className="text_cont">
          <span className="title">{product.title}</span>
          <span className="price">{`${product.price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
            product.currency
          )}`}</span>
        </div>
      </div>
      <div className="data_cont">
        <div className="status_cont">
          {React.createElement(AllCommonIcons[statusData.icon], {
            color: statusData.color,
            width: "16",
            height: "16",
          })}
          <span style={{ color: `var(--${statusData.color})` }}>
            {t(status_type)}
          </span>
        </div>
        <div className="info_cont">
          <span className="title">{t("ordered")}</span>
          <span className="value">
            {moment(order_date).format("DD MMMM, HH:mm")}
          </span>
        </div>
        <div className="info_cont">
          <span className="title">
            {t(buyer_phone ? "buyer" : "deliver_date")}
          </span>
          <span className="value">
            {buyer_phone
              ? buyer_phone
              : moment(deliver_date).format("D MMMM, HH:mm")}
          </span>
        </div>
        <div className="info_cont">
          <span className="title">{t("deliver")}</span>
          <span className="value">{address}</span>
        </div>
      </div>
    </MOrderHeaderStyle>
  );
};

export default MOrderHeader;
