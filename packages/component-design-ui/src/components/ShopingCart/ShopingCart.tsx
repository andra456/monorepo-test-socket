import React, { FC } from "react";
import { shoppingCart } from "./_shopingStyle";
import { Row } from "../Grid";
import { Img } from "../Card";
import { Button } from "../Button";
import { MdOutlineDelete } from "react-icons/md";

interface IListCart {
  title: string;
  quality: string | number;
  price: string | number;
}
interface IProps {
  data: IListCart[];
  onDelete: (e: any) => void;
  onCheckOut: () => void;
}

export const ShopingCart = ({ data, onCheckOut, onDelete }: IProps): JSX.Element => {
  return (
    <div className={shoppingCart}>
      <ul className="shopping-cart-items">
        {data.map((item: any, i) => (
          <li key={i} className="clearfix">
            <Img src={item.image} className="img" />
            <div className="meta">
              <span className="item-name">{item.title.substr(0, 28)} ...</span>
              <div className="detail">
                <div className="item-quantity">Quantity : {item.quantity} </div>
                <span className="item-price">${item.price}</span>
              </div>
            </div>
            <div className="delete" onClick={() => onDelete(item.id)}>
              <MdOutlineDelete />
            </div>
          </li>
        ))}
      </ul>
      <div className="shopping-cart-footer">
        <span className="checkout">
          <Button size="lg" onClick={onCheckOut}>
            Checkout
          </Button>
        </span>
        <div className="shopping-cart-total">
          <span className="lighter-text">Total </span>
          <span className="main-color-text">$2,229.97</span>
        </div>
      </div>
    </div>
  );
};
