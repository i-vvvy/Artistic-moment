import React, { useEffect, useState } from 'react';
import SearchList from '../component/main/SearchList';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../component/common/Loading';
import { concertAction } from '../redux/actions/concertAction';
import SearchBar from '../component/main/SearchBar';
import Test from '../component/main/Test';

const SearchPage = () => {
  const dispatch = useDispatch();
  const { concert, loading } = useSelector(state => state.concert);

  useEffect(() => {
    dispatch(concertAction.getConcert());
  }, []);

  const [search, setSearch] = useState('');

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <SearchList concert={concert} search={search} />
    </div>
  );
};

export default SearchPage;
