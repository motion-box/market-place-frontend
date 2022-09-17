import React from "react";
import MSearchCategoryPageStyle from "./style";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import MSearchBtn from "../../../components/mobile/search_btn";
import { useAppSelector } from "../../../redux/store";
import { categoriesData } from "../../../resources/testCategories";
import { useRouter } from "next/router";

interface PageProps {}

const MSearchCategoryPage = (props: PageProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);

  const mapItems = categoriesData.map((item) => (
    <Link href={`/mobile/categories/${item.key}`} key={item.id}>
      <a className="item">
        <div className="image_cont">
          <Image src={item.image_url} layout="fill" objectFit="contain" />
        </div>
        <div className="name">{item[`name_${locale}`]}</div>
      </a>
    </Link>
  ));

  return (
    <MSearchCategoryPageStyle>
      <MSearchBtn
        placeholder={t("search_announcements")}
        onClick={() => router.push("/mobile/search")}
      />
      <div className="categories_cont">{mapItems}</div>
    </MSearchCategoryPageStyle>
  );
};

export default MSearchCategoryPage;
