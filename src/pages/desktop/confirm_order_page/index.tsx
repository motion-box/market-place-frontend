import React, { useMemo, useState } from "react";
import ConfirmOrderPageStyle from "./style";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import NiceModal from "@ebay/nice-modal-react";
import OrderProvider from "../../../components/desktop/order_provider";
import BankCardPicker from "../../../components/global/bank_card_picker";
import Button from "../../../components/global/button";
import { BankCardModel } from "../../../models/BankCardModel";
import { ProductModel } from "../../../models/ProductModel";
import { productData } from "../../../resources/testProducts";
import MessageModal, {
  MessageModalProps,
} from "../../../components/desktop/modals/message_modal";
import PickupModal, {
  PickupModalProps,
} from "../../../components/desktop/modals/pickup_modal";

interface PageProps {}

const cardData: BankCardModel[] = [
  {
    id: 0,
    main: true,
    type: "UZCARD",
    number: "8600 **** **** 1523",
  },
  {
    id: 1,
    main: false,
    type: "HUMO",
    number: "9860 **** **** 1986",
  },
  {
    id: 2,
    main: false,
    type: "UZCARD",
    number: "8600 **** **** 1523",
  },
  {
    id: 3,
    main: false,
    type: "HUMO",
    number: "9860 **** **** 1986",
  },
];

const ConfirmOrderPage = (props: PageProps) => {
  const {} = props;
  const router = useRouter();
  const { t } = useTranslation();
  const [isDelivery, setIsDelivery] = useState(false);

  const product = useMemo<ProductModel | undefined>(() => {
    const data = productData.find(
      (item) => item.id === Number(router.query.id)
    );
    return data;
  }, []);

  const onContinueClick = () => {
    NiceModal.show(MessageModal, {
      icon: "CheckBigIcon",
      title: t("order_successfully_complited"),
      description: t("order_successfully_complited_description"),
      buttons: [
        {
          id: 0,
          name: t("watch_order_detail"),
          icon: "ListIcon",
          route: `/user/orders/detail/${router.query.id}?type=active`,
        },
        {
          id: 1,
          name: t("continue_buying"),
          icon: "MarketIcon",
          route: `/`,
        },
      ],
    } as MessageModalProps);
  };

  const wantPickup = () => {
    NiceModal.show(PickupModal, {
      address_name: "Ташкент, Яккасарайский район, Ивлиева, 24 дом",
      distance: "23 км от вас",
    } as PickupModalProps);
  };

  if (!product)
    return <div className="page_wrapper">Error while finding product</div>;

  return (
    <OrderProvider product={product}>
      <ConfirmOrderPageStyle>
        <div className="info_card">
          <div className="info_card_item">
            <span className="title">{t("seller")}</span>
            <span className="text">{"Андрей"}</span>
          </div>
          <div className="info_card_item">
            <span className="title">{t("phone_number")}</span>
            <span className="text">{"Станет виден после оплаты"}</span>
          </div>
          <div className="info_card_item">
            <span className="title">{t("address")}</span>
            <span className="text">{"Торгове ряды Малика, магазин 49"}</span>
          </div>
        </div>
        <div className="info_card">
          <div className="info_card_item">
            <span className="title">{t("delivery_price")}</span>
            <span className="text">{`${"25000".replace(
              /\B(?=(\d{3})+(?!\d))/g,
              " "
            )} ${t("uzs")}`}</span>
            <button className="want_btn" onClick={wantPickup}>
              {t(isDelivery ? "pickup_by_my_self" : "want_delivery")}
            </button>
          </div>
        </div>
        <BankCardPicker
          title={t("choose_card_for_payment")}
          description={t("choose_card_for_payment_warn")}
          card={cardData}
        />
        <div />
        <Button
          text={t("continue")}
          onClick={onContinueClick}
          options={{
            $width: "100%",
            $backgroundColor: "static_red",
            $textColor: "static_white",
          }}
        />
      </ConfirmOrderPageStyle>
    </OrderProvider>
  );
};

export default ConfirmOrderPage;
