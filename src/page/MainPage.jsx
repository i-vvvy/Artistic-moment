import React, { useEffect } from 'react';
import { concertAction } from '../redux/actions/concertAction';
import ConcertList from '../component/main/ConcertList';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../component/common/Loading';
import Video from '../component/main/Video';
import Subscribe from '../component/main/Subscribe';
import Main from '../component/main/Main';

const MainPage = () => {
  const dispatch = useDispatch();
  const { concert, loading } = useSelector(state => state.concert);

  console.log('home', concert);

  useEffect(() => {
    dispatch(concertAction.getConcert());
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Main concert={concert} />
      <ConcertList concert={concert} />
      <Video />
      <Subscribe />
    </div>
  );
};

export default MainPage;
