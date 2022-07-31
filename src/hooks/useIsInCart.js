import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context";

const useIsInCart = (id) => {
  const [items] = useContext(CartContext);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setAdded(items.some((item) => item.id === id));
  }, [added, items, id]);

  return [added];
};

export default useIsInCart;
