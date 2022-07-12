import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { ChatModel, MessagesModel } from "../../../models/MessageModel";
import { ClipIcon, SendIcon } from "../../../resources/icons/CommonIcons";
import ChatItems from "../../global/chat_items";
import ChatDesktopStyle from "./style";

interface Iprops extends ChatModel {
  currency: string;
}

const ChatDesktop = (props: Iprops) => {
  const { id, data } = props;
  const { t } = useTranslation();
  const [messages, setMessages] = useState<MessagesModel[]>(data);

  const mapDateBlock = messages.map((item) => {
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

  return (
    <ChatDesktopStyle>
      <div className="messages_cont">{mapDateBlock}</div>
      <div className="chat_input">
        <button className="file">
          <ClipIcon />
        </button>
        <input placeholder={t("your_message")} />
        <button className="send">
          <SendIcon />
        </button>
      </div>
    </ChatDesktopStyle>
  );
};

export default ChatDesktop;
