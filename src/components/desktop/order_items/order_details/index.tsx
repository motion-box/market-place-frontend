import React from "react";
import OrderDetailsStyle from "./style";
import { useTranslation } from "next-i18next";
import moment from "moment";
import NiceModal from "@ebay/nice-modal-react";
import {
  OrderDetailModel,
  OrderModel,
  OrderStatusType,
  OrderStepModel,
} from "../../../../models/OrderModel";
import Button from "../../../global/button";
import * as AllCommonIcons from "../../../../resources/icons/CommonIcons";
import { ColorsPaletTypes } from "../../../../resources/constants/colors";
import { FADE_BOTTOM_ANIMATION } from "../../../../resources/constants/animations";
import SmsModal, { SmsModalProps } from "../../modals/sms_modal";
import ReviewModal, { ReviewModalProps } from "../../modals/review_modal";
import InputModal, { InputModalProps } from "../../modals/input_modal";
import { useRouter } from "next/router";

interface Iprops {
  order: OrderModel;
  detail: OrderDetailModel;
  isMobile?: true;
}

interface IconsModel {
  [key: string]: AllCommonIcons.CommonIconsType;
}
interface ColorsModel {
  [key: string]: ColorsPaletTypes;
}

const icons: IconsModel = {
  rejected: "CloseFillIcon",
  done: "CheckFillIcon",
  pending: "PendingFillIcon",
  on_way: "DeliverFillIcon",
  not_awailable: "CircleEmptyIcon",
};
const colors: ColorsModel = {
  rejected: "static_red",
  done: "static_green",
  pending: "static_yellow",
  on_way: "static_yellow",
  not_awailable: "border_color",
};

const rejectSelectorData = [
  {
    id: 0,
    name_ru: "Брак",
    name_uz: "Бузилган",
    name_oz: "Buzilgan",
  },
  {
    id: 1,
    name_ru: "Курьер нахамил",
    name_uz: "Курйер йомонлащди",
    name_oz: "Kuryer yomonlashdi",
  },
  {
    id: 2,
    name_ru: "Передумал",
    name_uz: "Фикримни озгартирдим",
    name_oz: "Fikrimni o'zgartirdim",
  },
  {
    id: 3,
    name_ru: "Привезли поздно",
    name_uz: "Кечиктирилган",
    name_oz: "Kechiktirilgan",
  },
  {
    id: 4,
    name_ru: "Товар не соответствует описанию",
    name_uz: "Махсулот тавсифга мос келмайди",
    name_oz: "Mahsulot tavsifga mos kelmaydi",
  },
];

const OrderDetails = (props: Iprops) => {
  const { order, detail, isMobile = false } = props;

  return (
    <OrderDetailsStyle
      variants={FADE_BOTTOM_ANIMATION}
      initial="hidden"
      animate="active"
    >
      {detail.type === "seller" && (
        <SellerThread
          status={order.status.type}
          steps={detail.steps}
          isMobile={isMobile}
        />
      )}
      {detail.type === "buyer" && (
        <BuyerThread
          status={order.status.type}
          steps={detail.steps}
          isMobile={isMobile}
        />
      )}
      {detail.type === "pickup" && (
        <PickupThread order={order} isMobile={isMobile} />
      )}
    </OrderDetailsStyle>
  );
};

interface ThreadProps {
  status: OrderStatusType;
  steps?: OrderStepModel[];
  isMobile: boolean;
}
const SellerThread = (props: ThreadProps) => {
  const { status, steps, isMobile } = props;
  const { t } = useTranslation();

  const mapSteps = steps?.map((item) => (
    <div className="step_card" key={item.id}>
      <div
        className={`left_cont ${
          item.status === "not_awailable" ? "disable" : ""
        }`}
      >
        <span className="title">{t(item.title)}</span>
        <span className="date">
          {moment(item.date).format("D MMMM, HH:mm")}
        </span>
      </div>
      <div className="right_cont">
        {React.createElement(AllCommonIcons[icons[item.status]], {
          width: "20",
          height: "20",
          color: colors[item.status],
        })}
      </div>
    </div>
  ));

  return (
    <div className="seller_cont">
      {status === "new_order" ? (
        <>
          <div className="new_order_card">
            <span className="title">{t("give_product_to_courier")}</span>
            <div className="line" />
            <div className="curier_cont">
              <span>Сиевуш</span>
              <span>+99897 450 38 28</span>
            </div>
            <Button
              text={t("i_gave_product")}
              onClick={() => console.log("I gave product")}
              options={{
                $width: "100%",
                $borderColor: "static_red",
                $textColor: "static_red",
                $hoverBackgroundColor: "static_red",
                $hoverBorderColor: "static_red",
                $hoverTextColor: "static_white",
              }}
            />
          </div>
          <Button
            text={t("courier_did_not_arrive")}
            onClick={() => console.log("didn't arrived")}
            icon="WarningRhombusIcon"
            options={{
              $width: "100%",
              $textAlign: "start",
              $borderColor: "border_color",
              $textColor: "text_primary",
              $backgroundColor: "card_color",
              $iconColor: "static_red",
              $hoverBorderColor: "static_red",
              $hoverTextColor: "static_white",
              $hoverBackgroundColor: "static_red",
              $hoverIconColor: "static_white",
            }}
          />
        </>
      ) : (
        <div className="steps_cont">{mapSteps}</div>
      )}
    </div>
  );
};

