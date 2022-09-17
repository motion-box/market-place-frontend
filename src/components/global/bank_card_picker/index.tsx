import React, { useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { BankCardModel } from "../../../models/BankCardModel";
import { ChevronSmallDownIcon } from "../../../resources/icons/CommonIcons";
import BankCardSmall from "../bank_card_small";
import BankCardPickerStyle from "./style";

interface Iprops {
  title: string;
  description?: string;
  card: BankCardModel[];
}

const BankCardPicker = (props: Iprops) => {
  const { title, description, card } = props;
  const [selectedItem, setSelectedItem] = useState(0);
  //   const scrollRef = useRef<HTMLElement>(null);

  const onBankCardClick = (id: number) => {
    setSelectedItem(id);
  };

  //   const onContorllClick = (side: "left" | "right") => {
  //     const scrRef = scrollRef.current;
  //     if (!scrRef) return console.log("returned");
  //     if (side == "left") {
  //       console.log(scrRef);
  //     }
  //   };

  const mapCards = card.map((item, index) => (
    <BankCardSmall
      key={item.id}
      {...item}
      isSelected={index === selectedItem}
      onClick={() => onBankCardClick(index)}
    />
  ));

  return (
    <BankCardPickerStyle>
      <span className="title">{title}</span>
      <ScrollContainer className="cards_carousel">{mapCards}</ScrollContainer>
      {/* <div className="controls_cont">
        <button
          className="controll controll_left filter_shadow"
          onClick={() => onContorllClick("left")}
        >
          <ChevronSmallDownIcon color="static_red" />
        </button>
        <button
          className="controll controll_right filter_shadow"
          onClick={() => onContorllClick("right")}
        >
          <ChevronSmallDownIcon color="static_red" />
        </button>
      </div> */}
      {description && <span className="description">{description}</span>}
    </BankCardPickerStyle>
  );
};

export default BankCardPicker;
