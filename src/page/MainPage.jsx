import React, { useEffect } from 'react';
import { concertAction } from '../redux/actions/concertAction';
import ConcertList from '../component/main/ConcertList';
import MainSlide from '../component/main/MainSlide';
import SearchBar from '../component/main/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../component/common/Loading';

const MainPage = () => {
  const dispatch = useDispatch();
  const { concert, loading } = useSelector(state => state.concert);

  console.log('home', concert);

  useEffect(() => {
    dispatch(concertAction.getConcert());
  }, []);

  // loading이 true면 loading 스피너를 보여주고
  // loading이 false면 데이터를 보여주고

  // true: 데이터 도착 전
  // false: 데이터 도착 후, 에러가 났을 때

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <MainSlide concert={concert} />
      <SearchBar />
      <ConcertList concert={concert} />
    </div>
  );
};

export default MainPage;
