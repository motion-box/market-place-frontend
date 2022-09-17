import React, { useMemo } from "react";
import MOrderDetailPageStyle from "./style";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../../redux/store";
import {
  activeOrderData,
  notActiveOrderData,
  orderDetailData,
} from "../../../../resources/testOrders";
import { productData } from "../../../../resources/testProducts";
import MHeader from "../../../../components/mobile/header_mobile";
import moment from "moment";
import MOrderHeader from "../../../../components/mobile/order_header";
import OrderDetails from "../../../../components/desktop/order_items/order_details";

interface PageProps {}

const MOrderDetailPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);

  const data = useMemo(() => {
    const findData = (data: any[]) => {
      return data.find((item) => item.id === Number(router.query.id));
    };

    const product = findData(productData);
    const order =
      router.query.type === "active"
        ? findData(activeOrderData)
        : findData(notActiveOrderData);
    const detail = findData(orderDetailData);

    return { product, order, detail };
  }, []);

  return (
    <>
      <MHeader
        title={`${t("order")} #${data.order.id}, от ${moment(
          data.product.date
        ).format("DD MMMM")}`}
        titleType="small"
        goBack={true}
      />
      <MOrderDetailPageStyle>
        <MOrderHeader
          product={data.product}
          buyer_phone={data.detail.buyer_phone}
          deliver_date={data.detail.deliver_date}
          address={data.detail.address}
          status_type={data.order.status.type}
          order_date={data.detail.order_date}
        />
        <OrderDetails order={data.order} detail={data.detail} isMobile={true} />
      </MOrderDetailPageStyle>
    </>
  );
};

export default MOrderDetailPage;
