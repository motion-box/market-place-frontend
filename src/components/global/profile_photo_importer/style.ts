import styled from "styled-components";

const ProfilePhotoImporterStyle = styled.div`
  display: grid;
  width: 168px;
  height: 168px;
  .image_preview {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 100%;
    background-color: var(--border_color);
    display: grid;
    justify-items: center;
    align-items: center;

    .image_cont {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      overflow: hidden;
    }

    .delete_btn {
      position: absolute;
      right: 8px;
      top: 8px;
      z-index: 1;
      width: 24px;
      height: 24px;
      border-radius: 12px;
      background-color: var(--card_color);
      display: grid;
      justify-content: center;
      align-items: center;
    }
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    cursor: pointer;
  }
  input[type="file"]::file-selector-button {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  @media only screen and (max-width: 500px) {
    width: 72px;
    height: 72px;

    .image_preview {
      .delete_btn {
        right: 0px;
        top: 0px;
      }
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
export default ProfilePhotoImporterStyle;
