import React, { useMemo, useState } from "react";
import MUserOrdersPageStyle from "./style";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "../../../../components/global/slider";
import { FADE_BOTTOM_ANIMATION } from "../../../../resources/constants/animations";
import {
  activeOrderData,
  notActiveOrderData,
} from "../../../../resources/testOrders";
import { productData } from "../../../../resources/testProducts";
import OrderCard from "../../../../components/global/order_card";

interface PageProps {}

const sliderData = [
  {
    id: 0,
    key: "active",
    name_ru: "Активные",
    name_uz: "Фаол",
    name_oz: "Faol",
  },
  {
    id: 1,
    key: "not_active",
    name_ru: "Не активные",
    name_uz: "Фаол эмас",
    name_oz: "Faol emas",
  },
];

const MUserOrdersPage = (props: PageProps) => {
  const {} = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeData = useMemo(
    () =>
      activeOrderData.map((item) => ({
        ...item,
        product: productData[item.product_id],
      })),
    []
  );

  const notActiveData = useMemo(
    () =>
      notActiveOrderData.map((item) => ({
        ...item,
        product: productData[item.product_id],
      })),
    []
  );

  return (
    <MUserOrdersPageStyle>
      <div className="top_cont">
        <Slider
          data={sliderData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isMobile={true}
        />
      </div>
      <AnimatePresence exitBeforeEnter>
        {activeIndex === 0 && (
          <motion.div
            key={sliderData[0].key}
            className="cards_cont"
            variants={FADE_BOTTOM_ANIMATION}
            initial="hidden"
            animate="active"
            exit="hidden"
          >
            {activeData.map((item) => (
              <OrderCard
                key={item.id}
                {...item}
                active={true}
                isMobile={true}
              />
            ))}
          </motion.div>
        )}
        {activeIndex === 1 && (
          <motion.div
            key={sliderData[1].key}
            className="cards_cont"
            variants={FADE_BOTTOM_ANIMATION}
            initial="hidden"
            animate="active"
            exit="hidden"
          >
            {notActiveData.map((item) => (
              <OrderCard
                key={item.id}
                {...item}
                active={false}
                isMobile={true}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </MUserOrdersPageStyle>
  );
};

export default MUserOrdersPage;
