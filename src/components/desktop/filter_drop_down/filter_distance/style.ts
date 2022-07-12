import styled from "styled-components";

const FilterDistanceStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  width: fit-content;

  .inut_cont {
    height: 48px;
    border: 1px solid var(--border_color);
    padding: 0 8px 0 16px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 10px;

    span {
      font-size: 16px;
      font-weight: 500;
      color: var(--text_primary);
    }
    input {
      width: 100%;
      height: 100%;
      color: var(--text_primary);

      ::placeholder {
        color: var(--text_secondary);
      }
    }
  }
`;

export default FilterDistanceStyle;
