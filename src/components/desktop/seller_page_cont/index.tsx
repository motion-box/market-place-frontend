import React from "react";
import SellerPageContStyle from "./style";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import ScrollContainer from "react-indiana-drag-scroll";
import { SellerModel } from "../../../models/SellerModel";
import {
  ExportIcon,
  HeartOutlineIcon,
  UnHeartOutlineIcon,
} from "../../../resources/icons/CommonIcons";
import Button from "../../global/button";
import RatingStars from "../../global/rating_stars";
import * as BigIcons from "../../../resources/icons/BigIcons";

interface Iprops {
  seller: SellerModel;
  is_favorite: boolean;
  last_visit: string;
  active_page: number;
  children: React.ReactNode;
  placeholder?: {
    id: number;
    title: string;
    description: string;
    button_text?: string;
    onClick?: () => void;
    icon: BigIcons.BigIconsType;
  };
  has_data: boolean;
}

const pages = [
  {
    id: 0,
    name: "seller_announcements",
    route: "announcements",
  },
  {
    id: 1,
    name: "seller_review",
    route: "reviews",
  },
];

const SellerPageCont = (props: Iprops) => {
  const {
    seller,
    is_favorite,
    last_visit,
    children,
    active_page,
    has_data,
    placeholder,
  } = props;
  const { t } = useTranslation();
  const router = useRouter();

  const onRoutePress = (route: string) => {
    router.push(`/seller/${router.query.seller_id}/${route}`);
  };

  return (
    <SellerPageContStyle>
      <div className="seller_cont">
        <div className="image_cont">
          <Image src={seller.photo} layout="fill" objectFit="cover" />
        </div>
        <div className="text_cont">
          <div className="title_cont">
            <span className="name">{`${seller.first_name} ${seller.last_name}`}</span>
            <button>
              <ExportIcon color="text_primary" />
            </button>
            <button>
              {is_favorite ? (
                <UnHeartOutlineIcon color="text_primary" />
              ) : (
                <HeartOutlineIcon color="text_primary" />
              )}
            </button>
          </div>
          <RatingStars rating={seller.rate} />
          <div className="description_cont">
            <span>{seller.address}</span>
            <span>{last_visit}</span>
          </div>
        </div>
      </div>
      <div className="page_selector_cont">
        <ScrollContainer className="page_selector">
          {pages.map((item, index) => (
            <button key={index} onClick={() => onRoutePress(item.route)}>
              <span>{t(item.name)}</span>
              {active_page === item.id && <div className="underline" />}
            </button>
          ))}
        </ScrollContainer>
        <div className="big_underline" />
      </div>
      <div className="page_content_cont">
        <div className="page_content">
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
    </SellerPageContStyle>
  );
};

export default SellerPageCont;
