import React, { useCallback, useMemo } from "react";
import MCategoryPageStyle from "./style";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { CategoryModel } from "../../../resources/testCategories";
import { useAppSelector } from "../../../redux/store";
import { ChevronSmallDownIcon } from "../../../resources/icons/CommonIcons";
import { useRouter } from "next/router";

interface PageProps {
  data: CategoryModel | false | undefined;
}

const MCategoryPage = (props: PageProps) => {
  const { data } = props;
  const { t } = useTranslation();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const router = useRouter();

  const newData = useMemo(() => {
    if (!data) return { big: [], small: [] };
    const big = data.subcategories.slice(0, 3);
    const small = data.subcategories.slice(3, data.subcategories.length);
    return { big, small };
  }, [data]);

  if (data === false)
    return (
      <MCategoryPageStyle>
        <h1>Sorry, Error ocured</h1>
      </MCategoryPageStyle>
    );

  /*
  router.push({
      pathname: `/categories/${router.query.category}/${subcategory}/`,
      query: {
        ...router.query,
        page: 1,
        show_first: showFirst,
      },
    });
  */
  const linkRoute = useCallback((category: string) => {
    return `/mobile/categories/${router.query.category}/${category}?category=${router.query.category}&page=1&show_first=new`;
  }, []);

  const mapBigItems = data?.subcategories.map((item) => (
    <Link key={item.id} href={linkRoute(item.key)}>
      <a className="item">
        <div className="image_cont">
          <Image src={item.image_url} layout="fill" objectFit="contain" />
        </div>
        <span>{item[`name_${locale}`]}</span>
      </a>
    </Link>
  ));

  // const mapSmallItems = newData.small.map((item, index) => (
  //   <Link key={item.id} href={linkRoute(item.key)}>
  //     <a
  //       className={`item ${
  //         index === newData.small.length - 1 ? "last_item" : ""
  //       }`}
  //     >
  //       <span>{item[`name_${locale}`]}</span>
  //       <ChevronSmallDownIcon color="static_red" width="18" height="18" />
  //     </a>
  //   </Link>
  // ));

  return (
    <MCategoryPageStyle>
      {data && (
        <>
          <div className="top_cont">
            <div className="image_cont">
              <Image
                src={data.image_url}
                layout="fill"
                objectFit="contain"
                priority={true}
              />
            </div>
            <h1 className="title">{data[`name_${locale}`]}</h1>
            <Link href={linkRoute("all")}>
              <a className="subtitle">{t("all_products_in_category")}</a>
            </Link>
          </div>
          <div className="buttons_cont">
            <div className="big_buttons_cont">{mapBigItems}</div>
            {/* <div className="small_buttons_cont">{mapSmallItems}</div> */}
          </div>
        </>
      )}
    </MCategoryPageStyle>
  );
};

export default MCategoryPage;
