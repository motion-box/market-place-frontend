import { useEffect, useRef, useState } from "react";
import StoriesStyle from "./style";
import Image from "next/image";
import { motion, useElementScroll, useTransform } from "framer-motion";
import { ChevronSmallDownIcon } from "../../../resources/icons/CommonIcons";
import { StoriesModalProps } from "../../desktop/modals/stories_modal";

interface Iprops {
  onStoriesPress: (state: StoriesModalProps) => void;
  hideControls?: boolean;
}

const data = [
  { id: 0, image_url: "shoes.png", isRead: false, type: "news" },
  { id: 1, image_url: "gamepad.png", isRead: false, type: "news" },
  { id: 2, image_url: "pot.webp", isRead: false, type: "stories" },
  { id: 3, image_url: "shoes.png", isRead: false, type: "news" },
  { id: 4, image_url: "gamepad.png", isRead: true, type: "news" },
  { id: 5, image_url: "pot.webp", isRead: true, type: "stories" },
  { id: 6, image_url: "shoes.png", isRead: true, type: "stories" },
  { id: 7, image_url: "gamepad.png", isRead: true, type: "stories" },
  { id: 8, image_url: "pot.webp", isRead: true, type: "stories" },
  { id: 9, image_url: "shoes.png", isRead: true, type: "stories" },
  { id: 10, image_url: "gamepad.png", isRead: true, type: "stories" },
  { id: 11, image_url: "pot.webp", isRead: true, type: "stories" },
  { id: 12, image_url: "shoes.png", isRead: true, type: "stories" },
  { id: 13, image_url: "gamepad.png", isRead: true, type: "stories" },
  { id: 14, image_url: "pot.webp", isRead: true, type: "stories" },
  { id: 15, image_url: "shoes.png", isRead: true, type: "news" },
  { id: 16, image_url: "gamepad.png", isRead: true, type: "stories" },
  { id: 17, image_url: "pot.webp", isRead: true, type: "stories" },
];

const ITEM_WIDTH = 84;
const Stories = (props: Iprops) => {
  const { onStoriesPress, hideControls } = props;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const { scrollX, scrollXProgress } = useElementScroll(sliderRef);
  const leftClipper = useTransform(scrollX, [0, 24], [0, 1]);
  const rightClipper = useTransform(scrollXProgress, [0.95, 1], [1, 0]);

  useEffect(() => {
    if (hideControls) return;
    if (!sliderRef.current) return;
    sliderRef.current.scrollWidth > sliderRef.current.clientWidth &&
      setIsScrollable(true);
  }, []);

  const onControlClick = (direction: string) => {
    if (!sliderRef.current) return;
    if (direction === "left") {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft - (ITEM_WIDTH + 8),
        behavior: "smooth",
      });
    } else {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft + ITEM_WIDTH + 8,
        behavior: "smooth",
      });
    }
  };

  const mapItems = data.map((item) => (
    <div
      key={item.id}
      className={`item ${item.type} ${item.isRead ? "read" : ""}`}
    >
      <div className="image_wrapper">
        <Image
          src={`/images/${item.image_url}`}
          alt={item.image_url}
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </div>
    </div>
  ));

  return (
    <StoriesStyle>
      {isScrollable ? (
        <motion.div className="control" style={{ opacity: leftClipper }}>
          <button
            className="filter_shadow"
            onClick={() => onControlClick("left")}
            aria-label="controller-left"
          >
            <ChevronSmallDownIcon width="20" height="20" color="static_red" />
          </button>
          <div className="clipper" />
        </motion.div>
      ) : null}
      <div className="slider" ref={sliderRef}>
        {mapItems}
      </div>
      {isScrollable ? (
        <motion.div
          className="control right_control"
          style={{ opacity: rightClipper }}
        >
          <button
            className="filter_shadow"
            onClick={() => onControlClick("right")}
            aria-label="controller-right"
          >
            <ChevronSmallDownIcon width="20" height="20" color="static_red" />
          </button>
          <div className="clipper right_clipper" />
        </motion.div>
      ) : null}
    </StoriesStyle>
  );
};

export default Stories;
