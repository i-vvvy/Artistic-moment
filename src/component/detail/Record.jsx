import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { recordListAction } from '../../redux/actions/recordListAction';
import { useSelector } from 'react-redux';
import styles from './Record.module.css';
import { UserAuth } from '../../context/AuthContext';

const Record = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = UserAuth();
  const uid = user.uid;

  const [data, setData] = useState();

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  const getRecordList = useSelector(state => state.recordList.recordList);
  const userRecordList = getRecordList.filter(item => item.uid === uid);

  useEffect(() => {
    if (userRecordList) {
      const targetRecord = userRecordList.find(it => it.id === id);

      if (targetRecord) {
        setData(targetRecord);
      } else {
        navigate(`/new/${id}`, { replace: true });
      }
      console.log('targetRecord', targetRecord);
    }
  }, [id, userRecordList]);

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(recordListAction.deleteRecordList(id));
      navigate('/', { replace: true });
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>My Artistic Moment</h2>
        <div className={styles.title}>
          <h4>{data?.title}</h4>
          <h4>{data?.date}</h4>
        </div>
        <div className={styles.content}>
          <p>{data?.content}</p>
          <div className={styles.handleButton}>
            <button onClick={goEdit}>EDIT</button>
            <button onClick={handleDelete}>DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
