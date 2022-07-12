import { useTranslation } from "next-i18next";
import ProductDescriptionTabStyle from "./style";
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

interface Iprops {
  category: string;
  condition: number;
  manufacturer: string;
  model: string;
  storage: number;
  color: string;
  description: string;
}

const ProductDescriptionTab = (props: Iprops) => {
  const {
    category,
    condition,
    manufacturer,
    model,
    storage,
    color,
    description,
  } = props;
  const { t } = useTranslation();
  const conditionValue = useMotionValue(condition);

  return (
    <ProductDescriptionTabStyle
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ ease: "linear" }}
    >
      <div className="table">
        <div className="category">
          <span className="tilte">{t("type")}</span>
          <span className="description">{category}</span>
        </div>
        <div className="category">
          <span className="tilte">{t("condition")}</span>
          <div className="condition_cont">
            <span className="description">
              {t("condition_number", { condition })}
            </span>
            <ConditionVisualizer value={conditionValue} />
          </div>
        </div>
        <div className="category">
          <span className="tilte">{t("manufacturer")}</span>
          <span className="description">{manufacturer}</span>
        </div>
        <div className="category">
          <span className="tilte">{t("model")}</span>
          <span className="description">{model}</span>
        </div>
        <div className="category">
          <span className="tilte">{t("memory")}</span>
          <span className="description">{storage}</span>
        </div>
        <div className="category">
          <span className="tilte">{t("color")}</span>
          <span className="description">{color}</span>
        </div>
      </div>
      <p>{description}</p>
    </ProductDescriptionTabStyle>
  );
};

const ConditionVisualizer = ({ value }: { value: MotionValue<number> }) => {
  const color = useTransform(
    value,
    [0, 5, 10],
    ["#d32424", "#ffba00", "#18ba24"]
  );
  const left = useTransform(value, [0, 10], [2, 116]);
  return (
    <motion.div className="grad_cont">
      <motion.div
        className="circle filter_shadow"
        style={{ borderColor: color, left }}
      />
    </motion.div>
  );
};

export default ProductDescriptionTab;
