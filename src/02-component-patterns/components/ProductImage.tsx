import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  let showImage = "";
  if (img) {
    showImage = img;
  } else if (product.img) {
    showImage = product.img;
  } else {
    showImage = noImage;
  }

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={showImage}
      alt="imagen de cafe"
    />
  );
};
