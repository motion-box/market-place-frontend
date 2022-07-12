import styled from "styled-components";

const FilterLocationStyle = styled.div`
  display: grid;
  gap: 10px;

  input {
    height: 48px;
    border: 1px solid var(--border_color);
    border-radius: 8px;
    padding: 0 16px;
    color: var(--text_primary);
    ::placeholder {
      color: var(--text_secondary);
    }
  }

  .buttons_cont {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4px;
    button {
      height: 36px;
      border: 1px solid var(--border_color);
      border-radius: 8px;
      padding: 0 12px;
      transition: 0.5s ease;

      span {
        font-size: 14px;
        color: var(--select_color);
        transition: 0.5s ease;
      }

      :active {
        transform: scale(0.95);
      }
    }
    .active {
      background-color: var(--select_color);
      border: 1px solid var(--select_color);

      span {
        color: var(--card_color);
      }
    }
  }
`;

export default FilterLocationStyle;
