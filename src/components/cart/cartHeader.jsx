import styles from "./cart.module.css";

export const CartHeader = ({ isAllChecked, handleCheckAll }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>バスケット</h1>
      </header>
      <div className={styles.cart_title_wrap}>
        <div className={styles.tab_title}>
          <input
            type="checkbox"
            checked={isAllChecked}
            onChange={(e) => handleCheckAll(e.target.checked)}
          />
          <span>商品情報</span>
          <span>数量</span>
          <span>商品価額</span>

          <p>全体選択</p>
        </div>
      </div>
    </>
  );
};
