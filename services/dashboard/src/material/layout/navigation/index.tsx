import React, { Fragment, useState, useEffect, useRef } from "react";
import _ from "lodash-es";
import { Img, ShopingCart, FiIcon } from "component-design-ui";
import { topHead } from "./_sidePanelStyle";
import { useCart } from "../../../contexts/cart";

type Props = {
  active: boolean;
  onShowPushMenu: (text: boolean) => void;
};

const Nav: React.FC<Props> = ({ onShowPushMenu, active }) => {
  const [show, setActive] = useState<boolean>(false);
  const isMount = useRef(false);
  const { cart, removeFromCart } = useCart();
  return (
    <Fragment>
      <div className={topHead}>
        <div className="wrap-container flex-menu">
          <div className="side-one">
            <div className="logo">
              <Img className="svg" src="https://www.telkomsel.com/sites/default/files/mainlogo-2022-rev.png" />
            </div>
          </div>
          <div className="side-two spare-menu">
            <nav>
              <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Contact Us</li>
              </ul>
            </nav>
            <div className="cart">
              <div className="btn-bag" onClick={() => setActive(!show)}>
                <FiIcon.FiShoppingBag /> <span>{cart.items.length}</span>
              </div>
            </div>
            {cart.items.length && show ? (
              <ShopingCart data={cart?.items} onDelete={removeFromCart} onCheckOut={() => console.log("submit")} />
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
