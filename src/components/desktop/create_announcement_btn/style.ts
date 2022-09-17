import styled from "styled-components";
const CreateAnnouncementBtnStyle = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  height: 48px;
  gap: 8px;
  align-items: center;
  padding: 0 12px;
  border-radius: 12px;
  transition: 0.2s ease;
  cursor: pointer;

  :hover {
    background-color: var(--bg_color);
  }

  span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: var(--text_primary);
  }
`;

export default CreateAnnouncementBtnStyle;
