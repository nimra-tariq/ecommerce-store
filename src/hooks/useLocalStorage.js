import { useState, useEffect } from "react";

const useLocalStorage = () => {
  const [items, setItems] = useState(() => {
    const items = localStorage.getItem("items");
    return items ? JSON.parse(items) : [];
  });

  const addToCart = (id) => {
    setItems((items) => [...items, { id, quantity: 1 }]);
    console.log(items, "added to cart");
  };

  const incrementItem = (id) => {
    setItems(
      items?.map((item) =>
        parseInt(item.id) === parseInt(id)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementItem = (id) => {
    setItems(
      items?.map((item) => {
        if (parseInt(item.quantity) === 1)
          return parseInt(item.id) === parseInt(id)
            ? { ...item, quantity: item.quantity }
            : item;
        else
          return parseInt(item.id) === parseInt(id)
            ? { ...item, quantity: item.quantity - 1 }
            : item;
      })
    );
  };

  const removeItem = (id) => {
    setItems(items?.filter((item) => parseInt(item.id) !== parseInt(id)));
  };

  useEffect(() => {
    if (items) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  return [items, setItems, addToCart, incrementItem, decrementItem, removeItem];
};

export default useLocalStorage;
