import React from 'react';
import styles from './RecordItem.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { recordListAction } from '../../redux/actions/recordListAction';

const RecordItem = ({ concertInfo, title, date, id, uid }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${id}`);
  };

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(recordListAction.deleteRecordList(id));
    }
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.poster} onClick={goDetail}>
          <img src={concertInfo.FILE_URL_MI} alt="" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content} onClick={goDetail}>
            <h4>{concertInfo.TITLE}</h4>
            <h2>{title}</h2>
            <div className={styles.bottom}>
              <p>{date}</p>
              <p>{concertInfo.PLACE_NAME}</p>
            </div>
          </div>
          <div className={styles.handleButton}>
            <button onClick={goEdit}>EDIT</button>
            <button onClick={handleDelete}>DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordItem;
