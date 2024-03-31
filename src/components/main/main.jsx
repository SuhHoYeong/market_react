import styles from "./main.module.css";
import { useEffect } from "react";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { getProducts } from "../../service/fetcher";

export const Main = ({ convertPrice, products, setProducts }) => {
  const sortProduct = (type) => {
    if (type === "recent") {
      const newProduct = [...products];
      newProduct.sort((a, b) => a.id - b.id);
      setProducts(newProduct);
    } else if (type === "row") {
      const newProduct = [...products];
      newProduct.sort((a, b) => a.price - b.price);
      setProducts(newProduct);
    } else if (type === "high") {
      const newProduct = [...products];
      newProduct.sort((a, b) => b.price - a.price);
      setProducts(newProduct);
    }
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);
  return (
    <>
      <EventBanner />
      <div className={styles.filter}>
        <p onClick={() => sortProduct("recent")}>最新順</p>
        <p onClick={() => sortProduct("row")}>低い価格</p>
        <p onClick={() => sortProduct("high")}>高い価格</p>
      </div>
      <main className={styles.flex_wrap}>
        {products.map((product) => {
          return (
            <Product
              key={`key-${product.id}`}
              product={product}
              convertPrice={convertPrice}
            />
          );
        })}
      </main>
    </>
  );
};
