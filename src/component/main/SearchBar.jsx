import React from 'react';
import { Section, SearchBarContainer } from './SearchBar.style';
import { SearchOutlined } from '@ant-design/icons';

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
    <Section>
      <SearchBarContainer>
        <div className="searchIcon">
          <SearchOutlined style={{ fontSize: '2rem', color: '#999999' }} />
        </div>
        <input
          type="text"
          placeholder="Search for a title or place"
          // onKeyPress={event => onSearch(event)}
          value={search}
          onChange={onSearch}
        />
      </SearchBarContainer>
      <button onClick={onReset}>RESET</button>
    </Section>
  );
};

export default SearchBar;
