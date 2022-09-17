import { useEffect, useRef, useState } from "react";
import NotificationDialogMainStyle from "./style";
import { motion, useTransform, useElementScroll } from "framer-motion";
import moment from "moment";
import { DIALOG_SLIDE_ANIMATION } from "../../../../../../resources/constants/animations";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "../../../../../../redux/store";

interface NotificationItemModel {
  date: string;
  text_ru: string;
  text_uz: string;
  text_oz: string;
  isRead: boolean;
}
const data: NotificationItemModel[] = [
  {
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
    date: "2022-10-25T15:40",
    text_ru: "Подними свое объявление в списке со скидкой 35%",
    text_uz: "Элонизни 35% чегирма билан кўтаринг",
    text_oz: "Elonizni 35% chegirma bilan kotaring",
    isRead: false,
  },
  {
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
    date: "2022-10-09T21:30",
    text_ru: "Подними свое объявление в списке со скидкой 35%",
    text_uz: "Элонизни 35% чегирма билан кўтаринг",
    text_oz: "Elonizni 35% chegirma bilan kotaring",
    isRead: true,
  },
  {
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
    date: "2022-10-03T16:32",
    text_ru: "Подними свое объявление в списке со скидкой 35%",
    text_uz: "Элонизни 35% чегирма билан кўтаринг",
    text_oz: "Elonizni 35% chegirma bilan kotaring",
    isRead: true,
  },
  {
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

interface Iprops {
  onItemClick: (state: string) => void;
}

const NotificationDialogMain = ({ onItemClick }: Iprops) => {
  const { t } = useTranslation();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const notifContRef = useRef<HTMLDivElement>(null);
  const itemsContRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const { scrollY, scrollYProgress } = useElementScroll(itemsContRef);
  const topClipper = useTransform(scrollY, [0, 24], [0, 1]);
  const bottomClipper = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

  useEffect(() => {
    if (notifContRef.current) {
      if (window.innerHeight < 700) {
        notifContRef.current.clientHeight >= window.innerHeight - 120 &&
          setIsScrollable(true);
        return;
      }
      notifContRef.current.clientHeight >= 608 && setIsScrollable(true);
    }
  }, []);
  return (
    <NotificationDialogMainStyle
      ref={notifContRef}
      variants={DIALOG_SLIDE_ANIMATION}
      initial="visible"
      animate="visible"
      exit="left_hidden"
    >
      <span className="dialog_title">{t("notifications")}</span>
      <motion.div
        className="clipper top_clipper"
        style={{ opacity: topClipper }}
      />
      <div ref={itemsContRef} className="items_cont">
        {data.map((item) => (
          <NotificationItem
            key={item.date}
            {...item}
            locale={locale}
            onClick={() => onItemClick("active")}
          />
        ))}
      </div>
      {isScrollable ? (
        <motion.div className="clipper" style={{ opacity: bottomClipper }} />
      ) : null}
    </NotificationDialogMainStyle>
  );
};

interface NotifItemPprops extends NotificationItemModel {
  onClick: () => void;
  locale: "ru" | "uz" | "oz";
}
const NotificationItem = (props: NotifItemPprops) => {
  const { date, locale, isRead, onClick } = props;

  return (
    <button className="item" onClick={onClick}>
      <span className="date">{moment(date).format("DD MMMM HH:mm")}</span>
      <p className="text">{props[`text_${locale}`]}</p>
      {!isRead ? <div className="dot" /> : null}
    </button>
  );
};

export default NotificationDialogMain;
