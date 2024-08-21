import styles from "./CartItem.module.scss";

const CartItem = ({title, imgUrl, price, onRemove, id}) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartItem}>
        <img
          width={70}
          height={70}
          src={imgUrl}
          alt="sneakers-1"
        />
        <div>
          <h2>
            {title}
          </h2>
            <div >              
              <b>{price}</b>
            </div>
        </div>
        <button>
            <img onClick={() => onRemove(id)} src="/src/assets/btn-remove.svg" alt="remove" />
        </button>
      </div>
    </div>
    
  );
};

export default CartItem;