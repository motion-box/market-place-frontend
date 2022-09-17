import React, { useMemo, useState } from "react";
import CreatOrderPageStyle from "./style";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import OrderProvider from "../../../components/desktop/order_provider";
import Select from "../../../components/desktop/select";
import Button from "../../../components/global/button";
import Input from "../../../components/global/input";
import TextArea from "../../../components/global/text_area";
import { ProductModel } from "../../../models/ProductModel";
import { productData } from "../../../resources/testProducts";

interface PageProps {}

const addressData = [
  {
    id: 0,
    name_ru: "Ул. Асака, дом 15",
    name_uz: "Асака кучаси, 15 уй",
    name_oz: "Asaka kuchasi, 15 uy",
  },
  {
    id: 1,
    name_ru: "Ул. Ивлиева, дом 17",
    name_uz: "Ивлиева кучаси, 17 уй",
    name_oz: "Ivlieva kuchasi, 17 uy",
  },
  {
    id: 2,
    name_ru: "Ул. Бадамзар, тупик 1, дом 2",
    name_uz: "Бодомзор кучаси, 1 тупик, 2 уй",
    name_oz: "Asaka kuchasi, 1 tupik, 2 uy",
  },
];

const CreatOrderPage = (props: PageProps) => {
  const {} = props;
  const router = useRouter();
  const { t } = useTranslation();
  const [address, setAddress] = useState<number | null>(null);
  const [homeNum, setHomeNum] = useState("");
  const [entrance, setEntrance] = useState("");
  const [floor, setFloor] = useState("");
  const [apartment, setApartment] = useState("");
  const [landmark, setLandmark] = useState("");
  const [comment, setComment] = useState("");

  const product = useMemo<ProductModel | undefined>(() => {
    const data = productData.find(
      (item) => item.id === Number(router.query.id)
    );
    return data;
  }, []);

  const goToConfirm = () => {
    if (product) router.push(`/create_order/confirm/${product.id}`);
  };

  if (!product)
    return <div className="page_wrapper">Error while finding product</div>;

  return (
    <OrderProvider product={product}>
      <CreatOrderPageStyle>
        <span className="inputs_title">{t("prompt_for_courier")}</span>
        <div className="inputs_cont">
          <Select
            placeholder={t("delivery_address")}
            selected={address}
            setSelected={setAddress}
            data={addressData}
          />
          <div className="inputs_line">
            <Input
              text={homeNum}
              setText={setHomeNum}
              placeholder={t("house_number")}
            />
            <Input
              text={entrance}
              setText={setEntrance}
              placeholder={t("house_entrance")}
            />
          </div>
          <div className="inputs_line">
            <Input text={floor} setText={setFloor} placeholder={t("floor")} />
            <Input
              text={apartment}
              setText={setApartment}
              placeholder={t("apartment")}
            />
          </div>
          <Input
            text={landmark}
            setText={setLandmark}
            placeholder={t("landmark")}
          />
          <TextArea
            text={comment}
            setText={setComment}
            placeholder={t("comment_for_courier")}
          />
          <Button
            text={t("continue")}
            onClick={goToConfirm}
            options={{
              $textColor: "static_white",
              $backgroundColor: "static_red",
            }}
          />
        </div>
      </CreatOrderPageStyle>
    </OrderProvider>
  );
};

export default CreatOrderPage;
