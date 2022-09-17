import styled from "styled-components";

const MAnnouncementPageStyle = styled.div`
  display: grid;
  width: 100%;

  .container {
    padding-top: 56px;
    width: 100%;
    background-color: var(--card_color);
  }

  .buy_button_cont {
    z-index: 100;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0 8px 12px;
  }
`;

export default MAnnouncementPageStyle;
