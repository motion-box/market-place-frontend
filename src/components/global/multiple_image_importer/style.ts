import styled from "styled-components";

const MultipleImageImporterStyle = styled.div`
  display: grid;
  gap: 12px;

  .title {
    font-size: 16px;
    font-weight: 400;
    color: var(--text_primary);
  }

  .cards_cont {
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    grid-auto-columns: max-content;
  }

  .item {
    width: 96px;
    height: 96px;
    border-radius: 8px;
    background-color: var(--card_color);
    position: relative;
    z-index: 1;

    .delete_btn {
      position: absolute;
      right: -4px;
      top: -4px;
      width: 24px;
      height: 24px;
      border-radius: 24px;
      background-color: var(--card_color);
      cursor: pointer;
      z-index: 1;
      display: grid;
      justify-content: center;
      align-items: center;
    }

    .add_btn {
      display: grid;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }

    .image_cont {
      overflow: hidden;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      position: relative;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media only screen and (max-width: 500px) {
    .title {
      font-size: 14px;
      padding: 0 16px;
    }
    .cards_cont {
      width: 100%;
      overflow-x: scroll;
      grid-auto-flow: column;
      padding: 4px 16px;
      ::-webkit-scrollbar {
        width: 0px;
        display: none;
      }
    }
  }
`;

export default MultipleImageImporterStyle;
