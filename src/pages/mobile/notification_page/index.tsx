import React from "react";
import MNotificationPageStyle from "./style";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import moment from "moment";
import NiceModal from "@ebay/nice-modal-react";
import { useAppSelector } from "../../../redux/store";
import MNotifcationModal from "../../../components/mobile/modals/m_notification_modal";

interface PageProps {}

const data: NotificationProps[] = [
  {
    id: 0,
    date: "2022-10-28T12:30",
    text_ru:
      "Создайте новый аккаунт и получите доступ ко всем преимуществам нашего сервиса",
    text_uz:
      "Янги ҳисоб яратинг ва хизматимизнинг барча афзалликларидан фойдаланиш имкониятига ега бўлинг",
    text_oz:
      "Yangi hisob yarating va xizmatimizning barcha afzalliklaridan foydalanish imkoniyatiga ega bo'ling",
    isRead: false,
  },
  {
    id: 1,
    date: "2022-10-25T15:40",
    text_ru: "Подними свое объявление в списке со скидкой 35%",
    text_uz: "Элонизни 35% чегирма билан кўтаринг",
    text_oz: "Elonizni 35% chegirma bilan kotaring",
    isRead: false,
  },
  {
    id: 2,
    date: "2022-10-18T19:30",
    text_ru:
      'Ваше объявление "Продается матиз" успешно прошло проверку, и теперь доступно для просмотра всем пользователям',
    text_uz:
      'Сизнинг элониз "Матиз сотилади" муваффақиятли текширилди ва енди барча фойдаланувчиларга кўриш мумкин',
    text_oz:
      'Sizning eloniz "Matiz sotiladi" muwaffaqiyatli tekshirildi va endi barcha qurish mumkin',
    isRead: false,
  },
  {
    id: 3,
    date: "2022-10-11T18:35",
    text_ru:
      "Создайте новый аккаунт и получите доступ ко всем преимуществам нашего сервиса",
    text_uz:
      "Янги ҳисоб яратинг ва хизматимизнинг барча афзалликларидан фойдаланиш имкониятига ега бўлинг",
    text_oz:
      "Yangi hisob yarating va xizmatimizning barcha afzalliklaridan foydalanish imkoniyatiga ega bo'ling",
    isRead: true,
  },
  {
    id: 4,
    date: "2022-10-09T21:30",
    text_ru: "Подними свое объявление в списке со скидкой 35%",
    text_uz: "Элонизни 35% чегирма билан кўтаринг",
    text_oz: "Elonizni 35% chegirma bilan kotaring",
    isRead: true,
  },
  {
    id: 5,
    date: "2022-10-07T10:53",
    text_ru:
      'Ваше объявление "Продается матиз" успешно прошло проверку, и теперь доступно для просмотра всем пользователям',
    text_uz:
      'Сизнинг элониз "Матиз сотилади" муваффақиятли текширилди ва енди барча фойдаланувчиларга кўриш мумкин',
    text_oz:
      'Sizning eloniz "Matiz sotiladi" muwaffaqiyatli tekshirildi va endi barcha qurish mumkin',
    isRead: false,
  },
  {
    id: 6,
    date: "2022-10-05T12:30",
    text_ru:
      "Создайте новый аккаунт и получите доступ ко всем преимуществам нашего сервиса",
    text_uz:
      "Янги ҳисоб яратинг ва хизматимизнинг барча афзалликларидан фойдаланиш имкониятига ега бўлинг",
    text_oz:
      "Yangi hisob yarating va xizmatimizning barcha afzalliklaridan foydalanish imkoniyatiga ega bo'ling",
    isRead: true,
  },
  {
    id: 7,
    date: "2022-10-03T16:32",
    text_ru: "Подними свое объявление в списке со скидкой 35%",
    text_uz: "Элонизни 35% чегирма билан кўтаринг",
    text_oz: "Elonizni 35% chegirma bilan kotaring",
    isRead: true,
  },
  {
    id: 8,
    date: "2022-10-01T10:30",
    text_ru:
      'Ваше объявление "Продается матиз" успешно прошло проверку, и теперь доступно для просмотра всем пользователям',
    text_uz:
      'Сизнинг элониз "Матиз сотилади" муваффақиятли текширилди ва енди барча фойдаланувчиларга кўриш мумкин',
    text_oz:
      'Sizning eloniz "Matiz sotiladi" muwaffaqiyatli tekshirildi va endi barcha qurish mumkin',
    isRead: true,
  },
  {
    id: 9,
    date: "2022-09-27T22:40",
    text_ru:
      "Создайте новый аккаунт и получите доступ ко всем преимуществам нашего сервиса",
    text_uz:
      "Янги ҳисоб яратинг ва хизматимизнинг барча афзалликларидан фойдаланиш имкониятига ега бўлинг",
    text_oz:
      "Yangi hisob yarating va xizmatimizning barcha afzalliklaridan foydalanish imkoniyatiga ega bo'ling",
    isRead: true,
  },
];

const MNotificationPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();

  const onItemClick = () => {
    NiceModal.show(MNotifcationModal);
  };

  return (
    <MNotificationPageStyle>
      {data.map((item) => (
        <NotificationItem key={item.id} {...item} onClick={onItemClick} />
      ))}
    </MNotificationPageStyle>
  );
};

interface NotificationProps {
  id: number;
  date: string;
  text_ru: string;
  text_uz: string;
  text_oz: string;
  isRead: boolean;
  onClick?: () => void;
}
const NotificationItem = (props: NotificationProps) => {
  const { id, date, isRead, onClick } = props;
  const { locale } = useAppSelector((state) => state.globalSliceReducer);

  return (
    <button className="item" onClick={onClick}>
      {!isRead && <span className="badge" />}
      <span className="date">{moment(date).format("DD MMMM, HH:mm")}</span>
      <span className="title">{props[`text_${locale}`]}</span>
    </button>
  );
};

export default MNotificationPage;
