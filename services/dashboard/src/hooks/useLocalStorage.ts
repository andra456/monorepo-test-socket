import { useCallback } from "react";
import CryptoJS, { AES, enc } from "crypto-js";

const KEY = "SALT_34";
const useLocalStorage = () => {
  const setItem = (key: string, value: object | string): void => {
    const data = typeof value === "object" ? JSON.stringify(value) : value;
    const encodeData = AES.encrypt(data, KEY).toString();
    localStorage.setItem(key, encodeData);
  };

  const getItem = useCallback((key: string, defaultData: any): any => {
    const data: any = localStorage.getItem(key);
    if (data) {
      const decodeData = AES.decrypt(data, KEY).toString(enc.Utf8);
      try {
        return JSON.parse(decodeData);
      } catch {
        return decodeData || defaultData;
      }
    }
    return defaultData;
  }, []);

  const removeItem = useCallback((key: string): void => {
    localStorage.removeItem(key);
  }, []);

  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default useLocalStorage;
