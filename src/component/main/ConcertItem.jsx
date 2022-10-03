import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ConcertItemContainer, Poster } from './ConcertItem.style';

const ConcertItem = ({ item, isData }) => {
  const id = item.PERFORM_CODE;

  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${id}`);
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
