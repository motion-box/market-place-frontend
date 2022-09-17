import styled from "styled-components";

interface Iprops {
  height: number;
}

const PagePlaceholderStyle = styled.div<Iprops>`
  display: grid;
  width: 100%;
  height: calc(100vh - ${(p) => `${p.height}px`});
  justify-items: center;
  align-content: center;
  grid-auto-rows: max-content;
  gap: 12px;
  padding: 0 16px;
  .placeholder_title {
    margin-top: 12px;
    font-size: 24px;
    font-weight: 700;
    color: var(--text_primary);
    text-align: center;
  }
  .placeholder_description {
    font-size: 16px;
    font-weight: 400;
    color: var(--text_primary);
    text-align: center;
  }
`;

export default PagePlaceholderStyle;
