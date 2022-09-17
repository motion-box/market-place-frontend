import React, { useEffect, useState } from "react";
import MUserFavoritesPageStyle from "./style";
import { useTranslation } from "next-i18next";
import MessageItem from "../../../../components/global/message_item";
import PagePlaceholder from "../../../../components/mobile/page_placeholder";
import { messageData } from "../../../../resources/testMessages";
import { productData } from "../../../../resources/testProducts";
import { sellerData } from "../../../../resources/testSellers";
import Slider from "../../../../components/global/slider";
import { motion, AnimatePresence } from "framer-motion";
import { FADE_BOTTOM_ANIMATION } from "../../../../resources/constants/animations";
import ProductGridMobile from "../../../../components/mobile/product_grid_mobile";
import SellerCard from "../../../../components/global/seller_card";

interface PageProps {}

const sliderData = [
  {
    id: 0,
    key: "recent",
    name_ru: "Недавние",
    name_uz: "Якин орада",
    name_oz: "Yaqin orada",
  },
  {
    id: 1,
    key: "in_archive",
    name_ru: "В архиве",
    name_uz: "Архивланган",
    name_oz: "Arxivlangan",
  },
];

const has_data = true;

const MUserFavoritesPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <MUserFavoritesPageStyle>
      {has_data ? (
        <div className="page_cont">
          <Slider
            data={sliderData}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            isMobile={true}
          />
          <AnimatePresence exitBeforeEnter>
            {activeIndex === 0 && (
              <motion.div
                className="messages_cont"
                key="page_0"
                variants={FADE_BOTTOM_ANIMATION}
                initial="hidden"
                animate="active"
                exit="hidden"
              >
                <ProductGridMobile data={productData} />
              </motion.div>
            )}
            {activeIndex === 1 && (
              <motion.div
                key="page_1"
                className="messages_cont"
                variants={FADE_BOTTOM_ANIMATION}
                initial="hidden"
                animate="active"
                exit="hidden"
              >
                {sellerData.map((item) => (
                  <SellerCard
                    key={item.id}
                    data={item}
                    online="5 часов назад"
                    type="favorite"
                    onCardClick={() => console.log("go to seller page")}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <PagePlaceholder
          icon="LikeBigIcon"
          title={t("no_favorites")}
          description={t("no_favorites_description")}
        />
      )}
    </MUserFavoritesPageStyle>
  );
};

export default MUserFavoritesPage;
