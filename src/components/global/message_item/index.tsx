import React from "react";
import MessageItemStyle from "./style";
import Image from "next/image";
import { MessageItemModel } from "../../../models/MessageModel";
import moment from "moment";
import { useRouter } from "next/router";

interface Iprops {
  data: MessageItemModel<"model">;
}

const MessageItem = (props: Iprops) => {
  const router = useRouter();
  const { id, product, last_message, last_edit_date, user, status } =
    props.data;

  return (
    <MessageItemStyle
      onClick={() =>
        router.push(
          `/user/messages/chat_room/${product.id}?companion=${user.id}&your=0`
        )
      }
    >
      <div className="image_wrapper">
        <Image
          src={product.image_url}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="content_cont">
        <span className="title">{product.title}</span>
        <span className="description">{last_message}</span>
        {status && <span className="description status">{status}</span>}
      </div>
      <div className="author_cont">
        <span className="author">{user.first_name}</span>
        <span className="date">
          {moment(last_edit_date).format("DD MMMM, HH:mm")}
        </span>
      </div>
    </MessageItemStyle>
  );
};

export default MessageItem;
