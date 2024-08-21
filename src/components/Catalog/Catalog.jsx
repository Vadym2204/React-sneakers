import styles from "./Catalog.module.scss"

  export const Catalog = ({searchValue, setSearchValue}) => {
  
  const onSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  return (
  <>
    <h1 className={styles.cardTitle}>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кросовки'}</h1>
    <div className={styles.search}>
      <img width={12} height={12} src="/src/assets/search.svg" alt="search" />
      <input onChange={onSearchChange} value={searchValue} placeholder="Поиск..." />
      {searchValue && <img onClick={() => setSearchValue('')} className={styles.clear} src="/src/assets/btn-remove.svg" alt="clear" />}
    </div>
  </>
)};
