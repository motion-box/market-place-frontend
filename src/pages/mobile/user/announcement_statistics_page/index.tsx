import React, { useEffect, useState } from "react";
import MAnnouncementStatisticsPageStyle from "./style";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import ProductSmallCard from "../../../../components/desktop/product_small_card";
import UserPageCont from "../../../../components/desktop/user_page_cont/indext";
import Chart from "../../../../components/global/chart";
import useChangeTheme from "../../../../hooks/useChangeTheme";
import { productData } from "../../../../resources/testProducts";
import { ProductModel } from "../../../../models/ProductModel";
import { FADE_BOTTOM_ANIMATION } from "../../../../resources/constants/animations";
import Slider from "../../../../components/global/slider";

interface PageProps {}

const sliderData = [
  {
    id: 0,
    key: "day",
    name_ru: "День",
    name_uz: "Кун",
    name_oz: "Kun",
  },
  {
    id: 1,
    key: "week",
    name_ru: "Неделя",
    name_uz: "Хафта",
    name_oz: "Hafta",
  },
  {
    id: 2,
    key: "month",
    name_ru: "Месяц",
    name_uz: "Ой",
    name_oz: "Oy",
  },
];

const MAnnouncementStatisticsPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const changeTheme = useChangeTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState<ProductModel | undefined>();

  useEffect(() => {
    let fitered = productData.find(
      (item) => item.id == Number(router.query.id)
    );
    setData(fitered);
  }, [router.query]);

  return (
    <MAnnouncementStatisticsPageStyle>
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
            className="page_cont"
            variants={FADE_BOTTOM_ANIMATION}
            initial="hidden"
            animate="active"
            exit="hidden"
            key={sliderData[0].key}
          >
            <Chart
              labels={[
                "0:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
              ]}
              dataBarOne={[
                0, 2300, 1231, 2310, 4201, 3897, 2457, 0, 2300, 1231, 2310,
                4201, 3897, 2457, 0, 2457, 0, 2300, 1231, 2310, 4201, 3897,
                2457, 0,
              ]}
              dataBarTwo={[
                3490, 4509, 3241, 5346, 6732, 5721, 4821, 3490, 4509, 3241,
                5346, 6732, 5721, 4821, 3490, 4821, 3490, 4509, 3241, 5346,
                6732, 5721, 4821, 3490,
              ]}
            />
          </motion.div>
        )}
        {activeIndex === 1 && (
          <motion.div
            className="page_cont"
            variants={FADE_BOTTOM_ANIMATION}
            initial="hidden"
            animate="active"
            exit="hidden"
            key={sliderData[1].key}
          >
            <Chart
              labels={["25", "26", "27", "28", "29", "30", "31"]}
              dataBarOne={[0, 2300, 1231, 2310, 4201, 3897, 2457]}
              dataBarTwo={[3490, 4509, 3241, 5346, 6732, 5721, 4821]}
            />
          </motion.div>
        )}
        {activeIndex === 2 && (
          <motion.div
            className="page_cont"
            variants={FADE_BOTTOM_ANIMATION}
            initial="hidden"
            animate="active"
            exit="hidden"
            key={sliderData[2].key}
          >
            <Chart
              labels={[
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
              ]}
              dataBarOne={[
                0, 2300, 1231, 2310, 4201, 3897, 2457, 0, 2300, 1231, 2310,
                4201, 3897, 2457, 4201, 3897, 2457, 4201, 3897, 2457, 0, 2300,
                1231, 2310, 4201, 3897, 2457, 4201, 3897, 2457,
              ]}
              dataBarTwo={[
                3490, 4509, 3241, 5346, 6732, 5721, 4821, 3490, 4509, 3241,
                5346, 6732, 5721, 4821, 5346, 6732, 5721, 4821, 6732, 5721,
                4821, 3490, 4509, 3241, 5346, 6732, 5721, 4821, 5346, 6732,
                5721, 4821,
              ]}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* <UserPageCont
        title={t("statistic")}
        has_data={true}
        slider={sliderData}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <div className="page_cont">
          <ProductSmallCard data={data} />
          <AnimatePresence exitBeforeEnter>
            {activeIndex === 0 && (
              <motion.div
                variants={FADE_BOTTOM_ANIMATION}
                initial="hidden"
                animate="active"
                exit="hidden"
                key={sliderData[0].key}
              >
                <Chart
                  labels={[
                    "0:00",
                    "1:00",
                    "2:00",
                    "3:00",
                    "4:00",
                    "5:00",
                    "7:00",
                    "8:00",
                    "9:00",
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00",
                    "19:00",
                    "20:00",
                    "21:00",
                    "22:00",
                    "23:00",
                  ]}
                  dataBarOne={[
                    0, 2300, 1231, 2310, 4201, 3897, 2457, 0, 2300, 1231, 2310,
                    4201, 3897, 2457, 0, 2457, 0, 2300, 1231, 2310, 4201, 3897,
                    2457, 0,
                  ]}
                  dataBarTwo={[
                    3490, 4509, 3241, 5346, 6732, 5721, 4821, 3490, 4509, 3241,
                    5346, 6732, 5721, 4821, 3490, 4821, 3490, 4509, 3241, 5346,
                    6732, 5721, 4821, 3490,
                  ]}
                />
              </motion.div>
            )}
            {activeIndex === 1 && (
              <motion.div
                variants={FADE_BOTTOM_ANIMATION}
                initial="hidden"
                animate="active"
                exit="hidden"
                key={sliderData[1].key}
              >
                <Chart
                  labels={["25", "26", "27", "28", "29", "30", "31"]}
                  dataBarOne={[0, 2300, 1231, 2310, 4201, 3897, 2457]}
                  dataBarTwo={[3490, 4509, 3241, 5346, 6732, 5721, 4821]}
                />
              </motion.div>
            )}
            {activeIndex === 2 && (
              <motion.div
                variants={FADE_BOTTOM_ANIMATION}
                initial="hidden"
                animate="active"
                exit="hidden"
                key={sliderData[2].key}
              >
                <Chart
                  labels={[
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30",
                    "31",
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                  ]}
                  dataBarOne={[
                    0, 2300, 1231, 2310, 4201, 3897, 2457, 0, 2300, 1231, 2310,
                    4201, 3897, 2457, 4201, 3897, 2457, 4201, 3897, 2457, 0,
                    2300, 1231, 2310, 4201, 3897, 2457, 4201, 3897, 2457,
                  ]}
                  dataBarTwo={[
                    3490, 4509, 3241, 5346, 6732, 5721, 4821, 3490, 4509, 3241,
                    5346, 6732, 5721, 4821, 5346, 6732, 5721, 4821, 6732, 5721,
                    4821, 3490, 4509, 3241, 5346, 6732, 5721, 4821, 5346, 6732,
                    5721, 4821,
                  ]}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <button onClick={changeTheme}>Change theme</button>
        </div>
      </UserPageCont> */}
    </MAnnouncementStatisticsPageStyle>
  );
};

export default MAnnouncementStatisticsPage;
