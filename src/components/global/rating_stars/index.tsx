import React, { useEffect, useState } from "react";
import { StarFillIcon } from "../../../resources/icons/CommonIcons";
import RatingStarsStyle from "./style";

interface Iprops {
  rating: number;
}

const RatingStars = (props: Iprops) => {
  const { rating } = props;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const FULL_WIDTH = 78;
    const MAX_RATE = 5;

    const ratePersent = (rating * 100) / MAX_RATE;
    const widthInPx = (ratePersent * FULL_WIDTH) / 100;
    setWidth(widthInPx);
  }, []);

  return (
    <RatingStarsStyle>
      <div className="front_cont" style={{ width }}>
        <StarFillIcon width="14" height="14" color="static_red" />
        <StarFillIcon width="14" height="14" color="static_red" />
        <StarFillIcon width="14" height="14" color="static_red" />
        <StarFillIcon width="14" height="14" color="static_red" />
        <StarFillIcon width="14" height="14" color="static_red" />
      </div>
      <div className="back_cont">
        <StarFillIcon width="14" height="14" color="static_red50" />
        <StarFillIcon width="14" height="14" color="static_red50" />
        <StarFillIcon width="14" height="14" color="static_red50" />
        <StarFillIcon width="14" height="14" color="static_red50" />
        <StarFillIcon width="14" height="14" color="static_red50" />
      </div>
    </RatingStarsStyle>
  );
};

export default RatingStars;
