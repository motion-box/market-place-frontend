import React, { useEffect, useState } from "react";
import UserPageContStyle from "./style";
import * as BigIcons from "../../../resources/icons/BigIcons";
import ScrollContainer from "react-indiana-drag-scroll";
import Button from "../../global/button";
import { useAppSelector } from "../../../redux/store";
import Slider from "../../global/slider";
import { useRouter } from "next/router";

interface Iprops {
  title: string;
  active_page?: number;
  pages?: {
    id: number;
    key: string;
    name_ru: string;
    name_uz: string;
    name_oz: string;
  }[];
  placeholder?: {
    id: number;
    title: string;
    description: string;
    button_text?: string;
    onClick?: () => void;
    icon: BigIcons.BigIconsType;
  };
  has_data: boolean;
  slider?: {
    id: number;
    key: string;
    name_ru: string;
    name_uz: string;
    name_oz: string;
  }[];
  activeIndex: number;
  setActiveIndex: (state: number) => void;
  children: React.ReactChild | React.ReactNode;
}

const UserPageCont = (props: Iprops) => {
  const {
    title,
    active_page,
    pages,
    placeholder,
    has_data,
    slider,
    activeIndex,
    setActiveIndex,
    children,
  } = props;
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const router = useRouter();

  useEffect(() => {
    if (!slider) return setActiveIndex(0);
    if (!router.query.status || Number(router.query.status) > slider.length) {
      setActiveIndex(0);
    }
  }, []);

  useEffect(() => {
    if (!slider) return;
    const path = router.asPath.split("?")[0];
    router.replace(
      {
        pathname: path,
        query: {
          status: activeIndex,
        },
      },
      `${path}?status=${activeIndex}`,
      { shallow: true }
    );
  }, [activeIndex]);

  const onRoutePress = (path: string) => {
    router.push(`/user/${path}?status=0`);
  };

  return (
    <UserPageContStyle>
      <div className="top_cont">
        <h1>{title}</h1>
        {pages && (
          <div className="page_selector_cont">
            <ScrollContainer className="page_selector">
              {pages.map((item, index) => (
                <button key={index} onClick={() => onRoutePress(item.key)}>
                  <span>{item[`name_${locale}`]}</span>
                  {active_page === item.id && <div className="underline" />}
                </button>
              ))}
            </ScrollContainer>
          </div>
        )}
      </div>
      {pages && <div className="big_underline" />}

      <div className="page_content_cont">
        <div className="page_content">
          {slider && (
            <div className="slider_cont">
              <div className="slider">
                <Slider
                  data={slider}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              </div>
            </div>
          )}
          {has_data ? (
            <>{children}</>
          ) : (
            placeholder && (
              <div className="placeholder">
                {React.createElement(BigIcons[placeholder.icon], {
                  width: "128",
                  height: "128",
                })}
                <h3>{placeholder.title}</h3>
                <p>{placeholder.description}</p>
                <div className="button_cont">
                  {placeholder.onClick && (
                    <Button
                      text={placeholder.button_text || ""}
                      onClick={placeholder.onClick}
                      options={{
                        $backgroundColor: "static_red",
                        $height: 60,
                        $textColor: "static_white",
                      }}
                    />
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </UserPageContStyle>
  );
};

export default UserPageCont;
