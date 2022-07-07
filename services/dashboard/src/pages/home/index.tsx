import React, { useState } from "react";
import ProductList from "./productList";
import ChatRoom from "../../material/ChatRoom/ChatRoom";
import { BsIcon } from "component-design-ui";
import { toggleChat } from "./_homeStyle";

function Intro() {
  const [show, setshow] = useState<boolean>(false);
  return (
    <section className="showcase">
      <div className="bg-container">
        {!show && (
          <div className={toggleChat} onClick={() => setshow(!show)}>
            <BsIcon.BsChatFill /> Butuh Bantuan
          </div>
        )}
        <ProductList />
        {show && <ChatRoom onClose={() => setshow(!show)} />}
      </div>
    </section>
  );
}

export default Intro;
