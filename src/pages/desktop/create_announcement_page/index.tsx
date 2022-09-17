import React, { useEffect, useState } from "react";
import CreateAnnouncementPageStyle from "./style";
import { useTranslation } from "next-i18next";
import MultipleImageImporter from "../../../components/global/multiple_image_importer";
import LabelInput from "../../../components/global/label_input";
import LabelSelect from "../../../components/desktop/label_select";
import { categoriesData } from "../../../resources/testCategories";
import GuaranteeToggle from "../../../components/global/guarantee_toggle";
import TextArea from "../../../components/global/text_area";
import { productAmountsPrice } from "../../../resources/testProducts";
import ConditionPicker from "../../../components/global/condition_picker";
import BankCardPicker from "../../../components/global/bank_card_picker";
import { BankCardModel } from "../../../models/BankCardModel";
import Button from "../../../components/global/button";
import NiceModal from "@ebay/nice-modal-react";
import NotifyModal, {
  NotifyModalProps,
} from "../../../components/desktop/modals/notify_modal";

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

const CreateAnnouncementPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const [prodName, setProdName] = useState("");
  const [category, setCategory] = useState<number | null>(null);
  const [subcategory, setSubcategory] = useState<number | null>(null);
  const [hasGuarantee, setHasGuarantee] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | null>(null);
  const [condition, setCondition] = useState<number | false | null>(null);
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState<number | null>(null);

  useEffect(() => {
    setSubcategory(null);
  }, [category]);

  const onWhatIsItClick = (state: "amount" | "condition") => {
    if (state == "amount") {
      NiceModal.show(NotifyModal, {
        icon: "LoadingBigIcon",
        title: t("amount_faq_title"),
        description: t("amount_faq_description"),
      } as NotifyModalProps);
    } else {
      NiceModal.show(NotifyModal, {
        icon: "LvlBigIcon",
        title: t("condition_faq_title"),
        description: t("condition_faq_description"),
      } as NotifyModalProps);
    }
  };

  return (
    <CreateAnnouncementPageStyle>
      <div className="page_wrapper">
        <h1>{t("new_announcement")}</h1>
        <div className="card_cont">
          <div className="card">
            <MultipleImageImporter title={t("first_photo_will_be_as_main")} />
            <LabelInput
              label={t("product_name")}
              text={prodName}
              setText={setProdName}
              placeholder={t("product_name_placeholder")}
            />
            <LabelSelect
              label={t("product_category")}
              placeholder={t("product_category_placeholder")}
              selected={category}
              setSelected={setCategory}
              data={categoriesData}
            />
            {category !== null && (
              <LabelSelect
                label={t("product_category")}
                placeholder={t("product_category_placeholder")}
                selected={subcategory}
                setSelected={setSubcategory}
                data={categoriesData[category].subcategories}
              />
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
            <LabelSelect
              label={t("number_of_product_in_stock")}
              placeholder={t("choose_number")}
              selected={amount}
              setSelected={setAmount}
              data={productAmountsPrice}
              optionText={t("what_is_this")}
              optionOnClick={() => onWhatIsItClick("amount")}
            />
            <ConditionPicker
              condition={condition}
              setCondition={setCondition}
              optionOnClick={() => onWhatIsItClick("condition")}
            />
            <LabelInput
              label={t("product_price")}
              placeholder={t("paste_product_price")}
              text={price}
              setText={setPrice}
            />
            <LabelSelect
              label={t("courier_pickup_address")}
              placeholder={t("address_not_shown")}
              selected={address}
              setSelected={setAddress}
              data={addressData}
            />
            <BankCardPicker
              title={t("card_for_crediting")}
              description={t("card_for_crediting_description")}
              card={cardData}
            />
            <Button
              text={t("publish")}
              onClick={() => console.log("go to next page")}
              options={{
                $width: "100%",
                $backgroundColor: "static_red",
                $textColor: "static_white",
              }}
            />
          </div>
        </div>
      </div>
    </CreateAnnouncementPageStyle>
  );
};

export default CreateAnnouncementPage;
