import { Header } from "./components/Header/Header.jsx";
import { Catalog } from "./components/Catalog/Catalog.jsx";
import styles from "./Home.module.scss";
import Card from "./components/Card/Card.jsx";
import Drawer from "./components/Drawer/Drawer.jsx";
import { useContext } from 'react';
import { AppContext } from './AppContext';

const Home = () => {
  const {
    favoriteData,
    setFavoriteData,
    searchValue,
    setSearchValue,
    items,
    setItems,
    cartItems,
    setCartItems,
    cartOpened,
    setCartOpened,
    addToCart,
    deleteFromCart,
    addToFavorites,
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
        <div className={styles.card}>
          <Catalog searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className={styles.cardGrid}>
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((card, index) => (
              <Card
                key={index}                
                onFavorite={(obj) => addToFavorites(obj)}
                onPlus={(obj) => addToCart(obj)}
                added={cartItems.some(obj => Number(obj.id) === Number(card.id))}
                {...card}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;