import styles from "./cart.module.css";
import { useEffect } from "react";

export const TotalCart = ({ total, setTotal, cart, convertPrice, found }) => {
  useEffect(() => {
    if (found) {
      const temp = found.filter((item) => item.length !== 0);
      const sum = temp.map((item) => item[0].price * item[0].quantity);
      const reducer = (acc, cur) => acc + cur;
      if (sum.length === 0) {
        setTotal(0);
        return;
      }
      const itemTotal = sum.reduce(reducer);
      setTotal(itemTotal);
    } else {
      setTotal(0);
    }
  }, [cart, total, found, setTotal]);

  return (
    <div className={styles.total}>
      <div className={styles.total_price}>
        <p className={styles.cart_product_total_price}>total金額</p>
        <p className={styles.cart_product_price}>{convertPrice(total)}</p>
      </div>
      <div className={styles.pay_minus}>
        <img src="/images/icon-minus-line.svg" alt="minus" />
      </div>
      <div className={styles.sale}>
        <p className={styles.cart_product_sale}>商品割引</p>
        <p className={styles.cart_product_sale_price}>0円</p>
      </div>
      <div className={styles.pay_plus}>
        <img src="/images/icon-plus-line.svg" alt="plus" />
      </div>
      <div className={styles.delivery}>
        <p className={styles.cart_product_delivery}>配送費</p>
        <p className={styles.cart_product_delivery_price}>0円</p>
      </div>

      <div className={styles.payment}>
        <p className={styles.cart_prouct_payment}>決済予定金額</p>
        <p className={styles.cart_prouct_payment_price}>
          {convertPrice(total)}
        </p>
      </div>
    </div>
  );
};
