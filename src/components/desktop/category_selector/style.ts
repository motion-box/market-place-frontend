import styled from "styled-components";

interface Iprops {
  gradient: string[];
}

const CategorySelectorStyle = styled.div<Iprops>`
  display: grid;
  width: 100%;
  height: fit-content;
  padding: 48px;
  border-radius: 16px;
  gap: 16px;
  background: linear-gradient(
    45deg,
    ${(props) => props.gradient[0]} 0%,
    ${(props) => props.gradient[1]} 100%
  );

  .title_cont {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 36px;
      font-weight: 700;
      color: var(--static_white);
    }

    button {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      gap: 4px;
      transition: 0.5s ease;
      span {
        font-size: 16px;
        color: var(--static_white);
      }
      svg {
        transform: rotate(270deg);
      }
      :active {
        transform: scale(0.95);
      }
    }
  }
  .categories {
    display: grid;
    grid-auto-flow: column;
    gap: 12px;
    grid-auto-columns: 1fr;

    button {
      height: 120px;
      background-color: var(--card_color);
      border-radius: 8px;
      position: relative;
      padding: 12px;
      display: grid;
      grid-auto-rows: 1fr auto;
      gap: 12px;

      .image_cont {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .name {
        font-size: 14px;
        color: var(--text_primary);
        font-weight: 400;
        overflow: hidden;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }
  }
  .bottom_cont {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-template-columns: 1fr auto;
    gap: 24px;

    .filter_cont {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      /* grid-auto-columns: max-content; */
      gap: 12px;
    }

    .show_first_cont {
      display: grid;
      grid-auto-flow: column;
      gap: 12px;
      span {
        font-size: 16px;
        color: var(--static_white);
      }
      button {
        span {
          color: var(--static_white50);
        }
        .active {
          color: var(--static_white);
        }
      }
    }
  }
`;

export default CategorySelectorStyle;
