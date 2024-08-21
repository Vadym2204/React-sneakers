import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export const Header = ({onClickCart}) => {
   return (

    <header className={styles.header}>
       <div className={styles.headerLeft}>
         <Link to="/">
          <img src='/src/assets/logo.png' width={40} height={40} alt="sneakers" />
         </Link>
          <div className={styles.headerContent}>
            <h2 className={styles.headerTitle}>
                 REACT SNEAKERS
            </h2>
            <p className={styles.headerText}>
                 Магазин лучших кроссовок
            </p>
          </div>
       </div>
       <ul className={styles.headerRight}>
         <li onClick={onClickCart}>
            <img src="/src/assets/cart.svg" alt="cart" />
            <span>1205 руб.</span>
         </li>
         <li>
            <Link to="/favorites">
               <img src="/src/assets/heart.svg" alt="heart" />
               <span>Закладки</span>
            </Link>
         </li>
         <li>
            <img src="/src/assets/user.svg" alt="user" />
            <span>Профиль</span>
         </li>
       </ul>
    </header>
   )
}
