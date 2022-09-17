import NotificationDialogDetailStyle from "./style";
import { DIALOG_SLIDE_ANIMATION } from "../../../../../../resources/constants/animations";
import * as AllCommonIcons from "../../../../../../resources/icons/CommonIcons";
import moment from "moment";
import Image from "next/image";
import Button from "../../../../../global/button";
import { useEffect, useRef, useState } from "react";
import { motion, useElementScroll, useTransform } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "../../../../../../redux/store";

interface Iprops {
  goBack: (state: boolean) => void;
}

const data = {
  date: "2022-10-28T12:30",
  title_ru:
    "Создавайте новый аккаунт в Молле и получите доступ ко всем преимуществам нашего сервиса",
  title_uz:
    "Савдо марказида янги ҳисоб яратинг ва хизматимизнинг барча афзалликларидан фойдаланинг",
  title_oz:
    "Savdo markazid yangi hisob yarating va xizmatimizning barcha imkoniyatlaridan foidalaning",
  desctiption_ru:
    "Размещение и продвижение объявлений, а также покупка товаров с бесконтактной доставкой ждут вас! Для подачи объявления регистрация обязательна. Регистрация на сайте позволяет управлять объявлениями из личного кабинета и даёт возможность активировать их по истечении срока их действия Размещение и продвижение объявлений, а также покупка товаров с бесконтактной доставкой ждут вас! Для подачи объявления регистрация обязательна. Регистрация на сайте позволяет управлять объявлениями из личного кабинета и даёт возможность активировать их по истечении срока их действия",
  desctiption_uz:
    "Рекламаларни жойлаштириш ва тарғиб қилиш, шунингдек, контакциз етказиб бериш билан товарларни сотиб олиш сизни кутмоқда! Рўйхатдан Еълонни тақдим қилиш талаб қилинади. Сайтда рўйхатдан ўтиш сизнинг шахсий ҳисобингиздан рекламаларни бошқаришга имкон беради ва уларнинг амал қилиш муддати тугагандан сўнг уларни фаоллаштириш имкониятини беради, рекламаларни жойлаштириш ва реклама қилиш, шунингдек контакциз етказиб бериш билан товарларни сотиб олиш сизни кутмоқда! Рўйхатдан Еълонни тақдим қилиш талаб қилинади. Сайтда рўйхатдан ўтиш сизнинг шахсий ҳисобингиздаги рекламаларни бошқаришга имкон беради ва уларнинг амал қилиш муддати тугагандан сўнг уларни фаоллаштириш имкониятини беради",
  desctiption_oz:
    "E'lonlarni joylashtirish va targ'ib qilish, shuningdek, kontaktsiz yetkazib berish orqali tovarlarni xarid qilish sizni kutmoqda! E'lonni joylashtirish uchun ro'yxatdan o'tish kerak. Saytda ro'yxatdan o'tish shaxsiy kabinetingizdan e'lonlarni boshqarish imkonini beradi va ularni amal qilish muddati tugagandan keyin faollashtirish imkonini beradi.Sizni e'lonlarni joylashtirish va targ'ib qilish, shuningdek, kontaktsiz yetkazib berish orqali tovarlarni xarid qilish kutmoqda! E'lonni joylashtirish uchun ro'yxatdan o'tish kerak. Saytda ro'yxatdan o'tish sizning shaxsiy hisobingizdan reklamalarni boshqarishga imkon beradi va ularni amal qilish muddati tugagandan keyin faollashtirishga imkon beradi.",
};

const NotificationDialogDetail = ({ goBack }: Iprops) => {
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
        notifContRef.current.clientHeight >= window.innerHeight - 124 &&
          setIsScrollable(true);
        return;
      }
      notifContRef.current.clientHeight >= 604 && setIsScrollable(true);
    }
  }, []);

  return (
    <NotificationDialogDetailStyle
      variants={DIALOG_SLIDE_ANIMATION}
      initial="left_hidden"
      animate="visible"
      exit="right_hidden"
      ref={notifContRef}
    >
      <button className="back_icon" onClick={() => goBack(false)}>
        <AllCommonIcons.ChevronSmallDownIcon />
      </button>
      <motion.div
        className="clipper top_clipper"
        style={{ opacity: topClipper }}
      />
      <div className="container" ref={itemsContRef}>
        <span className="date">
          {moment(data.date).format("DD MMMM, HH:mm")}
        </span>
        <span className="title">{data[`title_${locale}`]}</span>
        <div className="image_cont">
          <Image
            src="/images/notification_image.png"
            layout="fill"
            alt="notification image"
          />
        </div>
        <span className="description">{data[`desctiption_${locale}`]}</span>
        <Button
          text={t("sign_in")}
          onClick={() => console.log("login")}
          options={{
            $width: "100%",
            $backgroundColor: "static_red",
            $textColor: "static_white",
          }}
        />
      </div>
      {isScrollable ? (
        <motion.div className="clipper" style={{ opacity: bottomClipper }} />
      ) : null}
    </NotificationDialogDetailStyle>
  );
};

export default NotificationDialogDetail;
