import React, { useId, useState, useEffect } from "react";
import { cx } from "emotion";
import { BsIcon, AiIcon } from "component-design-ui";
import S from "./_ChatRoomStyle";
import useSocket from "../../hooks/useSocket";

interface IPropsChat {
  onClose: () => void;
}
const ChatRoom = ({ onClose }: IPropsChat) => {
  const roomId = "666";
  const { messages, sendMessage, setConnect, socket } = useSocket(roomId);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event: any) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  useEffect(() => {
    setConnect(true);

    return () => {
      setConnect(false);
    };
  }, []);

  return (
    <>
      <S.ChatContainer>
        <div className="header-chat">
          <div className="avatar">
            <BsIcon.BsPersonFill /> <span>Admin</span>
            <span
              className={cx("indicator", socket.connected ? "on" : "off")}
            ></span>
          </div>
          <span onClick={onClose}>
            <AiIcon.AiOutlineClose />
          </span>
        </div>
        <S.Messages>
          <S.MessagesList>
            {messages.map((message: any, i) => (
              <li
                key={i}
                className={cx(
                  "message-item",
                  message.ownedByCurrentUser ? "send" : "received"
                )}
              >
                <span className={"icon"}></span>
                <p>{message.body}</p>
              </li>
            ))}
          </S.MessagesList>
        </S.Messages>
        <div className="footer-chat">
          <S.InputMsg
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Write message..."
            className="new-message-input-field"
          />
          <S.ButtonSend
            onClick={handleSendMessage}
            className="send-message-button"
          >
            Send
          </S.ButtonSend>
        </div>
      </S.ChatContainer>
    </>
  );
};

export default ChatRoom;
