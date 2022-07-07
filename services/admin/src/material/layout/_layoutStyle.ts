import { css } from "emotion";
export const layout = css`
  .panel-menu {
    align-content: space-between;
    background-color: #fff;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    width: 250px;
    left: 0;
    height: 100%;
    position: absolute;
    top: 60px;
    transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 100;
    flex-direction: column;
    min-height: 600px;
    border-right: solid 1px rgba(0, 0, 0, 0.1);
    box-shadow: 2px 0 6px 0 rgba(0, 0, 0, 0.04);
    .leading-panel {
      margin: 30px 20px 10px;
      padding: 10px 0;
      border-bottom: solid 1px #eee;
    }
  }
  .container {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 10px;
    width: 100%;
  }

  .preloader {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    background: #e8e8e8;
    width: 0%;
    height: 0%;
    z-index: 22222222;
    overflow: hidden;
    opacity: 1;
    -webkit-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
    -ms-transition: all 500ms ease-in-out;
    -o-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
    &.active {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      opacity: 1;
    }
    .logo-center {
      max-width: 200px;
      animation: pulse infinite;
      animation-duration: 500ms;
    }
  }

  .float-content {
    position: absolute;
    height: 100%;
    overflow: hidden;
  }

  .scroll {
    width: calc(100% + 17px);
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 17px;
    box-sizing: content-box;
  }

  .flex-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }
  .wrap-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    width: 100%;

    .side-one {
      width: 254px;
      padding: 10px;
      position: relative;
    }
    .side-two {
      width: calc(100% - 254px);
      padding: 10px;
      position: relative;
    }
  }
  .constractor {
    .panel-menu {
      display: block;
      z-index: 222;
      position: fixed;
    }
  }
  .body-content {
    padding-top: 70px;
    padding-left: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
`;
