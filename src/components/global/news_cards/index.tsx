import React, { useState } from "react";
import NewsCardsStyle, { NewsCardStyle } from "./style";
import * as AllBigIcons from "../../../resources/icons/BigIcons";
import { CloseIcon } from "../../../resources/icons/CommonIcons";
import {
  AnimatePresence,
  PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { StoriesModalProps } from "../../desktop/modals/stories_modal";

interface Iprops {
  onStoriesPress: (state: StoriesModalProps) => void;
}

interface CardModel {
  id: number;
  title: string;
  description: string;
  icon: AllBigIcons.BigIconsType;
  grad1: string;
  grad2: string;
  button_text: string;
}
const data: CardModel[] = [
  {
    id: 0,
    title: "Создайте аккаунт",
    description: "Наши пользователи получают от Молла больше, имея аккаунт",
    icon: "UserBigIcon",
    grad1: "rgb(113, 13, 157)",
    grad2: "rgb(35, 144, 211)",
    button_text: "Что дает регестрация?",
  },
  {
    id: 1,
    title: "Хорошие новости!",
    description: "Скидки 80% только сегодня, в честь майских празников",
    icon: "CoinsBigIcon",
    grad1: "rgb(162, 59, 59)",
    grad2: "rgb(67, 121, 155)",
    button_text: "Перейти к скидкам",
  },
  {
    id: 2,
    title: "Совет",
    description: "Следите за входящими сообщениями время от времени.",
    icon: "FlyMailBigIcon",
    grad1: "rgb(177, 188, 92)",
    grad2: "rgb(200, 167, 17)",
    button_text: "К сообщениям",
  },
  {
    id: 3,
    title: "Осторожно!",
    description: "Никому не сообщайте данные о краточке.",
    icon: "WalletBigIcon",
    grad1: "rgb(162, 71, 167)",
    grad2: "rgb(234, 166, 126)",
    button_text: "К правилам безопасности",
  },
];

const NewsCards = (props: Iprops) => {
  const { onStoriesPress } = props;
  const [index, setIndex] = useState(0);

  const onCardClick = (index: number) => {
    onStoriesPress({ data: data, activeIndex: index });
  };

  return (
    <NewsCardsStyle>
      <AnimatePresence initial={false}>
        <Card
          key={index + 1 >= data.length - 1 ? 0 : index + 1}
          initial={{ scale: 0, y: 24, opacity: 0 }}
          animate={{ scale: 0.95, y: 12, opacity: 0.5 }}
          transition={{
            scale: { duration: 0.2 },
            opacity: { duration: 0.4 },
          }}
          data={data[index + 1 >= data.length - 1 ? 0 : index + 1]}
          dataLength={data.length}
          onClick={onCardClick}
        />
        <Card
          key={index >= data.length - 1 ? 0 : index}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            opacity: { duration: 0.2 },
          }}
          index={index}
          setIndex={setIndex}
          drag
          data={data[index >= data.length - 1 ? 0 : index]}
          dataLength={data.length}
          onClick={onCardClick}
        />
      </AnimatePresence>
    </NewsCardsStyle>
  );
};

interface CardProps {
  drag?: true;
  index?: number;
  setIndex?: (state: number) => void;
  initial?: {};
  animate?: {};
  transition?: {};
  dataLength?: number;
  data: CardModel;
  onClick: (id: number) => void;
}
const Card = (props: CardProps) => {
  const {
    drag,
    index,
    setIndex,
    initial,
    animate,
    transition,
    data,
    dataLength,
    onClick,
  } = props;
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  function handleDragEnd(event: any, info: PanInfo) {
    if (info.offset.x > 50) {
      //@ts-ignore
      setIndex(index + 1 >= dataLength - 1 ? 0 : index + 1);
    }
  }
  const closeCard = () => {
    //@ts-ignore
    setIndex(index + 1 >= dataLength - 1 ? 0 : index + 1);
  };

  return (
    <NewsCardStyle
      grad1={data?.grad1}
      grad2={data?.grad2}
      style={{
        top: 0,
        x: x,
        rotate: rotate,
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={drag ? "x" : false}
      dragConstraints={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      onDragEnd={handleDragEnd}
      initial={initial}
      animate={{ ...animate, pointerEvents: "auto" }}
      transition={transition}
      exit={{
        x: 150,
        opacity: 0,
        scale: 0.5,
        pointerEvents: "none",
        transition: { duration: 0.2 },
      }}
      onClick={() => null}
    >
      <div className="left_cont">
        <span className="title">{data.title}</span>
        <span className="description">{data.description}</span>
      </div>
      {React.createElement(AllBigIcons[data.icon], {
        width: "60",
        height: "60",
      })}
      <button
        className="colse_btn"
        onClick={closeCard}
        aria-label="close-button"
      >
        <CloseIcon width="20" height="20" color="static_white" />
      </button>
      <button
        className="card_btn"
        aria-label="news_card_button"
        onClick={() => onClick(data.id)}
      />
    </NewsCardStyle>
  );
};

export default NewsCards;
