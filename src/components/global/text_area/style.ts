import styled, { css } from "styled-components";

interface Iprops {
  hasBorder: boolean;
}

const TextAreaStyle = styled.div<Iprops>`
  display: grid;
  gap: 4px;
  label {
    font-size: 16px;
    font-weight: 400;
    color: var(--text_primary);
  }
  textarea {
    height: 120px;
    background-color: var(--card_color);
    ${(props) =>
      props.hasBorder
        ? css`
            border: 1px solid var(--border_color);
          `
        : css`
            border: none;
          `}
    border-radius: 8px;
    padding: 16px 20px;
    resize: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    color: var(--text_primary);
    ::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_secondary);
    }
  }

  @media only screen and (max-width: 500px) {
    label {
      font-size: 14px;
    }
  }
`;

export default TextAreaStyle;
