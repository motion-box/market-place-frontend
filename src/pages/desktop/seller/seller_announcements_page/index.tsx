import React from "react";
import SellerAnnouncementsPageStyle from "./style";
import { useTranslation } from "next-i18next";
import SellerPageCont from "../../../../components/desktop/seller_page_cont";
import { sellerData } from "../../../../resources/testSellers";
import ProductsGridDesktop from "../../../../components/desktop/products_grid_desktop";
import { productData } from "../../../../resources/testProducts";
import { useAppSelector } from "../../../../redux/store";
import { useRouter } from "next/router";

interface PageProps {}

const tagsData = [
  {
    id: 0,
    key: "odejda",
    name_ru: "Одежда",
    name_uz: "Кийимлар",
    name_oz: "Kiyimlar",
  },
  {
    id: 1,
    name_ru: "Мебель",
    name_uz: "Мебел",
    name_oz: "Mebel",
  },
  {
    id: 2,
    name_ru: "Детские коляски",
    name_uz: "Болар аравачалари",
    name_oz: "Bolalar aravachalari",
  },
  {
    id: 3,
    name_ru: "Квартиры",
    name_uz: "Квартиралар",
    name_oz: "Kvartiralar",
  },
];

const SellerAnnouncementsPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);

  if (!router.query.seller_id) return <div className="page_wrapper">Error</div>;

  return (
    <SellerAnnouncementsPageStyle>
      <SellerPageCont
        seller={sellerData[Number(router.query.seller_id)]}
        is_favorite={false}
        last_visit="Онлайн: 5 часов назад"
        active_page={0}
        has_data={true}
        placeholder={{
          id: 0,
          title: t("seller_has_no_announcements_title"),
          description: t("seller_has_no_announcements_description"),
          icon: "MegaphoneBigIcon",
        }}
      >
        <div className="products_cont">
          <div className="tags_cont">
            {tagsData.map((item) => (
              <div key={item.id} className="tag_item">
                {item[`name_${locale}`]}
              </div>
            ))}
          </div>
          <ProductsGridDesktop data={productData} />
        </div>
      </SellerPageCont>
    </SellerAnnouncementsPageStyle>
  );
};

export default SellerAnnouncementsPage;
