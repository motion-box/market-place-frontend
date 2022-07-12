import styled from "styled-components";

const MessageItemStyle = styled.button`
  display: grid;
  width: 100%;
  gap: 16px;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: "image content author";
  background-color: var(--card_color);
  padding: 12px 20px;
  border-radius: 8px;
  /* cursor: pointer; */

  .image_wrapper {
    grid-area: image;
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 4px;
    overflow: hidden;
  }
  .content_cont {
    grid-area: content;
    display: grid;
    gap: 5px;
    text-align: start;
    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
      overflow: hidden;
      display: -webkit-box;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
    .description {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
      overflow: hidden;
      display: -webkit-box;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
    .status {
      color: var(--static_red);
    }
  }
  .author_cont {
    grid-area: author;
    display: grid;
    grid-auto-flow: column;
    gap: 40px;
    height: 100%;
    align-items: center;

    .author,
    .date {
      font-size: 16px;
      font-weight: 400;
      color: var(--select_color);
    }
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: auto 1fr;
    grid-template-areas:
      "image author"
      "image content";
    gap: 5px 16px;
    .image_wrapper {
      width: 48px;
      height: 48px;
    }
    .content_cont {
      .title {
        font-size: 16px;
      }
      .description {
        font-size: 13px;
      }
    }
    .author_cont {
      justify-content: space-between;

      .author,
      .date {
        font-size: 14px;
      }
    }
  }
`;

export default MessageItemStyle;
