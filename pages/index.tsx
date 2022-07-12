import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import Stories from "../src/components/global/stories";
import NewsCards from "../src/components/global/news_cards";
import MainCategorySelector from "../src/components/desktop/main_category_selector";
import MetaHead from "../src/components/global/meta_head";
import ProductsGridDesktop from "../src/components/desktop/products_grid_desktop";
import { useTranslation } from "next-i18next";
import { productData } from "../src/resources/testProducts";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead
        title="Молл | Главная"
        description="Ожидайте, мы скоро откроемся"
      />
      <Container className="page_wrapper">
        <div className="first_row">
          <Stories />
          <NewsCards />
        </div>
        <MainCategorySelector />
        <ProductsGridDesktop title={t("offers_for_you")} data={productData} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  gap: 24px;
  .first_row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 32px;
    align-items: center;
  }
  .color_palet {
    .item {
      display: flex;
      gap: 20px;
      div {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Home;
