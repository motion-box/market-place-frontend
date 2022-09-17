import React, { useEffect, useState } from "react";
import MMessagesChatRoomPageStyle from "./style";
import { useTranslation } from "next-i18next";
import { ProductModel } from "../../../../models/ProductModel";
import { SellerModel } from "../../../../models/SellerModel";
import { ChatModel, MessagesModel } from "../../../../models/MessageModel";
import { productData } from "../../../../resources/testProducts";
import { useRouter } from "next/router";
import { sellerData } from "../../../../resources/testSellers";
import { chatData } from "../../../../resources/testMessages";
import MHeader from "../../../../components/mobile/header_mobile";
import Image from "next/image";
import {
  ChevronBigLeftIcon,
  ClipIcon,
  SendIcon,
} from "../../../../resources/icons/CommonIcons";
import Link from "next/link";
import ChatItems from "../../../../components/global/chat_items";
import NiceModal from "@ebay/nice-modal-react";
import MChatActionsModal from "../../../../components/mobile/modals/m_chat_actions_modal";
import MChatFileModal from "../../../../components/mobile/modals/m_chat_file_modal";

interface PageProps {}

const MMessagesChatRoomPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const [product, setProduct] = useState<ProductModel | null>(null);
  const [companion, setCompanion] = useState<SellerModel | null>(null);
  const [chat, setChat] = useState<ChatModel | null>(null);

  useEffect(() => {
    let fiteredProduct = productData.find(
      (item) => item.id == Number(router.query.id)
    );
    fiteredProduct && setProduct(fiteredProduct);

    let filteredCompanion = sellerData.find(
      (item) => item.id == Number(router.query.id)
    );
    filteredCompanion && setCompanion(filteredCompanion);

    let filterChat = chatData.find(
      (item) => item.id == Number(router.query.id)
    );
    filterChat && setChat(filterChat);
  }, []);

  const mapDateBlock = chat?.data.map((item) => {
    const messages = [...item.messages].reverse();
    return (
      <React.Fragment key={item.date}>
        <div className="date_cont item_shadow">{item.date}</div>
        {messages.map((message) => (
          <ChatItems key={message.id} data={message} />
        ))}
      </React.Fragment>
    );
  });

  const onOptionsClick = () => {
    NiceModal.show(MChatActionsModal);
  };
  const onFileClick = () => {
    NiceModal.show(MChatFileModal);
  };

  return (
    <>
      <MHeader
        title={companion?.first_name}
        goBack={true}
        rightSide={{
          firstBtn: {
            icon: "OptionIcon",
            onClick: () => onOptionsClick(),
          },
        }}
        background="card_color"
      />
      <MMessagesChatRoomPageStyle>
        {product
          ? companion
            ? chat && (
                <>
                  <Link href={`/mobile/announcement/${product.id}`}>
                    <a className="product_btn">
                      <div className="image_cont">
                        <Image
                          src={product.image_url}
                          layout="fill"
                          priority={true}
                        />
                      </div>
                      <div className="text_cont">
                        <span className="title">{product.title}</span>
                        <span className="price">
                          {`${product.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
                            product.currency
                          )}`}
                        </span>
                      </div>
                      <ChevronBigLeftIcon
                        width="18"
                        height="18"
                        color="static_red"
                      />
                    </a>
                  </Link>
                  <div className="messages_cont">{mapDateBlock}</div>
                  <div className="chat_input">
                    <button className="file_btn" onClick={onFileClick}>
                      <ClipIcon />
                    </button>
                    <input placeholder={t("your_message")} />
                    <button className="send_btn">
                      <SendIcon />
                    </button>
                  </div>
                </>
              )
            : null
          : null}
      </MMessagesChatRoomPageStyle>
    </>
  );
};

export default MMessagesChatRoomPage;
