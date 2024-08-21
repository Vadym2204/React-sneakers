import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favoriteData, setFavoriteData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get("https://c399ae77679ed23f.mokky.dev/items").then((res) => {
      setItems(res.data);
    });
    axios.get("https://c399ae77679ed23f.mokky.dev/cart").then((res) => {
      setCartItems(res.data);
    });
    axios.get("https://c399ae77679ed23f.mokky.dev/favorites").then((res) => {
      setFavoriteData(res.data);
    });
  }, []);

  const addToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://c399ae77679ed23f.mokky.dev/cart/${obj.id}`)
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
         axios.post(
          "https://c399ae77679ed23f.mokky.dev/cart",
          obj
        );
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      console.error("Помилка при додаванні елемента в корзину:", error);
    }
  };

  const deleteFromCart = (id) => {
    try {
      axios.delete(`https://c399ae77679ed23f.mokky.dev/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Помилка при видаленні елемента з корзини:", error);
    }
  };

  const addToFavorites = async (obj) => {
    try {
      if (favoriteData.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://c399ae77679ed23f.mokky.dev/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post(
          "https://c399ae77679ed23f.mokky.dev/favorites",
          obj
        );
        setFavoriteData((prev) => [...prev, data]);
      }
    } catch {
      console.error("помилка при добавлении елемента в закладки:", error);
    }
  };
  const contextValue = {
    addToFavorites,
    favoriteData,
    setFavoriteData,
    searchValue,
    setSearchValue,
    items,
    setItems,
    cartItems,
    setCartItems,
    cartOpened,
    setCartOpened,
    addToCart,
    deleteFromCart,
    addToFavorites,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
