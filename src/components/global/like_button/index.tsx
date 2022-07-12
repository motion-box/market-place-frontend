import { AnimatePresence } from "framer-motion";
import LikeButtonStyle, { LikeButtonProps } from "./style";
import { motion } from "framer-motion";
import { FADE_SCALE_ANIMATION } from "../../../resources/constants/animations";
import { HeartOutlineIcon } from "../../../resources/icons/CommonIcons";
import { HeartColorIcon } from "../../../resources/icons/ColorIcons";
import { ColorsPaletTypes } from "../../../resources/constants/colors";

interface Iprops {
  isLike: boolean;
  setLike: (state: boolean) => void;
  options?: LikeButtonProps;
}

const LikeButton = (props: Iprops) => {
  const { isLike, setLike, options } = props;
  return (
    <LikeButtonStyle
      {...options}
      aria-label="like_button"
      onClick={() => setLike(!isLike)}
    >
      <AnimatePresence initial={false}>
        {isLike ? (
          <IconWrapper type="fill" key="fill" isShadow={options?.$isShadow} />
        ) : (
          <IconWrapper
            type="outline"
            key="outline"
            color={options?.$iconColor}
            isShadow={options?.$isShadow}
          />
        )}
      </AnimatePresence>
    </LikeButtonStyle>
  );
};

const IconWrapper = ({
  type,
  color,
  isShadow,
}: {
  type: "fill" | "outline";
  color?: ColorsPaletTypes;
  isShadow?: boolean;
}) => {
  return (
    <motion.div
      className={`icon ${isShadow && "filter_shadow"}`}
      variants={FADE_SCALE_ANIMATION}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      {type === "fill" ? (
        <HeartColorIcon />
      ) : (
        <HeartOutlineIcon color={color} />
      )}
    </motion.div>
  );
};

export default LikeButton;
