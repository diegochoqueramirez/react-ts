import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/interfaces";
import { products } from "../data/products";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onChangeProduct = ({
    counter,
    product,
  }: {
    counter: number;
    product: Product;
  }) => {
    console.log({ counter });
    setShoppingCart((oldShopping) => {
      if (counter === 0) {
        const { [product.id]: toDelete, ...rest } = oldShopping;
        return rest;
      }
      return {
        ...oldShopping,
        [product.id]: { ...product, counter },
      };
    });
  };

  return {
    shoppingCart,
    onChangeProduct,
    products,
  };
};
