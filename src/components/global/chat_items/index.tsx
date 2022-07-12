import React, { useState } from "react";
import { ChatItemStyle, MarketItemStyle } from "./style";
import { MessageModel, OfferStatusTypes } from "../../../models/MessageModel";
import * as AllCommonIcons from "../../../resources/icons/CommonIcons";
import moment from "moment";
import { useTranslation } from "next-i18next";
import Button from "../button";
import Image from "next/image";

interface Iprops {
  data: MessageModel;
}

const ChatItems = ({ data }: Iprops) => {
  return (
    <>
      {data.author === "market" ? (
        <MarketItem data={data} />
      ) : (
        <CatItem data={data} />
      )}
    </>
  );
};

interface ItemProps {
  data: MessageModel;
}

const MarketItem = (props: ItemProps) => {
  const { author = "market", price, status, date } = props.data;
  const { t } = useTranslation();
  const [itemStatus, setStatus] = useState<OfferStatusTypes | undefined>(
    status
  );

  return (
    <MarketItemStyle type={author}>
      <span className="date">{moment(date).format("HH:mm")}</span>
      <span className="title">{t(itemStatus as OfferStatusTypes)}</span>
      <span className="price">{price}</span>
      <ButtonsBlock type={itemStatus as OfferStatusTypes} />
    </MarketItemStyle>
  );
};

interface ButtonsBlockProps {
  type: OfferStatusTypes;
}

//TODO: Rework this part of code (This realisation is rubish)
const ButtonsBlock = (props: ButtonsBlockProps) => {
  const { type } = props;
  const { t } = useTranslation();

  const GrayButton = (text: string) => (
    <Button
      text={t(text)}
      onClick={() => console.log(text)}
      options={{
        $width: "100%",
        $borderColor: "icon_color",
        $textColor: "select_color",
        $hoverBackgroundColor: "bg_color",
      }}
    />
  );
  const GreenButton = (text: string) => (
    <Button
      text={t(text)}
      onClick={() => console.log(text)}
      options={{
        $width: "100%",
        $borderColor: "static_green",
        $textColor: "static_green",
        $hoverBackgroundColor: "static_green",
        $hoverTextColor: "static_white",
        $hoverBorderColor: "static_green",
      }}
    />
  );

  const RedButton = (text: string) => (
    <Button
      text={t(text)}
      onClick={() => console.log(text)}
      options={{
        $width: "100%",
        $borderColor: "static_red",
        $textColor: "static_red",
        $hoverBackgroundColor: "static_red",
        $hoverTextColor: "static_white",
        $hoverBorderColor: "static_red",
      }}
    />
  );

  return (
    <div className="buttons_cont">
      {type === "seller_offer" && (
        <>
          {GrayButton("refuse")}
          {GreenButton("accept")}
        </>
      )}
      {type === "seller_accepted" && <>{GreenButton("buy")}</>}
      {type === "user_accepted" && <>{GreenButton("buy")}</>}
      {type === "user_refused" && <>{RedButton("offer")}</>}
      {type === "seller_refused" && (
        <>
          {GrayButton("refuse")}
          {GreenButton("accept")}
        </>
      )}
    </div>
  );
};

const CatItem = (props: ItemProps) => {
  const { author, message, image, has_seen, date } = props.data;

  return (
    <ChatItemStyle type={author} has_image={image ? true : false}>
      {author === "you" ? (
        <div className="item_cont">
          {image ? (
            <div className="image_wrapper">
              <div className="image">
                <Image src={image} layout="fill" objectFit="cover" />
              </div>
            </div>
          ) : (
            <span className="message">{message}</span>
          )}

          <div className="bottom_cont">
            {React.createElement(
              AllCommonIcons[
                has_seen ? "CheckMarkTwoIcon" : "CheckMarkOneIcon"
              ],
              { color: "static_green" }
            )}

            <span className="time">{moment(date).format("HH:mm")}</span>
          </div>
        </div>
      ) : (
        <div className="item_cont">
          {image ? (
            <div className="image_wrapper">
              <div className="image">
                <Image src={image} layout="fill" objectFit="cover" />
              </div>
            </div>
          ) : (
            <span className="message">{message}</span>
          )}
          <div className="bottom_cont">
            <span className="time">{moment(date).format("HH:mm")}</span>
          </div>
        </div>
      )}
    </ChatItemStyle>
  );
};

export default ChatItems;
