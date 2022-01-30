import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
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
    <img className={styles.productImg} src={showImage} alt="imagen de cafe" />
  );
};
