import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import styles from './ConcertItem.module.css';

const ConcertItem = ({ item, isData }) => {
  const id = item.PERFORM_CODE;

  const navigate = useNavigate();

  const { user } = UserAuth();

  const goDetail = () => {
    if (user) {
      navigate(`/detail/${id}`);
    } else {
      window.alert(
        '로그인 후 이용해주세요 😊 (E-MAIL: test@gmail.com, PASSWORD: 123456)',
      );
    }
  };

  return (
    <div className={styles.container} onClick={goDetail}>
      <div className={styles.poster}>
        <img src={item.FILE_URL_MI} alt="공연 포스터" />
      </div>
      <h4>{item.TITLE}</h4>
      <span />
      <p>
        {item.START_DATE} ~ {item.END_DATE}
      </p>
      <p>{item.PLACE_NAME}</p>
    </div>
  );
};

export default ConcertItem;
