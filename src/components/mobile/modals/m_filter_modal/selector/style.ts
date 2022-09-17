import styled from "styled-components";

interface Iprops {
  height: "full" | "fit";
}
const MSelectorStyle = styled.div<Iprops>`
  display: grid;
  grid-auto-rows: max-content;
  margin-left: 16px;
  width: calc(100% + 16px);
  height: ${(p) => (p.height === "full" ? "80vh" : "fit")};
  overflow-y: scroll;
  padding-bottom: 36px;
  /* ::-webkit-scrollbar {
    width: 0px;
    display: none;
  } */

  .item {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto;
    height: 44px;
    align-items: center;
    border-bottom: 1px solid var(--border_color);
    padding-right: 16px;

    span {
      text-align: start;
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
    }
  }
`;

export default MSelectorStyle;
