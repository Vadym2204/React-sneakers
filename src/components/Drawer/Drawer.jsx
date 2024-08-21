import styles from "./Drawer.module.scss";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";

const Drawer = ({ onClose, onRemove, items = [] }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawerClose}>
          <h2 className={styles.cartTitle}>Корзина</h2>
          <img onClick={onClose} src="/src/assets/btn-remove.svg" alt="remove" />
        </div>
        
          
        {items.length > 0 ? (
          <>
            <div className={styles.items}>
              {items.map((obj) => (
                <CartItem
                  key={obj.id}
                  title={obj.title}
                  imgUrl={obj.imgUrl}
                  price={obj.price}
                  id={obj.id}
                  onRemove={onRemove}
                />
              ))}
            </div>
            <ul className={styles.cartTotalBlock}>
              <li>
                <span>итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <Button />
          </>
        ) : (
          <div className={styles.cartStatus}>
            <img src="/src/assets/empty-cart.jpg" alt="empty-cart" />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose}>
              <img src="/src/assets/arrow.svg" alt="arrow" />
              <h3>Вернуться назад</h3>
            </button>
          </div>
        )}
          
           
      </div>
    </div>
  );
};

export default Drawer;
