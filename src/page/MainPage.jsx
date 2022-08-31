import React from 'react';
import ExhibitionList from '../component/main/ExhibitionList';
import MainSlide from '../component/main/MainSlide';
import SearchBar from '../component/main/SearchBar';

const MainPage = () => {
  return (
    <div>
      <MainSlide />
      <SearchBar />
      <ExhibitionList />
    </div>
  );
};

export default MainPage;
