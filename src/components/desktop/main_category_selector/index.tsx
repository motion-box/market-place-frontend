import { RadialGradBigIcon } from "../../../resources/icons/BigIcons";
import SearchInput from "../../global/search_input";
import MainCategorySelectorStyle from "./style";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SearchResult from "../search_result";
import Button from "../../global/button";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { categoriesData } from "../../../resources/testCategories";
import { useAppSelector } from "../../../redux/store";

interface Iprops {}

const MainCategorySelector = (props: Iprops) => {
  const { t } = useTranslation();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const router = useRouter();
  const [isFocus, setFocus] = useState(false);

  const onItemClick = (category: string) => {
    router.push(`/categories/${category}`);
  };

  const mapCateogories = categoriesData.map((item) => (
    <button key={item.id} onClick={() => onItemClick(item.key)}>
      <div className="image_cont">
        <Image
          src={item.image_url}
          layout="fill"
          objectFit="contain"
          alt={item[`name_${locale}`]}
        />
      </div>
      <span className="name">{item[`name_${locale}`]}</span>
    </button>
  ));

  return (
    <MainCategorySelectorStyle>
      <motion.div className="background_cont">
        <motion.div
          className="background_cont"
          initial={{
            scale: 1,
          }}
          animate={{ scale: 2 }}
          transition={{
            ease: "easeIn",
            repeatDelay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
          }}
        >
          <RadialGradBigIcon />
        </motion.div>
      </motion.div>
      <div className="content_cont">
        <h1 className="title">{t("marketplace_tashkent")}</h1>
        <div className="content">
          <SearchInput
            placeholder={t("search_announcements")}
            setFocus={setFocus}
            styles={{
              height: 60,
              backgroundColor: "card_color",
              placeholderColor: "icon_color",
            }}
            addition={
              <div style={{ margin: "6px 6px 0px 0px" }}>
                <Button
                  text={t("find")}
                  onClick={() => console.log("find")}
                  options={{
                    $backgroundColor: "static_red",
                    $buttonPaddings: "0 36px",
                    $textColor: "static_white",
                  }}
                />
              </div>
            }
          />
          <AnimatePresence>
            {isFocus ? <SearchResult key="results" /> : null}
          </AnimatePresence>
          <div className="categories">{mapCateogories}</div>
        </div>
      </div>
    </MainCategorySelectorStyle>
  );
};

export default MainCategorySelector;
