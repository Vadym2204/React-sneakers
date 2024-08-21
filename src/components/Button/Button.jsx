import styles from "./Button.module.scss"

const Button = () => {
  return (
    <div className={styles.divButton}>
        <button className={styles.button}>
            <h2>Оформить заказ</h2>
            <img src="/src/assets/arrow.svg" alt="arrow" />
          </button>
    </div>
  )
}

export default Button