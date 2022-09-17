import { useEffect, useState } from "react";
import MAccordionItemStyle from "./style";
import { motion } from "framer-motion";
import { ChevronSmallDownIcon } from "../../../resources/icons/CommonIcons";
import colorsPalet from "../../../resources/constants/colors";
import { useAppSelector } from "../../../redux/store";

interface Iprops {
  data: {
    id: number;
    title: string;
    description: string;
  };
  activeIndex: number | null;
  setActiveIndex: (state: number | null) => void;
  lastElement: boolean;
}

const MAccordionItem = (props: Iprops) => {
  const { data, activeIndex, setActiveIndex, lastElement } = props;
  const { theme } = useAppSelector((state) => state.globalSliceReducer);
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (activeIndex !== data.id) {
      setOpen(false);
    } else if (activeIndex === data.id) {
      setOpen(true);
    } else {
      return;
    }
  }, [activeIndex]);

  const click = () => {
    if (activeIndex === data.id) {
      setOpen(false);
      setActiveIndex(null);
      return;
    }
    setActiveIndex(data.id);
  };

  return (
    <MAccordionItemStyle lastElement={lastElement}>
      <div onClick={click} className="title_cont">
        <motion.h2
          animate={{
            color: isOpen
              ? colorsPalet[theme].static_red
              : colorsPalet[theme].text_primary,
            transition: {
              duration: 0.2,
              ease: [0.2, 0, 0.31, 0.98],
            },
          }}
        >
          {data.title}
        </motion.h2>
        <div className={`chevron ${isOpen ? "chevron_active" : ""}`}>
          <ChevronSmallDownIcon color="static_red" />
        </div>
      </div>
      <motion.p
        animate={{
          height: isOpen ? "auto" : 0,
          marginBottom: isOpen ? 16 : 0,
          transition: {
            duration: 0.2,
            ease: [0.2, 0, 0.31, 0.98],
          },
        }}
      >
        {data.description}
      </motion.p>
    </MAccordionItemStyle>
  );
};

export default MAccordionItem;
