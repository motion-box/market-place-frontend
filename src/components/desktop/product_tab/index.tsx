import { useState } from "react";
import ProductTabStyle, { LineStyle } from "./style";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import ProductDescriptionTab from "./product_description_tab";

interface Iprops {
  info: {
    category: string;
    condition: number;
    manufacturer: string;
    model: string;
    storage: number;
    color: string;
    description: string;
  };
}

const ProductTab = (props: Iprops) => {
  const { t } = useTranslation();
  const { info } = props;
  const [active, setActive] = useState(0);

  return (
    <ProductTabStyle>
      <motion.div className="tabs_cont">
        <AnimateSharedLayout>
          <motion.div className="tab_cont" onClick={() => setActive(0)}>
            <motion.span
              initial={false}
              animate={{
                color:
                  active === 0 ? "var(--text_primary)" : "var(--icon_color)",
              }}
            >
              {t("description")}
            </motion.span>
            {active === 0 && <Line />}
          </motion.div>
          <motion.div className="tab_cont" onClick={() => setActive(1)}>
            <motion.span
              initial={false}
              animate={{
                color:
                  active === 1 ? "var(--text_primary)" : "var(--icon_color)",
              }}
            >
              {t("seller")}
            </motion.span>
            {active === 1 && <Line />}
          </motion.div>
        </AnimateSharedLayout>
      </motion.div>
      <div className="content">
        <AnimatePresence initial={false}>
          {active === 0 ? <ProductDescriptionTab {...info} key="info" /> : null}
        </AnimatePresence>
      </div>
    </ProductTabStyle>
  );
};

const Line = () => {
  return <LineStyle className="line" layoutId="product_tab" />;
};

export default ProductTab;
