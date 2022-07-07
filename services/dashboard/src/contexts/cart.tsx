import React, { useEffect, useCallback, useState, useId } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useAppContext } from "./appContext";
import {
  atom,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from "recoil";

const initialState = {
  isCartOpen: false,
  items: [],
};
interface ICartProps {
  isCartOpen: boolean;
  items: never[];
}
export const openChartAtoms = atom({
  key: "openChart",
  default: initialState,
});
export const categoriesAtoms = atom({
  key: "categoriesProduct",
  default: [],
});
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "TOGGLE_CART_POPUP":
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case "ADD_TO_CART":
      const id = action.payload.cartItem.id;
      const list = state;
      const isOld = list.items.some(
        (item: any) => Number(item.id) === Number(id)
      );
      const items = list.items.filter(
        (item: any) => Number(item.id) !== Number(id)
      );
      const current = list.items.find(
        (item: any) => Number(item.id) === Number(id)
      );

      let cartItems = null;
      if (isOld) {
        cartItems = [{ ...current, quantity: current.quantity + 1 }, ...items];
      } else {
        cartItems = [...state.items];
        cartItems.unshift(action.payload.cartItem);
      }
      return {
        ...state,
        items: cartItems,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (item: any) => Number(item.id) !== Number(action.payload.cartItemId)
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        ...initialState,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const useCart = () => {
  const setNewCart = useSetRecoilState(openChartAtoms);
  const cart = useRecoilValue(openChartAtoms);
  const { getItem, removeItem, setItem } = useLocalStorage();
  //const [persistedCartItems, setPersistedCartItems] = useLocalStorage("cartItems", []);
  const persistedCartState = {
    isCartOpen: false,
    items: getItem("cartItems", []) || [],
  };

  const [state, setLatestCart] = useState<ICartProps>(persistedCartState);
  const [categories, setCategories] = useRecoilState(categoriesAtoms);

  const dispatch = async (req: any) => {
    const persist = await getItem("cartItems", []);
    const prevState = cart.items.length > 0 ? cart.items : persist;

    const reduce = await reducer({ ...cart, items: persist }, req);

    setLatestCart(reduce);
    setNewCart(reduce);
    setItem("cartItems", reduce.items);
  };
  //const [state, dispatch] = useReducer(reducer, persistedCartState);
  const { setState } = useAppContext();
  const toggleCartPopup = () => {
    dispatch({
      type: "TOGGLE_CART_POPUP",
    });
  };

  const addToCart = (cartItem: any) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        cartItem: cartItem,
      },
    });
  };

  const removeFromCart = useCallback((cartItemId: any) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        cartItemId: cartItemId,
      },
    });
  }, []);

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  useEffect(() => {
    setNewCart({ ...cart, items: getItem("cartItems", []) });
  }, []);

  return {
    cartState: { ...state },
    categories,
    setCategories,
    cart,
    addToCart,
    clearCart,
    removeFromCart,
    toggleCartPopup,
  };
};

export default useCart;
