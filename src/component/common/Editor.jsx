import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { recordListAction } from '../../redux/actions/recordListAction';
import styles from './Editor.module.css';
import { UserAuth } from '../../context/AuthContext';

const getStringDate = date => {
  return date.toISOString().substring(0, 10);
};

const Editor = ({ concertInfo, isEdit, originData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = UserAuth();
  const uid = user.uid;

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(getStringDate(new Date()));
  const [content, setContent] = useState('');

  const titleInput = useRef();
  const contentInput = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    if (title.length < 1) {
      titleInput.current.focus();
      return;
    }

    if (content.length < 1) {
      contentInput.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? '기록을 수정하시겠습니까?' : '기록을 추가하시겠습니까?',
      )
    )
      if (!isEdit) {
        dispatch(
          recordListAction.addRecordList(
            concertInfo,
            title,
            date,
            content,
            id,
            uid,
          ),
        );
      } else {
        dispatch(
          recordListAction.editRecordList(
            concertInfo,
            title,
            date,
            content,
            id,
            uid,
          ),
        );
      }

    navigate(`/detail/${id}`, { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(originData.date)));
      setTitle(originData.title);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>{isEdit ? 'Edit' : 'Write Artistic Moment'}</h2>
        <div className={styles.title}>
          <input
            className={styles.input}
            ref={titleInput}
            type="text"
            placeholder="제목"
            maxLength="16"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <input
            className={styles.input}
            type="date"
            value={date}
            onChange={event => setDate(event.target.value)}
          />
        </div>
        <div className={styles.content}>
          <textarea
            ref={contentInput}
            type="text"
            placeholder="그 순간 느꼈던 감정과 생각을 남겨보세요"
            value={content}
            onChange={event => setContent(event.target.value)}
          />
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
