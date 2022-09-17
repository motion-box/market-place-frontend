import React from "react";
import HomePageStyle from "./style";
import { useTranslation } from "next-i18next";
import NiceModal from "@ebay/nice-modal-react";
import MainCategorySelector from "../../../components/desktop/main_category_selector";
import ProductsGridDesktop from "../../../components/desktop/products_grid_desktop";
import NewsCards from "../../../components/global/news_cards";
import Stories from "../../../components/global/stories";
import { productData } from "../../../resources/testProducts";
import StoriesModal, {
  StoriesModalProps,
} from "../../../components/desktop/modals/stories_modal";

interface PageProps {}

const HomePage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();

  const onStoriesPress = (data: StoriesModalProps) => {
    NiceModal.show(StoriesModal, { ...data } as StoriesModalProps);
  };

  return (
    <HomePageStyle className="page_wrapper">
      <div className="first_row">
        <Stories onStoriesPress={onStoriesPress} />
        <NewsCards onStoriesPress={onStoriesPress} />
      </div>
      <MainCategorySelector />
      <ProductsGridDesktop title={t("offers_for_you")} data={productData} />
    </HomePageStyle>
  );
};

export default HomePage;
