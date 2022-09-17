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
                product_id: data.id,
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
