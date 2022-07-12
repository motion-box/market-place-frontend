import styled from "styled-components";

const ProductCardOptionsStyle = styled.div`
  display: grid;
  position: relative;

  .option_button {
    width: 40px;
    height: 40px;
    display: grid;
    justify-content: center;
    align-items: center;
  }
  .dialog_cont {
    z-index: 10;
    position: absolute;
    width: 376px;
    padding: 24px;
    background-color: var(--card_color);
    border-radius: 12px;
    right: -5px;
    top: -5px;
    display: grid;
    gap: 24px;

    .close_btn {
      position: absolute;
      right: 8px;
      top: 8px;
    }

    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
    }

    .options_button_cont {
      display: grid;
      gap: 8px;
    }
  }
`;

export default ProductCardOptionsStyle;
