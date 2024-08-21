import Drawer from "../components/Drawer/Drawer";
import { Header } from "../components/Header/Header";
import Card from "../components/Card/Card";
import styles from "../Home.module.scss";
import { useContext } from 'react';
import { AppContext } from '/src/AppContext.jsx';

const Favorites = () => {
  const {
    addToFavorites,
    favoriteData,
    cartItems,
    cartOpened,
    setCartOpened,
    deleteFromCart,
  } = useContext(AppContext);

  return (
    <>
      <div className={styles.wrapper}>
        {cartOpened ? (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={deleteFromCart}
          />
        ) : null}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className={styles.favoriteCard}>
          <h2>Закладки</h2>
        </div>
        <div className={styles.cardGrid}>
          {favoriteData.map((card, index) => (
            <Card
              key={index}
              {...card}
              favorited={true}
              onFavorite={addToFavorites}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;