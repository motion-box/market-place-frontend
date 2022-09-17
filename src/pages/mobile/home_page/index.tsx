import React from "react";
import MHomePageStyle from "./style";
import { useTranslation } from "next-i18next";
import { StoriesModalProps } from "../../../components/desktop/modals/stories_modal";
import NewsCards from "../../../components/global/news_cards";
import Stories from "../../../components/global/stories";
import ProductGridMobile from "../../../components/mobile/product_grid_mobile";
import MSearchBtn from "../../../components/mobile/search_btn";
import { productData } from "../../../resources/testProducts";
import NiceModal from "@ebay/nice-modal-react";
import MStoriesModal, {
  MobileStoriesModalProps,
} from "../../../components/mobile/modals/m_stories_modal";
import { useRouter } from "next/router";

interface PageProps {}

const MHomePage = (props: PageProps) => {
  const {} = props;
  const router = useRouter();
  const { t } = useTranslation();

  const onNewsClick = (data: StoriesModalProps) => {
    NiceModal.show(MStoriesModal, {
      ...data,
    } as MobileStoriesModalProps);
  };

  return (
    <MHomePageStyle>
      <div className="top_parent_container">
        <div className="stories_area">
          <Stories
            onStoriesPress={() => console.log("show stories")}
            hideControls={true}
          />
        </div>
        <div className="search_area">
          <MSearchBtn
            placeholder={t("search_announcements")}
            onClick={() => router.push("/mobile/search")}
          />
        </div>
        <div className="news_area">
          <NewsCards onStoriesPress={onNewsClick} />
        </div>
      </div>
      <div className="padding_wrapper">
        <ProductGridMobile title={t("offers_for_you")} data={productData} />
      </div>
    </MHomePageStyle>
  );
};

export default MHomePage;
