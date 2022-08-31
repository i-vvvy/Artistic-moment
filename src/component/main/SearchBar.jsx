import React from 'react';
import { Section, SearchBarContainer } from './SearchBar.style';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {
  return (
    <Section>
      <SearchBarContainer>
        <button>
          <SearchOutlined style={{ fontSize: '2rem', color: '#999999' }} />
        </button>
        <input type="text" placeholder="Search your artistic moment" />
      </SearchBarContainer>
    </Section>
  );
};

export default SearchBar;
