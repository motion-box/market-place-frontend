import React from "react";
import FilterMobileStyle from "./style";
import { useTranslation } from "next-i18next";
import ScrollContainer from "react-indiana-drag-scroll";
import NiceModal from "@ebay/nice-modal-react";
import { useAppSelector } from "../../../redux/store";
import { ChevronSmallDownIcon } from "../../../resources/icons/CommonIcons";
import { FilterModel } from "../../../resources/testCategories";
import MFilterModal, { MFilterModalProps } from "../modals/m_filter_modal";

interface Iprops {
  data?: FilterModel[];
}

const FilterMobile = (props: Iprops) => {
  const { data } = props;
  const { t } = useTranslation();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);

  const openBottomSheet = (item: FilterModel) => {
    NiceModal.show(MFilterModal, {
      data: item,
    } as MFilterModalProps);
  };

  const mapItems = data?.map((item) => (
    <button
      key={item.id}
      className="item"
      onClick={() => openBottomSheet(item)}
    >
      <span>{item[`name_${locale}`]}</span>
      <ChevronSmallDownIcon width="12" height="12" color="text_secondary" />
    </button>
  ));

  return (
    <FilterMobileStyle>
      <ScrollContainer className="scroller">{mapItems}</ScrollContainer>
    </FilterMobileStyle>
  );
};

export default FilterMobile;
