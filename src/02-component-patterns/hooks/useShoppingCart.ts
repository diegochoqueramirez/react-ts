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
    setShoppingCart((oldShopping) => {
      const productInCart: ProductInCart = oldShopping[product.id] || {
        ...product,
        counter: 0,
      };

      if (Math.max(productInCart.counter + counter, 0) > 0) {
        productInCart.counter += counter;
        return { ...oldShopping, [product.id]: productInCart };
      }

      const { [product.id]: toDelete, ...rest } = oldShopping;
      return rest;
      // if (counter === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShopping;
      //   return rest;
      // }
      // return {
      //   ...oldShopping,
      //   [product.id]: { ...product, counter },
      // };
    });
  };

  return {
    shoppingCart,
    onChangeProduct,
    products,
  };
};
