import React from 'react';
import styles from './SearchBar.module.css';

// import { SearchOutlined } from '@ant-design/icons';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ search, setSearch }) => {
  // const onSearch = event => {
  //   if (event.key === 'Enter') {
  //     setSearch(event.target.value);
  //   }
  // };

  const onReset = event => {
    setSearch('');
  };

  const onSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.searchIcon}>
          <AiOutlineSearch size="26" color="#777777" />
          {/* <SearchOutlined style={{ fontSize: '2rem', color: '#999999' }} /> */}
        </div>
        <input
          type="text"
          placeholder="Search for a title or place"
          // onKeyPress={event => onSearch(event)}
          value={search}
          onChange={onSearch}
        />
      </div>
      <button className={styles.resetButton} onClick={onReset}>
        RESET
      </button>
    </div>
  );
};

export default SearchBar;
