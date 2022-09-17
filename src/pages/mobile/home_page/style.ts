import styled from "styled-components";

const MHomePageStyle = styled.div`
  display: grid;
  width: 100%;
  padding-top: 64px;
  padding-bottom: 90px;
  overflow: hidden;
  gap: 30px;

  .top_parent_container {
    display: grid;
    grid-template-areas:
      "stories"
      "search"
      "news";
    gap: 12px;
    padding: 0 16px;

    .stories_area {
      width: calc(100% + 32px);
      margin-left: -16px;
      grid-area: stories;
    }
    .search_area {
      grid-area: search;
    }
    .news_area {
      grid-area: news;
    }
  }

  .padding_wrapper {
    padding: 0 16px;
  }

  @media only screen and (min-width: 501px) {
    .top_parent_container {
      padding: 0 16px;
      grid-template-areas:
        "stories news"
        "search search";

      .stories_area {
        width: 100%;
        margin-left: 0;
      }
    }
  }
`;

export default MHomePageStyle;
