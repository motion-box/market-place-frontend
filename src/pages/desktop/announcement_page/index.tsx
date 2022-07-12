import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductsGridDesktop from "../../../components/desktop/products_grid_desktop";
import ProductDataDesktop from "../../../components/desktop/product_data_desktop";
import ProductImageCarouselDesktop from "../../../components/desktop/product_image_carousel_desktop";
import { productData } from "../../../resources/testProducts";
import { ProductModel } from "../../../models/ProductModel";
import AnnouncementPageStyle from "./style";

interface PageProps {}

const data = {
  id: 35658933,
  seen: 986,
  title: "iPhone 13 Pro, 128Gb, новый в коробке, гарантия 12 месяцев",
  images: [
    "/images/products/product_0.jpeg",
    "/images/products/product_1.jpeg",
    "/images/products/product_2.jpeg",
    "/images/products/product_3.jpeg",
  ],
  amount: 3,
  has_guarantee: true,
  is_sale: true,
  sale_time: "20",
  price: 13890000,
  old_price: 16200000,
  address: "Ташкент, Мирзо-Улугбекский район",
  date: "2022-04-24T15:37",
  is_favorite: false,
  currency: "uzs",
  info: {
    category: "Мобильные телефоны",
    condition: 10,
    manufacturer: "Apple",
    model: "iPhone 13 Pro",
    storage: 128,
    color: "Золотой",
    description:
      "Новый айфон в идеальном состоянии. Коробка не открыта, вся комплектация (хоть и скудная) но в наличии. Торг уместен, но небольшой. Звонить до 21:00, писать можно в любое время",
  },
};

const AnnouncementPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [data, setData] = useState<ProductModel | undefined>();

  useEffect(() => {
    let fitered = productData.find(
      (item) => item.id == Number(router.query.id)
    );
    setData(fitered);
  }, [router.query]);

  return (
    <AnnouncementPageStyle>
      <Head>
        <title>{`${t("logo")} | ${data?.title}`}</title>
      </Head>
      <section className="product_wrapper">
        <div className="page_wrapper">
          {data?.images && (
            <ProductImageCarouselDesktop
              data={{
                images: data.images,
                has_guarantee: data.has_guarantee,
                price: data.price,
                currency: data.currency,
              }}
            />
          )}
          {data && <ProductDataDesktop data={data} />}
        </div>
      </section>
      <div className="recomendations wrapper">
        <ProductsGridDesktop
          title={t("all_announcement_of_seller")}
          more_link="#"
          data={productData.slice(0, 4)}
        />
        <ProductsGridDesktop
          title={t("similar_announcement")}
          data={productData}
        />
      </div>
    </AnnouncementPageStyle>
  );
};
export default AnnouncementPage;
