import styled from "styled-components";

const FilterSelectorStyle = styled.div`
  display: grid;
  /* height: 400px; */
  max-height: 400px;
  position: relative;
  gap: 16px;

  .container {
    display: grid;
    width: 100%;
    position: relative;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0px;
      display: none;
    }
    button {
      display: grid;
      grid-auto-flow: column;
      width: 100%;
      height: fit-content;
      padding: 12px 0px;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--border_color);

      span {
        height: 24px;
        font-size: 16px;
        font-weight: 400;
        color: var(--text_primary);
      }
      div {
        height: 24px;
      }
    }
  }

  .selector_titler {
    display: grid;
    span {
      font-size: 16px;
      color: var(--text_primary);
    }
  }

  .clipper {
    pointer-events: none;
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0px;
    z-index: 100;
    transition: 0.1s ease;
    z-index: 100;
    background: linear-gradient(
      180deg,
      var(--card_gradient_0) 0%,
      var(--card_gradient_1) 90%
    );
  }
  .top_clipper {
    top: 92px;
    transform: rotate(180deg);
  }
`;

export default FilterSelectorStyle;
