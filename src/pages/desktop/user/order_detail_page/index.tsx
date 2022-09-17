import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import OrderDetails from "../../../../components/desktop/order_items/order_details";
import OrderHeader from "../../../../components/desktop/order_items/order_header";
import UserPageCont from "../../../../components/desktop/user_page_cont/indext";
import { useAppSelector } from "../../../../redux/store";
import {
  activeOrderData,
  notActiveOrderData,
  orderDetailData,
} from "../../../../resources/testOrders";
import { productData } from "../../../../resources/testProducts";
import OrderDetailPageStyle from "./style";

interface PageProps {}

const pagesData = [
  {
    id: 0,
    key: "announcements",
    name_ru: "Объявления",
    name_uz: "Элонлар",
    name_oz: "Elonlar",
  },
  {
    id: 1,
    key: "messages",
    name_ru: "Сообщения",
    name_uz: "Хабарлар",
    name_oz: "Xabarlar",
  },
  {
    id: 2,
    key: "favorites",
    name_ru: "Избранное",
    name_uz: "Севимлилар",
    name_oz: "Sevimlilar",
  },
  {
    id: 3,
    key: "profile",
    name_ru: "Личные данные",
    name_uz: "Щахсий малумотлар",
    name_oz: "Shaxsiy ma'lumotlar",
  },
  {
    id: 4,
    key: "bank_cards",
    name_ru: "Банковские карты",
    name_uz: "Банк карталари",
    name_oz: "Bank kartalari",
  },
  {
    id: 5,
    key: "reviews",
    name_ru: "Отзывы",
    name_uz: "Шархлар",
    name_oz: "Sharhlar",
  },
  {
    id: 6,
    key: "orders",
    name_ru: "Заказы",
    name_uz: "Буюртмалар",
    name_oz: "Buyurtmalar",
  },
  {
    id: 7,
    key: "black_list",
    name_ru: "Черный список",
    name_uz: "Кора ройхат",
    name_oz: "Qora ro'yxat",
  },
];

const OrderDetailPage = (props: PageProps) => {
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
    <OrderDetailPageStyle>
      <UserPageCont
        title={pagesData[6][`name_${locale}`]}
        active_page={6}
        pages={pagesData}
        has_data={true}
        activeIndex={0}
        setActiveIndex={() => console.log(0)}
      >
        {data.detail
          ? data.order
            ? data.product && (
                <div className="content_wrapper">
                  <OrderHeader
                    product={data.product}
                    buyer_phone={data.detail.buyer_phone}
                    deliver_date={data.detail.deliver_date}
                    address={data.detail.address}
                    status_type={data.order.status.type}
                    order_date={data.detail.order_date}
                  />
                  <OrderDetails order={data.order} detail={data.detail} />
                </div>
              )
            : null
          : null}
      </UserPageCont>
    </OrderDetailPageStyle>
  );
};

export default OrderDetailPage;
