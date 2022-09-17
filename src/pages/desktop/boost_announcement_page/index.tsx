import React, { useMemo, useState } from "react";
import BoostAnnouncementPageStyle from "./style";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ArrowBackIcon, InfoIcon } from "../../../resources/icons/CommonIcons";
import { productData } from "../../../resources/testProducts";
import * as AllBigIcons from "../../../resources/icons/BigIcons";
import Image from "next/image";
import Input from "../../../components/global/input";
import Select from "../../../components/desktop/select";
import BankCardPicker from "../../../components/global/bank_card_picker";
import { BankCardModel } from "../../../models/BankCardModel";
import Button from "../../../components/global/button";
import NiceModal from "@ebay/nice-modal-react";
import NotifyModal, {
  NotifyModalProps,
} from "../../../components/desktop/modals/notify_modal";
import MessageModal, {
  MessageModalProps,
} from "../../../components/desktop/modals/message_modal";

interface PageProps {
  type: "turbo" | "in_fifteen_minutes";
}

interface PageGeneralDataModel {
  turbo: PageDataModel;
  in_fifteen_minutes: PageDataModel;
}

interface PageDataModel {
  title: string;
  description: string;
  icon: AllBigIcons.BigIconsType;
}

const pageData: PageGeneralDataModel = {
  turbo: {
    title: "turbo_sell",
    description: "turbo_sell_description",
    icon: "RocketBigIcon",
  },
  in_fifteen_minutes: {
    title: "sell_in_fifteen_min",
    description: "sell_in_fifteen_min_description",
    icon: "TimeBigIcon",
  },
};

const periodData = [
  {
    id: 0,
    name_ru: "1 час - 1000 сум",
    name_uz: "1 согат - 1000 сум",
    name_oz: "1 sogat - 1000 sum",
  },
  {
    id: 1,
    name_ru: "2 час - 1500 сум",
    name_uz: "2 согат - 1500 сум",
    name_oz: "2 sogat - 1500 sum",
  },
  {
    id: 2,
    name_ru: "3 час - 3000 сум",
    name_uz: "3 согат - 3000 сум",
    name_oz: "3 sogat - 3000 sum",
  },
  {
    id: 3,
    name_ru: "4 час - 4000 сум",
    name_uz: "4 согат - 4000 сум",
    name_oz: "4 sogat - 4000 sum",
  },
  {
    id: 4,
    name_ru: "5 час - 4500 сум",
    name_uz: "5 согат - 4500 сум",
    name_oz: "5 sogat - 4500 sum",
  },
  {
    id: 5,
    name_ru: "6 час - 5000 сум",
    name_uz: "6 согат - 5000 сум",
    name_oz: "6 sogat - 5000 sum",
  },
  {
    id: 6,
    name_ru: "7 час - 5500 сум",
    name_uz: "7 согат - 5500 сум",
    name_oz: "7 sogat - 5500 sum",
  },
  {
    id: 7,
    name_ru: "8 час - 6000 сум",
    name_uz: "8 согат - 6000 сум",
    name_oz: "8 sogat - 6000 sum",
  },
  {
    id: 8,
    name_ru: "9 час - 6500 сум",
    name_uz: "9 согат - 6500 сум",
    name_oz: "9 sogat - 6500 sum",
  },
  {
    id: 9,
    name_ru: "10 час - 7000 сум",
    name_uz: "10 согат - 7000 сум",
    name_oz: "10 sogat - 7000 sum",
  },
];
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

const BoostAnnouncementPage = (props: PageProps) => {
  const { type } = props;
  const router = useRouter();
  const { t } = useTranslation();
  const [salePrice, setSalePrice] = useState("");
  const [period, setPeriod] = useState<number | null>(null);

  const data = useMemo(() => pageData[type], []);
  const product = useMemo(() => {
    let fitered = productData.find(
      (item) => item.id == Number(router.query.product_id)
    );
    return fitered;
  }, []);

  const onInfoClick = () => {
    NiceModal.show(NotifyModal, {
      icon: "InfoBigIcon",
      title: t("sale_info_title"),
      description: t("sale_info_description"),
    } as NotifyModalProps);
  };

  const onConnectClick = () => {
    NiceModal.show(MessageModal, {
      icon: type === "turbo" ? "RocketBigIcon" : "TimeBigIcon",
      title: t("service_connected"),
      description: t("service_connected_description"),
      button: {
        name: t("back_to_account"),
        route: "/",
      },
    } as MessageModalProps);
  };

  if (!router.query.product_id)
    return <div className="page_wrapper">No product</div>;

  return (
    <BoostAnnouncementPageStyle>
      <div className="page_wrapper">
        <div className="card_cont">
          <button className="close_btn" onClick={() => router.back()}>
            <ArrowBackIcon color="text_primary" />
          </button>
          <div className="card_top_cont">
            <div className="left_side">
              <div className="title_cont">
                <h1>{t(data.title)}</h1>
                <button onClick={onInfoClick}>
                  <InfoIcon color="text_primary" />
                </button>
              </div>
              <p className="description">{t(data.description)}</p>
            </div>
            <div className="right_cont">
              <div className="icon">
                {React.createElement(AllBigIcons[data.icon], {
                  width: "72",
                  height: "72",
                })}
              </div>
              <div className="circles">
                <AllBigIcons.CircleRowBigIcon />
              </div>
            </div>
          </div>
          {product && (
            <div className="product_card">
              <div className="image_cont">
                <Image
                  src={product.image_url}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="text_cont">
                <span className="title">{product.title}</span>
                <div className="price_cont">
                  <span className="price">
                    {`${
                      salePrice
                        ? salePrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                        : product.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                    } ${t(product.currency)}`}
                  </span>
                  {salePrice ? (
                    <span className="old_price">
                      {`${product.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
                        product.currency
                      )}`}
                      <s />
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          )}
          <div className="card">
            <Input
              text={salePrice}
              setText={setSalePrice}
              placeholder={t("price_with_sale")}
            />
            <Select
              placeholder={t("serivce_period")}
              selected={period}
              setSelected={setPeriod}
              data={periodData}
            />
            <BankCardPicker title={t("choose_card_for_pay")} card={cardData} />
            <div />
            <Button
              text={t("connect_serivce")}
              onClick={onConnectClick}
              options={{
                $width: "100%",
                $backgroundColor: "static_red",
                $textColor: "static_white",
              }}
            />
          </div>
        </div>
      </div>
    </BoostAnnouncementPageStyle>
  );
};

export default BoostAnnouncementPage;
