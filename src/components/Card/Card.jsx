import styles from "./Card.module.scss";
import { useState } from "react";

  const Card = ({id, title, imgUrl, price, onPlus, onFavorite, favorited = false, added}) => {
  const [isFavorite, setIsFavorite] = useState(favorited);
  const [isAdded, setIsAdded] = useState(added);

  const handleClickFavorite = () => {
    onFavorite({id, title, imgUrl, price})
    setIsFavorite(!isFavorite);
  };

  const handleClickPlus = () => {
    onPlus({id, title, imgUrl, price })
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          className={styles.plus}
          onClick={handleClickFavorite}
          src={isFavorite ? "/src/assets/liked.svg" : "/src/assets/unliked.svg"}
          alt="unliked"
        />
      </div>
      <img width={130} height={112} src={imgUrl} alt="Sneakers" />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardContent}>
        <div className={styles.price}>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <button>
          <img
            src={
              isAdded
                ? "/src/assets/btn-checked.svg"
                : "/src/assets/btn-plus.svg"
            }
            onClick={handleClickPlus}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
