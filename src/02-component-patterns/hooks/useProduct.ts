import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductsArgs {
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductsArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);

    if (isControlled.current) {
      return onChange!({ counter: value, product });
    }

    setCounter(newValue);
    onChange && onChange({ counter: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
