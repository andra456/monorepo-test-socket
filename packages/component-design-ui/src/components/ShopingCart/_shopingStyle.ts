import { css } from "emotion";
import { color } from "../styles";

export const shoppingCart = css`
    margin: 40px 0 0;
    float: right;
    background: ${color["n-0"]};
    width: 360px;
    position: absolute;
    border-radius: 3px;
    padding: 0px 0 0;
    border: solid 2px ${color["r-50"]};
    right: 31px;

    > div {
        padding-left: 20px;
        padding-right : 20px
    }
    
    .checkout {
        padding: 20px 0;
        button {
            padding: 10px;
        }
    }

    .shopping-cart-footer {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid ${color["n-30"]};
      padding-bottom: 15px;
      align-items : center;
      .shopping-cart-total {
        display: flex;
        align-items : center;
        .lighter-text {
            color: ${color["n-100"]};
            margin-right : 10px
        }
        .main-color-text {}
      }
    }

    .shopping-cart-items {
      padding-top: 20px;
      overflow:hidden;
      .detail {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }
      .clearfix {
            display:flex;
            align-items: center;
            .meta {
                width: 264px;
            }
        }
      li {
        border-bottom: solid 1px ${color["n-30"]};
        padding : 10px 20px;
        position : relative;
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        margin-left :0px;
        
        .delete {
            cursor: pointer;
            display: flex;
            height: 100%;
            background: ${color["r-50"]};
            color: ${color["n-0"]};
            position: absolute;
            right: -70px;
            width: 70px;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            &:hover {
                background: ${color["r-100"]};
            }
        }
        &:hover {
            margin-left :-70px;
            .delete {
                right: 0px;
            }

        }
      }

      .img {
        width: 50px;
        height: 67px;
        margin-right: 12px;
        background-size: 87%;
        border: solid 1px ${color["n-30"]};
      }

      .item-name {
        display: block;
        font-size: 16px;
        font-family: "Quicksand";
        white-space: nowrap;
      }

      .item-price {
        color: ${color["n-100"]};
        font-size: 14px;
        align-items: center;
        display: block;
        line-height: normal;
        height: 18px;
      }

      .item-quantity {
        display : inline-block;
        background : ${color["r-25"]};
        color: ${color["r-100"]};
        padding : 5px 20px;
        font-size: 14px;
      }
    }
  }

  &&:after {
    bottom: 100%;
    
    border: solid transparent;
    content: " ";
    right : 0;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: ${color["r-100"]};
    border-width: 8px;
    margin-left: -8px;
  }



`;
