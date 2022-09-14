import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ConcertItemContainer, Poster } from './ConcertItem.style';

const ConcertItem = ({ item }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const goNew = () => {
    navigate(`/new/${id}`);
  };

  console.log('Concert?', item);

  return (
    <ConcertItemContainer onClick={goNew}>
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
