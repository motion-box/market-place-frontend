import Image from "next/image";
import React, { useMemo } from "react";
import { OrderModel, OrderStatusType } from "../../../models/OrderModel";
import { ProductModel } from "../../../models/ProductModel";
import { ColorsPaletTypes } from "../../../resources/constants/colors";
import OrderCardStyle from "./style";
import * as AllCommonIcons from "../../../resources/icons/CommonIcons";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface Iprops extends OrderModel {
  product: ProductModel;
  active: boolean;
  isMobile?: true;
}

const OrderCard = (props: Iprops) => {
  const { id, product, status, description, active, isMobile } = props;
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
        case "delivered":
          color = "static_green";
          icon = "DeliverFillIcon";
          break;
        default:
          color = "static_green";
          icon = "CheckOutlineIcon";
          break;
      }
      return { color, icon };
    };
    const type = dataPicker(status.type);

    return {
      ...status,
      color: type.color,
      icon: type.icon,
    };
  }, []);

  return (
    <Link
      href={`${isMobile ? "/mobile" : ""}/user/orders/detail/${id}?type=${
        active ? "active" : "archive"
      }`}
    >
      <OrderCardStyle>
        <div className="image_cont">
          <Image src={product.image_url} layout="fill" objectFit="cover" />
        </div>
        <div className="content_cont">
          <div className="product_cont">
            <span className="title">{product.title}</span>
            <span className="price">{`${product.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
              product.currency
            )}`}</span>
          </div>
          <div className="status_cont">
            <div className="status_type">
              <div className="status_card">
                {React.createElement(AllCommonIcons[statusData.icon], {
                  color: statusData.color,
                  width: "16",
                  height: "16",
                })}
                <span style={{ color: `var(--${statusData.color})` }}>
                  {t(status.type)}
                </span>
              </div>
              {status.description && (
                <div className="description">
                  <div>{status.time}</div>
                  <span>{status.description}</span>
                </div>
              )}
            </div>
            <span className="status_description">{description}</span>
          </div>
        </div>
      </OrderCardStyle>
    </Link>
  );
};

export default OrderCard;
