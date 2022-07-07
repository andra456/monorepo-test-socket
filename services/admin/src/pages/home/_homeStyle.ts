import { css } from "emotion";
export const contentWrapper = css`
  .wrap-organitation {
    padding: 30px 0 50px;
  }
  .grid-card {
    padding: 10px;
    animation: fadeIn 1s;

    .box-organitation {
      overflow: hidden;
      border-radius: 10px;
      border: solid 1px #ddd;
      box-shadow: 0 -5px 10px 0 rgba(65, 69, 73, 0.02), 0px 1px 1px 0px rgba(65, 69, 73, 0),
        0px 1px 3px 1px rgba(65, 69, 73, 0.02);
      a {
        display: flex;
        align-items: center;
        padding: 10px;
      }
      .avatar {
        height: 40px;
        width: 40px;
        border: solid 2px #dedede;
        border-radius: 40px;
        margin-right: 10px;
      }
    }
  }
  .content-loader {
    width: 50%;
  }
`;
