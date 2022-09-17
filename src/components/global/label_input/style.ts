import styled from "styled-components";

interface Iprops {
  icon: boolean;
  disabled?: true;
  error?: boolean;
}
const LabelInputStyle = styled.div<Iprops>`
  display: grid;
  position: relative;
  gap: 4px;

  label {
    font-size: 16px;
    font-weight: 400;
    color: var(--text_primary);
  }

  input {
    pointer-events: ${(props) => (props.disabled ? "none" : "initial")};
    background-color: ${(props) =>
      props.disabled ? "var(--border_color)" : "var(--card_color)"};
    height: 48px;
    border-radius: 8px;
    border: 1px solid
      ${(props) => (props.error ? "var(--static_red)" : "var(--border_color)")};
    position: relative;
    padding: ${(props) => (props.icon ? "0 46px 0 16px" : "0 16px")};
    font-size: 16px;
    color: ${(props) =>
      props.error ? "var(--static_red)" : "var(--text_primary)"};

    ::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_secondary);
    }
  }

  .icon_cont {
    user-select: none;
    pointer-events: none;
    position: absolute;
    right: 16px;
    top: 38px;
  }

  .error_dialog {
    display: grid;
    align-items: center;
    z-index: 1;
    position: absolute;
    width: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%) !important;
    top: 68px;
    height: 50px;
    background-color: var(--card_color);
    border-radius: 8px;
    padding: 0 16px;
    span {
      width: 100%;
      font-size: 16px;
      font-weight: 500;
      color: var(--text_primary);

      overflow: hidden;
      display: -webkit-box;
      line-clamp: 1;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
  }

  @media only screen and (max-width: 500px) {
    label {
      font-size: 14px;
    }
  }
`;

export default LabelInputStyle;
