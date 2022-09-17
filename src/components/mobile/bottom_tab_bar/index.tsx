import React from "react";
import BottomTabBarStyle from "./style";
import * as AllColorIcons from "../../../resources/icons/ColorIcons";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

interface Iprops {}

type TabModel = {
  id: number;
  acitveIcon: AllColorIcons.ColorIconsType;
  idleIcon: AllColorIcons.ColorIconsType;
  text: string;
  route: string;
};
const tabsData: TabModel[] = [
  {
    id: 0,
    acitveIcon: "MainColorIcon",
    idleIcon: "MainOutlineIcon",
    text: "line",
    route: "/mobile",
  },
  {
    id: 1,
    acitveIcon: "SearchColorIcon",
    idleIcon: "SearchOutlineIcon",
    text: "search",
    route: "/mobile/search_in_category",
  },
  {
    id: 2,
    acitveIcon: "AddColorIcon",
    idleIcon: "AddColorIcon",
    text: "add",
    route: "/mobile/create_announcement",
  },
  {
    id: 3,
    acitveIcon: "MessageColorIcon",
    idleIcon: "MessageOutlineIcon",
    text: "messages",
    route: "/mobile/user/messages",
  },
  {
    id: 4,
    acitveIcon: "HeartColorIcon",
    idleIcon: "HeartOutlineIcon",
    text: "favorite",
    route: "/mobile/user/favorites",
  },
];

const BottomTabBar = (props: Iprops) => {
  const {} = props;
  const { t } = useTranslation();
  const { pathname, push } = useRouter();

  const mapItems = tabsData.map((item, index) => (
    <button key={item.id} className="item" onClick={() => push(item.route)}>
      {React.createElement(
        AllColorIcons[
          item[`${item.route === pathname ? "acitve" : "idle"}Icon`]
        ],
        {
          width: item.text === "add" ? "36" : "24",
          height: item.text === "add" ? "36" : "24",
        }
      )}
      {item.text !== "add" && (
        <span
          className={`text ${item.route === pathname ? "text_active" : ""}`}
        >
          {t(item.text)}
        </span>
      )}
    </button>
  ));

  return <BottomTabBarStyle>{mapItems}</BottomTabBarStyle>;
};

export default BottomTabBar;
