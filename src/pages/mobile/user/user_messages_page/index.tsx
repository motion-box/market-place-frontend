import React, { useState } from "react";
import MUserMessagesPageStyle from "./style";
import { useTranslation } from "next-i18next";
import PagePlaceholder from "../../../../components/mobile/page_placeholder";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "../../../../components/global/slider";
import { FADE_BOTTOM_ANIMATION } from "../../../../resources/constants/animations";
import { messageData } from "../../../../resources/testMessages";
import MessageItem from "../../../../components/global/message_item";
import { productData } from "../../../../resources/testProducts";
import { sellerData } from "../../../../resources/testSellers";

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

const MUserMessagesPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <MUserMessagesPageStyle>
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
                {messageData.map((item) => (
                  <MessageItem
                    isMobile={true}
                    key={item.id}
                    data={{
                      ...item,
                      product: productData[item.product],
                      user: sellerData[item.user],
                    }}
                  />
                ))}
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
                {messageData.map((item) => (
                  <MessageItem
                    isMobile={true}
                    key={item.id}
                    data={{
                      ...item,
                      product: productData[item.product],
                      user: sellerData[item.user],
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <PagePlaceholder
          icon="MailBoxBigIcon"
          title={t("no_message")}
          description={t("no_message_description")}
        />
      )}
    </MUserMessagesPageStyle>
  );
};

export default MUserMessagesPage;
