import { useEffect, useState } from "react";
import Image from "next/image";
import ProductImageCarouselDesktopStyle from "./style";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { ChevronSmallDownIcon } from "../../../resources/icons/CommonIcons";
import { useRouter } from "next/router";
import NiceModal from "@ebay/nice-modal-react";
import ImagePreview from "../../global/image_preview";

interface Iprops {
  data: {
    images: string[];
    has_guarantee: boolean;
    price: number;
    currency: "uzs" | "usd" | string;
    product_id: number;
  };
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const ProductImageCarouselDesktop = ({ data }: Iprops) => {
  const router = useRouter();
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, data.images.length, page);

  useEffect(() => {
    setPage([0, 0]);
  }, [router]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const showImagePreview = () => {
    console.log("modal");
    NiceModal.show(ImagePreview, { ...data, activeIndex: imageIndex });
  };

  return (
    <ProductImageCarouselDesktopStyle>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="image_wrapper"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          onClick={showImagePreview}
        >
          <Image
            src={data.images[imageIndex]}
            layout="fill"
            objectFit="cover"
            alt={data.images[imageIndex]}
            priority={true}
          />
        </motion.div>
      </AnimatePresence>
      <div className="control next" onClick={() => paginate(1)}>
        <ChevronSmallDownIcon width="20" height="20" color="static_white" />
      </div>
      <div className="control prev" onClick={() => paginate(-1)}>
        <ChevronSmallDownIcon width="20" height="20" color="static_white" />
      </div>
    </ProductImageCarouselDesktopStyle>
  );
};

export default ProductImageCarouselDesktop;
