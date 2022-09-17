import styled from "styled-components";

const SellerCardStyle = styled.div`
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: center;
  padding: 12px 20px;
  background-color: var(--card_color);
  border-radius: 8px;
  position: relative;

  .image_cont {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 100px;
    overflow: hidden;
  }

  .content_cont {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    .name_cont {
      display: grid;
      gap: 5px;
      .name {
        font-size: 18px;
        font-weight: 500;
        color: var(--text_primary);
      }
    }

    .online {
      font-size: 16px;
      font-weight: 400;
      color: var(--select_color);
    }
    .online_active {
      color: var(--static_green);
    }
  }
  .option_button {
    width: 36px;
    height: 36px;
    display: grid;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .card_button {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .dialog_cont {
    position: absolute;
    z-index: 90;
    width: 376px;
    padding: 24px;
    right: 10px;
    top: 15px;
    background-color: var(--card_color);
    border-radius: 12px;
    display: grid;
    gap: 24px;
    .close_button {
      position: absolute;
      right: 8px;
      top: 8px;
    }
    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
    }
  }

  @media only screen and (max-width: 1000px) {
    padding: 12px 8px 12px;
    gap: 12px;
    .image_cont {
      width: 48px;
      height: 48px;
    }

    .content_cont {
      grid-auto-flow: row;
      gap: 5px;
      .name_cont {
        gap: 0;
        .name {
          font-size: 16px;
        }
      }
      .online {
        font-size: 12px;
      }
    }

    .option_button {
      svg {
      }
    }
  }
`;

export default SellerCardStyle;
