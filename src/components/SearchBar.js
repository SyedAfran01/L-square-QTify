import React from 'react';
import styles from './SearchBar.module.css';
import { ReactComponent as SearchIcon } from '../assets/Search-icon.svg'; // Adjust the path

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search a song of your choice"
      />
      <div className={styles.separator}></div>
      <button className={styles.searchButton}>
        <SearchIcon className={styles.searchIcon} />
      </button>
    </div>
  );
};

export default SearchBar;
