import { css } from "emotion";
import { color } from "component-design-ui/src";

export const toggleChat = css`
  display: flex;
  align-items: center;
  background: ${color["r-100"]};
  position: fixed;
  color: ${color["n-0"]};
  z-index: 2222;
  padding: 10px;
  border: solid 1px ${color["r-200"]};
  border-radius: 5px;
  box-shadow: 2px 0 6px 0 rgb(0, 0, 0, 0.2);
  cursor: pointer;
  right: 33px;
  bottom: 20px;
  svg {
    margin-right: 10px;
  }
`;
const wrapper = css`
  display: block;
  padding: 10px 10px !important;

  .card-body {
    padding: 10px 10px 10px;
    h4 {
      display: block;
      min-height: 50px;
      line-height: 1.5;
      font-size: 16px;
      font-family: "Quicksand";
      font-weight: 600;
      margin-bottom: 10px;
      padding-bottom: 10px;
      color: ${color["n-200"]};
    }
    h3 {
      padding: 0 0 10px;
      color: ${color["r-100"]};
    }
    p {
      color: ${color["n-100"]};
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 1.5;
      min-height: 100px;
    }

    .view-btn a {
      padding: 5px 15px;
      border: 1.5px solid #007bff;
      border-radius: 3px;
      text-decoration: none;
      color: #007bff;
    }

    .btn-group {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .btn {
        padding: 5px 15px;
        color: #fff;
        border-radius: 3px;
        margin-left: -2px;
      }
      a {
        margin: 0 10px;
        text-decoration: none;
        color: #000;
      }
    }
  }
`;

export default wrapper;
