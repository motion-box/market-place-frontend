import React, { useState } from "react";
import MNotifcationModalStyle from "./style";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Modal from "../../../global/modal";
import { useTranslation } from "next-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { BOTTOM_SHEET_SLIDE_ANIMATION } from "../../../../resources/constants/animations";
import Button from "../../../global/button";
import Image from "next/image";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import moment from "moment";
import { useAppSelector } from "../../../../redux/store";

export interface PriceOfferModalProps {}

const data = {
  date: "2022-10-28T12:30",
  title_ru:
    "Создавайте новый аккаунт в Молле и получите доступ ко всем преимуществам нашего сервиса",
  title_uz:
    "Савдо марказида янги ҳисоб яратинг ва хизматимизнинг барча афзалликларидан фойдаланинг",
  title_oz:
    "Savdo markazid yangi hisob yarating va xizmatimizning barcha imkoniyatlaridan foidalaning",
  description_ru:
    "Размещение и продвижение объявлений, а также покупка товаров с бесконтактной доставкой ждут вас! Для подачи объявления регистрация обязательна. Регистрация на сайте позволяет управлять объявлениями из личного кабинета и даёт возможность активировать их по истечении срока их действия Размещение и продвижение объявлений, а также покупка товаров с бесконтактной доставкой ждут вас! Для подачи объявления регистрация обязательна. Регистрация на сайте позволяет управлять объявлениями из личного кабинета и даёт возможность активировать их по истечении срока их действия",
  description_uz:
    "Рекламаларни жойлаштириш ва тарғиб қилиш, шунингдек, контакциз етказиб бериш билан товарларни сотиб олиш сизни кутмоқда! Рўйхатдан Еълонни тақдим қилиш талаб қилинади. Сайтда рўйхатдан ўтиш сизнинг шахсий ҳисобингиздан рекламаларни бошқаришга имкон беради ва уларнинг амал қилиш муддати тугагандан сўнг уларни фаоллаштириш имкониятини беради, рекламаларни жойлаштириш ва реклама қилиш, шунингдек контакциз етказиб бериш билан товарларни сотиб олиш сизни кутмоқда! Рўйхатдан Еълонни тақдим қилиш талаб қилинади. Сайтда рўйхатдан ўтиш сизнинг шахсий ҳисобингиздаги рекламаларни бошқаришга имкон беради ва уларнинг амал қилиш муддати тугагандан сўнг уларни фаоллаштириш имкониятини беради",
  description_oz:
    "E'lonlarni joylashtirish va targ'ib qilish, shuningdek, kontaktsiz yetkazib berish orqali tovarlarni xarid qilish sizni kutmoqda! E'lonni joylashtirish uchun ro'yxatdan o'tish kerak. Saytda ro'yxatdan o'tish shaxsiy kabinetingizdan e'lonlarni boshqarish imkonini beradi va ularni amal qilish muddati tugagandan keyin faollashtirish imkonini beradi.Sizni e'lonlarni joylashtirish va targ'ib qilish, shuningdek, kontaktsiz yetkazib berish orqali tovarlarni xarid qilish kutmoqda! E'lonni joylashtirish uchun ro'yxatdan o'tish kerak. Saytda ro'yxatdan o'tish sizning shaxsiy hisobingizdan reklamalarni boshqarishga imkon beradi va ularni amal qilish muddati tugagandan keyin faollashtirishga imkon beradi.",
};

const MNotifcationModal = NiceModal.create<PriceOfferModalProps>((props) => {
  const modal = useModal();
  const { t } = useTranslation();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [isModal, setModal] = useState(true);

  const closeModal = () => {
    setModal(false);
    setTimeout(() => {
      modal.remove();
    }, 400);
  };

  return (
    <Modal isModal={modal.visible}>
      <AnimatePresence>
        {isModal && (
          <MNotifcationModalStyle>
            <motion.div
              className="container"
              variants={BOTTOM_SHEET_SLIDE_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
            >
              <div className="main_cont">
                <button className="close_btn" onClick={closeModal}>
                  <CloseIcon color="text_primary" />
                </button>
                <div className="image_cont">
                  <Image
                    src="/images/notification_image.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <span className="date">
                  {moment(data.date).format("DD MMMM, HH:mm")}
                </span>
                <div className="text_cont">
                  <h1 className="title">{data[`title_${locale}`]}</h1>
                  <p className="description">{data[`description_${locale}`]}</p>
                </div>
                <div className="button_cont">
                  <Button
                    text={t("login")}
                    onClick={closeModal}
                    options={{
                      $width: "100%",
                      $backgroundColor: "static_red",
                      $textColor: "static_white",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </MNotifcationModalStyle>
        )}
      </AnimatePresence>
    </Modal>
  );
});

export default MNotifcationModal;
