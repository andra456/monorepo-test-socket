import { css } from "emotion";
import { color } from "component-design-ui/src";
export const sidePanel = css`
  .list-panel {
    display: block;
    width: 100%;
    .list-gallery {
      li {
        margin-bottom: 5px;
        a {
          align-items: center;
          border-radius: 0 24px 24px 0;
          color: #615f5f;
          cursor: pointer;
          display: flex;
          line-height: 20px;
          margin-right: 24px;
          padding: 8px 12px 8px 24px;
          transition: border-radius 0.15s cubic-bezier(0.4, 0, 0.2, 1), margin-left 0.15s cubic-bezier(0.4, 0, 0.2, 1),
            padding 0.15s cubic-bezier(0.4, 0, 0.2, 1), width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
          &:hover {
            background: #f1f3f4;
          }
          &.selected {
            background: rgba(1, 102, 255, 0.13);
            color: #000;
          }
          svg {
            margin-right: 20px;
            fill: #615f5f;
          }
        }
      }
    }
  }
`;

export const topHead = css`
  z-index: 200;
  display: flex;
  background: #fff;
  align-items: center;
  height: 60px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  -webkit-transition: all 400ms ease-in-out;
  -moz-transition: all 400ms ease-in-out;
  -ms-transition: all 400ms ease-in-out;
  -o-transition: all 400ms ease-in-out;
  transition: all 400ms ease-in-out;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${color["n-0"]};
    -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.12);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.12);
    z-index: 202;
  }
  .spare-menu {
    display: flex;
    justify-content: space-between;
  }

  .menu-mobile {
    display: none;
    border: 0px;
    padding: 5px;
    height: 38px;
    width: 38px;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 5px;
  }
  .logo {
    width: 242px;
    display: flex;
    height: 100%;
    align-items: center;
    padding-left: 13px;
    .svg {
      height: 28px;
      width: 101px;
    }
  }
  .cart {
    padding: 0 20px 0 0;
    font-size: 28px;
    color: ${color["n-80"]};

    .btn-bag {
      position: relative;
      span {
        position: absolute;
        font-size: 12px;
        display: block;
        min-width: 20px;
        padding: 3px;
        text-align: center;
        border-radius: 10px;
        top: 0;
        right: -5px;
        color: ${color["n-0"]};
        background: ${color["r-100"]};
      }
    }
  }

  nav {
    display: flex;
    margin: 0;
    padding: 0;

    .selected-pointer {
      display: none;
    }

    ul {
      display: flex;
      align-items: center;
      > li {
        display: block;
        margin-left: 16px;
        color: ${color["n-100"]};

        &.head_nav {
          display: none;
        }
        a {
          text-decoration: none;
          font-size: 16px;
          color: $gray;
          -webkit-transition: all 200ms ease-in-out;
          -moz-transition: all 200ms ease-in-out;
          -ms-transition: all 200ms ease-in-out;
          -o-transition: all 200ms ease-in-out;
          transition: all 200ms ease-in-out;
        }
      }
    }
  }
`;
