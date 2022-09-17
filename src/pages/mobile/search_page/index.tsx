import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
import SearchInput from "../../../components/global/search_input";
import MSearchPageStyle from "./style";

interface PageProps {}

const recentlySearchData = [
  { id: 0, text: "Лада веста", link: "" },
  { id: 1, text: "Apple AirPods с беспроводной зарядкой", link: "" },
  { id: 2, text: "iPhone XR", link: "" },
];

const MSearchPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();

  const mapResults = recentlySearchData.map((item) => (
    <button key={item.id} className="item">
      {item.text}
    </button>
  ));

  return (
    <MSearchPageStyle>
      <div className="top_cont">
        <SearchInput
          placeholder={t("search_announcements")}
          autoFocus={true}
          styles={{
            backgroundColor: "card_color",
            placeholderColor: "text_secondary",
          }}
        />
        <button className="cancel" onClick={() => router.back()}>
          {t("cancel")}
        </button>
      </div>
      <h1>{t("recently_searched")}</h1>
      <div className="results_cont">{mapResults}</div>
    </MSearchPageStyle>
  );
};

export default MSearchPage;
