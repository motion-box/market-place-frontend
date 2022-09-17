import { useViewportScroll } from "framer-motion";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BuyButton from "../../../components/global/buy_button";
import MHeaderProduct from "../../../components/mobile/header_product_mobile";
import ProductDataMobile from "../../../components/mobile/product_data_mobile";
import ProductImageCarouselMobile from "../../../components/mobile/product_image_carousel_mobile";
import { ProductModel } from "../../../models/ProductModel";
import { useAppSelector } from "../../../redux/store";
import colorsPalet from "../../../resources/constants/colors";
import { productData } from "../../../resources/testProducts";
import MAnnouncementPageStyle from "./style";

interface PageProps {}

const MAnnouncementPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { theme } = useAppSelector((state) => state.globalSliceReducer);
  const [data, setData] = useState<ProductModel | undefined>();
  const { scrollY } = useViewportScroll();
  const [isHeaderActive, setHeaderAcitve] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body");
    if (body) {
      body[0].style.backgroundColor = colorsPalet[theme].card_color;
    }
    return () => {
      body[0].style.backgroundColor = colorsPalet[theme].bg_color;
    };
  }, []);

  useEffect(() => {
    let fitered = productData.find(
      (item) => item.id == Number(router.query.id)
    );
    setData(fitered);

    scrollY.onChange((latest) => {
      if (latest >= 272 && !isHeaderActive) {
        setHeaderAcitve(true);
      } else if (latest < 272 && isHeaderActive) {
        setHeaderAcitve(false);
      } else {
        return;
      }
    });

    return () => scrollY.clearListeners();
  }, [router.query, isHeaderActive]);

  if (!data) return <div>Error ocured, sorry!</div>;

  return (
    <MAnnouncementPageStyle>
      <Head>
        <title>{`${t("logo")} | ${data.title}`}</title>
      </Head>
      <MHeaderProduct product={data} active={isHeaderActive} />
      <div className="container">
        <ProductImageCarouselMobile data={data} />
        <ProductDataMobile data={data} />
      </div>
      <div className="buy_button_cont">
        <BuyButton
          product_id={data.id}
          price={data.price}
          currency={data.currency}
          has_guarantee={data.has_guarantee}
        />
      </div>
    </MAnnouncementPageStyle>
  );
};

export default MAnnouncementPage;
