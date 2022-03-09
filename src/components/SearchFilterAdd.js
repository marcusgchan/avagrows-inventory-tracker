import styles from "./styles/SearchFilterAdd.module.css";

function SearchFilterAdd({ toggleAddModal, toggleFilterModal }) {
  return (
    <section className={styles.container}>
      <div className={styles.searchContainer}>
        <span>search</span>
        <select className={styles.searchInput}></select>
        <select className={styles.searchInput}></select>
        <input className={styles.searchInput} type="text" />
        <button className={styles.btn}>search</button>
        <button className={styles.btn}>clear</button>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={toggleFilterModal}>
          Filter
        </button>
        <button className={styles.btn} onClick={toggleAddModal}>
          Add +
        </button>
      </div>
    </section>
  );
}

export default SearchFilterAdd;
