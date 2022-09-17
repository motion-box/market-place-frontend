import React, { useState } from "react";
import MCreateAnnouncementPageStyle from "./style";
import { useTranslation } from "next-i18next";
import MultipleImageImporter from "../../../components/global/multiple_image_importer";
import LabelInput from "../../../components/global/label_input";
import Button from "../../../components/global/button";
import { useRouter } from "next/router";
import { categoriesData } from "../../../resources/testCategories";
import { useAppSelector } from "../../../redux/store";
import NiceModal from "@ebay/nice-modal-react";
import MSelectorModal, {
  SelectorModalProps,
} from "../../../components/mobile/modals/m_selector_modal";
import GuaranteeToggle from "../../../components/global/guarantee_toggle";
import TextArea from "../../../components/global/text_area";
import { productAmountsPrice } from "../../../resources/testProducts";
import MInfoModal, {
  InfoModalProps,
} from "../../../components/mobile/modals/m_info_modal";
import ConditionPicker from "../../../components/global/condition_picker";
import BankCardPicker from "../../../components/global/bank_card_picker";
import { BankCardModel } from "../../../models/BankCardModel";

interface PageProps {}

const addressData = [
  {
    id: 0,
    name_ru: "Улица Асака, дом 15",
    name_uz: "Асака кучаси, 15 уй",
    name_oz: "Asaka kuchasi, 15 uy",
  },
  {
    id: 1,
    name_ru: "Улица Асака, дом 15",
    name_uz: "Асака кучаси, 15 уй",
    name_oz: "Asaka kuchasi, 15 uy",
  },
  {
    id: 2,
    name_ru: "Улица Асака, дом 15",
    name_uz: "Асака кучаси, 15 уй",
    name_oz: "Asaka kuchasi, 15 uy",
  },
  {
    id: 3,
    name_ru: "Улица Асака, дом 15",
    name_uz: "Асака кучаси, 15 уй",
    name_oz: "Asaka kuchasi, 15 uy",
  },
  {
    id: 4,
    name_ru: "Улица Асака, дом 15",
    name_uz: "Асака кучаси, 15 уй",
    name_oz: "Asaka kuchasi, 15 uy",
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

const CreateAnnouncementPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [name, setName] = useState("");
  const [hasGuarantee, setHasGuarantee] = useState(false);
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState<number | false | null>(null);
  const [price, setPrice] = useState("");

  //TODO: Recreate this function
  const selectorClick = (type: string) => {
    if (type == "category") {
      NiceModal.show(MSelectorModal, {
        modalTitle: t("product_category"),
        data: categoriesData,
        query: "categoryId",
        additional: "/create_announcement?",
      } as SelectorModalProps);
    } else if (type == "subcategory") {
      NiceModal.show(MSelectorModal, {
        modalTitle: t("product_category"),
        data: categoriesData[Number(router.query.categoryId)].subcategories,
        query: "subcategoryId",
        additional: `/create_announcement?categoryId=${router.query.categoryId}&`,
      } as SelectorModalProps);
    } else if (type == "amount") {
      NiceModal.show(MSelectorModal, {
        modalTitle: t("choose_number"),
        data: productAmountsPrice,
        query: "amount",
        additional: `/create_announcement?categoryId=${router.query.categoryId}&subcategory=${router.query.subcategoryId}&`,
      } as SelectorModalProps);
    } else if (type === "address") {
      NiceModal.show(MSelectorModal, {
        modalTitle: t("choose_number"),
        data: addressData,
        query: "addressId",
        additional: `/create_announcement?categoryId=${router.query.categoryId}&subcategory=${router.query.subcategoryId}&amount=${router.query.amount}&`,
      } as SelectorModalProps);
    }
  };

  const whatIsThis = (type: string) => {
    if (type === "amount") {
      NiceModal.show(MInfoModal, {
        icon: "LoadingBigIcon",
        title: t("amount_faq_title"),
        description: t("amount_faq_description"),
      } as InfoModalProps);
    } else if (type === "condition") {
      NiceModal.show(MInfoModal, {
        icon: "LvlBigIcon",
        title: t("condition_faq_title"),
        description: t("condition_faq_description"),
      } as InfoModalProps);
    }
  };

  return (
    <MCreateAnnouncementPageStyle>
      <MultipleImageImporter title={t("first_photo_will_be_as_main")} />
      <div className="inputs_container">
        <LabelInput
          label={t("product_name")}
          text={name}
          setText={setName}
          placeholder={t("product_name_placeholder")}
        />
        <div className="selector_cont">
          <div className="top_cont">
            <label>{t("product_category")}</label>
          </div>
          <Button
            text={
              router.query.categoryId
                ? categoriesData[Number(router.query.categoryId)][
                    `name_${locale}`
                  ]
                : t("product_category_placeholder")
            }
            onClick={() => selectorClick("category")}
            icon="ChevronBigLeftIcon"
            options={{
              $width: "100%",
              $backgroundColor: "card_color",
              $textColor: router.query.categoryId
                ? "text_primary"
                : "text_secondary",
              $textAlign: "start",
              $iconColor: "icon_color",
              $borderColor: "border_color",
              $hoverBorderColor: "border_color",
            }}
          />
        </div>
        {router.query.categoryId && (
          <div className="selector_cont">
            <div className="top_cont">
              <label>{t("product_category")}</label>
            </div>
            <Button
              text={
                router.query.subcategoryId
                  ? categoriesData[Number(router.query.categoryId)]
                      .subcategories[Number(router.query.subcategoryId)][
                      `name_${locale}`
                    ]
                  : t("product_category_placeholder")
              }
              onClick={() => selectorClick("subcategory")}
              icon="ChevronBigLeftIcon"
              options={{
                $width: "100%",
                $backgroundColor: "card_color",
                $textColor: router.query.subcategoryId
                  ? "text_primary"
                  : "text_secondary",
                $textAlign: "start",
                $iconColor: "icon_color",
                $borderColor: "border_color",
                $hoverBorderColor: "border_color",
              }}
            />
          </div>
        )}
        <GuaranteeToggle
          hasGurantee={hasGuarantee}
          setHasGuarantee={setHasGuarantee}
        />
        <TextArea
          label={t("product_description")}
          text={description}
          setText={setDescription}
          placeholder={t("product_description_description")}
        />
        <div className="selector_cont">
          <div className="top_cont">
            <label>{t("number_of_product_in_stock")}</label>
            <button
              className="what_is_this"
              onClick={() => whatIsThis("amount")}
            >
              {t("what_is_this")}
            </button>
          </div>
          <Button
            text={
              router.query.amount
                ? productAmountsPrice[Number(router.query.amount)][
                    `name_${locale}`
                  ]
                : t("choose_number")
            }
            onClick={() => selectorClick("amount")}
            icon="ChevronBigLeftIcon"
            options={{
              $width: "100%",
              $backgroundColor: "card_color",
              $textColor: router.query.amount
                ? "text_primary"
                : "text_secondary",
              $textAlign: "start",
              $iconColor: "icon_color",
              $borderColor: "border_color",
              $hoverBorderColor: "border_color",
            }}
          />
        </div>
        <ConditionPicker
          condition={condition}
          setCondition={setCondition}
          optionOnClick={() => whatIsThis("condition")}
        />
        <LabelInput
          text={price}
          setText={setPrice}
          label={t("product_price")}
          placeholder={t("paste_product_price")}
        />
        <div className="selector_cont">
          <div className="top_cont">
            <label>{t("product_category")}</label>
          </div>
          <Button
            text={
              router.query.addressId
                ? addressData[Number(router.query.addressId)][`name_${locale}`]
                : t("product_category_placeholder")
            }
            onClick={() => selectorClick("address")}
            icon="ChevronBigLeftIcon"
            options={{
              $width: "100%",
              $backgroundColor: "card_color",
              $textColor: router.query.addressId
                ? "text_primary"
                : "text_secondary",
              $textAlign: "start",
              $iconColor: "icon_color",
              $borderColor: "border_color",
              $hoverBorderColor: "border_color",
            }}
          />
        </div>
        <BankCardPicker
          title={t("publish")}
          description={t("card_for_crediting_description")}
          card={cardData}
        />
        <Button
          text={t("publish")}
          onClick={() => router.push("/mobile/create_announcement/finish")}
          options={{
            $width: "100%",
            $backgroundColor: "static_red",
            $textColor: "static_white",
          }}
        />
      </div>
    </MCreateAnnouncementPageStyle>
  );
};

export default CreateAnnouncementPage;
