import styled from "@emotion/styled";
import { color } from "component-design-ui";
interface IChatComposition {
  MessagesList?: any;
  ButtonSend?: any;
  InputMsg?: any;
  MessageItem?: any;
  Messages?: any;
  ChatContainer?: any;
}

const S: IChatComposition = {};

S.ChatContainer = styled("div")({
  boxShadow: "2px 0 6px 0 rgb(0, 0, 0, .2)",
  position: "fixed",
  borderRadius: "10px 10px 0 0",
  overflow: "hidden",
  right: 0,
  bottom: "0",
  display: "flex",
  flexDirection: "column",
  margin: "16px",
  width: "400px",
  border: `solid 1px ${color["n-50"]}`,

  ".header-chat": {
    background: color["n-0"],
    display: "flex",
    alignItems: "center",
    padding: "10px",
    justifyContent: "space-between",
    ".avatar": {
      display: "flex",
      alignItems: "center",
      svg: {
        marginRight: "10px",
      },
    },
    ".indicator": {
      marginLeft: "10px",
      height: "10px",
      width: "10px",
      display: "block",
      borderRadius: "100px",
      "&.off": {
        background: color["r-100"],
      },
      "&.on": {
        background: color["g-100"],
      },
    },
  },

  ".footer-chat": {
    display: "flex",
    padding: "10px",
    background: color["n-0"],
  },
});
S.Messages = styled("div")({
  display: "block",
  height: "400px",
  padding: "10px",
  overflow: "auto",
  background: color["n-30"],
});

S.InputMsg = styled("textarea")({
  width: "calc(100% - 60px)",
  height: "100px",
  maxHeight: "50px",
  fontSize: "14px",
  padding: "10px 12px",
  border: "none",
  resize: "none",
});
S.ButtonSend = styled("button")({
  fontSize: "16px",
  fontWeight: 600,
  color: "white",
  background: "#31a24c",
  padding: "24px 12px",
  width: "60px",
  border: "none",
});
S.MessagesList = styled("ul")({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  ".message-item": {
    padding: "10px",
    display: "inline-block",
    position: "relative",
    fontSize: "12px",
    minWidth: " 40px",
    height: "auto",
    borderRadius: "15px",
    marginBottom: "10px",

    "&.received": {
      alignSelf: "flex-start",
      marginLeft: "20px",
      backgroundColor: color["n-0"],
      span: {
        content: "none",
        position: "absolute",
        width: 0,
        height: 0,
        left: "-12px",
        right: "auto",
        top: "0px",
        bottom: "auto",
        border: "14px solid",
        borderColor: `${color["n-0"]} transparent transparent transparent`,
      },
    },
    "&.send": {
      alignSelf: "flex-end",
      marginRight: "20px",
      backgroundColor: color["g-200"],
      color: color["n-0"],
      span: {
        position: "absolute",
        width: 0,
        height: 0,
        right: "-12px",
        bottom: "0px",
        border: "12px solid",
        borderColor: `transparent  transparent ${color["g-200"]} transparent`,
      },
    },
  },
});

export default S;
