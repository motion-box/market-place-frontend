import SearchResultStyle from "./style";
import { AnimatePresence } from "framer-motion";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";
import { useState } from "react";
import { useTranslation } from "next-i18next";

interface Iprops {}

const recentlySearchData = [
  { id: 0, text: "Лада веста", link: "" },
  { id: 1, text: "Apple AirPods с беспроводной зарядкой", link: "" },
  { id: 2, text: "iPhone XR", link: "" },
];

const SearchResult = (props: Iprops) => {
  const { t } = useTranslation();
  const [data, setData] = useState(recentlySearchData);

  const mapResults = data.map((item, index) => (
    <ResultItem key={item.id} {...item} isLast={index === data.length - 1} />
  ));
  return (
    <SearchResultStyle
      variants={FADE_BOTTOM_ANIMATION}
      initial="hidden"
      animate="active"
      exit="hidden"
      className="dialog_shadow"
    >
      <span className="result_title">{t("recently_searched")}</span>
      <div className="results_cont">{mapResults}</div>
    </SearchResultStyle>
  );
};

interface ResultItemModel {
  id: number;
  text: string;
  link: string;
  isLast: boolean;
}
const ResultItem = ({ id, text, link, isLast }: ResultItemModel) => {
  return (
    <button
      className="result_item"
      style={{
        borderBottom: isLast ? "none" : "1px solid var(--border_color)",
      }}
    >
      {text}
    </button>
  );
};

export default SearchResult;
