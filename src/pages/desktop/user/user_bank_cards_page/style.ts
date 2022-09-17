import styled from "styled-components";

const UserBankCardPage = styled.div`
  display: grid;
  width: 100%;
  background-color: var(--card_color);
  padding: 116px 0 0;

  .cards_cont {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;

    .add_btn {
      width: 100%;
      aspect-ratio: 1 / 0.6;
      border: 1px dashed var(--border_color);
      border-radius: 8px;
      display: grid;
      justify-items: center;
      align-content: center;
      gap: 8px;
      transition: 0.3s;
      span {
        font-size: 18px;
        font-weight: 400;
        color: var(--select_color);
      }

      :hover {
        background-color: var(--border_color);
      }
    }
  }
`;

export default UserBankCardPage;