const BuyerThread = (props: ThreadProps) => {
  const { status, steps, isMobile } = props;
  const { t } = useTranslation();
  const router = useRouter();

  const mapSteps = steps?.map((item) => (
    <div className="step_card" key={item.id}>
      <div
        className={`left_cont ${
          item.status === "not_awailable" ? "disable" : ""
        }`}
      >
        <span className="title">{t(item.title)}</span>
        <span className="date">
          {moment(item.date).format("D MMMM, HH:mm")}
        </span>
      </div>
      <div className="right_cont">
        {React.createElement(AllCommonIcons[icons[item.status]], {
          width: "20",
          height: "20",
          color: colors[item.status],
        })}
      </div>
    </div>
  ));

  const onAcceptClick = () => {
    if (isMobile) {
      router.push(`/mobile/user/orders/detail/rate_order/${router.query.id}`);
      return;
    }
    NiceModal.show(ReviewModal, {} as ReviewModalProps);
  };
  const onRejectClick = () => {
    if (isMobile) {
      router.push(`/mobile/user/orders/detail/refuse/${router.query.id}`);
      return;
    }
    NiceModal.show(InputModal, {
      icon: "JugBigIcon",
      title: t("reject_to_accept_title"),
      placeholder: t("reject_to_accept_description"),
      send_path: "show_accept_modal",
      cancel: true,
      selector_data: rejectSelectorData,
    } as InputModalProps);
  };

  return (
    <div className="buyer_cont">
      {status !== "delivered" ? (
        <div className="steps_cont">{mapSteps}</div>
      ) : (
        <>
          <div className="delivered">
            <div className="steps_cont steps_no_margin">{mapSteps}</div>
            <Button
              text={t("accept_product")}
              onClick={onAcceptClick}
              options={{
                $width: "100%",
                $textColor: "static_white",
                $backgroundColor: "static_red",
              }}
            />
          </div>
          <Button
            text={t("not_satisfied_with_product")}
            icon="UndoIcon"
            onClick={onRejectClick}
            options={{
              $width: "100%",
              $textAlign: "start",
              $textColor: "text_primary",
              $backgroundColor: "card_color",
              $borderColor: "border_color",
              $hoverTextColor: "static_white",
              $hoverIconColor: "static_white",
              $hoverBackgroundColor: "static_red",
              $hoverBorderColor: "static_red",
            }}
          />
        </>
      )}
    </div>
  );
};

interface PickupProps {
  order: OrderModel;
  isMobile: boolean;
}
const PickupThread = ({ order, isMobile }: PickupProps) => {
  const { status, description } = order;
  const { t } = useTranslation();
  const router = useRouter();

  const onTookClick = () => {
    if (isMobile) {
      router.push(
        `/mobile/user/orders/detail/confirm/${router.query.id}?phone=+99890_919_13_04`
      );
      return;
    }
    NiceModal.show(SmsModal, {
      phone: "99890 919 13 04",
      after_comfirm_path: "/user/orders",
    } as SmsModalProps);
  };
  const onRejectClick = () => {
    if (isMobile) {
      router.push(`/mobile/user/orders/detail/refuse/${router.query.id}`);
      return;
    }
    NiceModal.show(InputModal, {
      icon: "JugBigIcon",
      title: t("reject_to_accept_title"),
      placeholder: t("reject_to_accept_description"),
      send_path: "show_accept_modal",
      cancel: true,
      selector_data: rejectSelectorData,
    } as InputModalProps);
  };

  return (
    <div className="pickup">
      <div className="pickup_card">
        <div className="title_cont">
          <span className="title">{status.description}</span>
          <div className="time_cont">{status.time}</div>
        </div>
        <span className="description">{description}</span>
        <Button
          text={t("i_took_product")}
          onClick={onTookClick}
          options={{
            $width: "100%",
            $textColor: "static_white",
            $backgroundColor: "static_red",
          }}
        />
      </div>
      <Button
        text={t("not_satisfied_with_product")}
        icon="UndoIcon"
        onClick={onRejectClick}
        options={{
          $width: "100%",
          $textAlign: "start",
          $textColor: "text_primary",
          $backgroundColor: "card_color",
          $borderColor: "border_color",
          $hoverTextColor: "static_white",
          $hoverIconColor: "static_white",
          $hoverBackgroundColor: "static_red",
          $hoverBorderColor: "static_red",
        }}
      />
    </div>
  );
};

export default OrderDetails;
