import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ConcertItemContainer, Poster } from './ConcertItem.style';

import { UserAuth } from '../../context/AuthContext';
import LoginModals from '../common/LoginModals';

const ConcertItem = ({ item, isData }) => {
  const id = item.PERFORM_CODE;

  const navigate = useNavigate();

  const { user } = UserAuth();

  const goDetail = () => {
    if (user) {
      navigate(`/detail/${id}`);
    } else {
      window.alert('로그인 후 이용해주세요 😊');
    }
  };

  return (
    <ConcertItemContainer onClick={goDetail}>
      <Poster>
        <img src={item.FILE_URL_MI} alt="" />
      </Poster>
      <h4>{item.TITLE}</h4>
      <span />
      <p>
        {item.START_DATE} ~ {item.END_DATE}
      </p>
      <p>{item.PLACE_NAME}</p>
    </ConcertItemContainer>
  );
};

export default ConcertItem;
