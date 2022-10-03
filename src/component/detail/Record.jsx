import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Section,
  RecordContainer,
  Title,
  Content,
  Button,
} from './Record.style';
import { useDispatch } from 'react-redux';
import { recordListAction } from '../../redux/actions/recordListAction';
import { useSelector } from 'react-redux';

const Record = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState();

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  const getRecordList = useSelector(state => state.recordList.recordList);

  useEffect(() => {
    if (getRecordList) {
      const targetRecord = getRecordList.find(it => it.id === id);

      if (targetRecord) {
        setData(targetRecord);
      } else {
        navigate(`/new/${id}`, { replace: true });
      }
      console.log('targetRecord', targetRecord);
    }
  }, [id, getRecordList]);

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(recordListAction.deleteRecordList(id));
      navigate('/', { replace: true });
    }
  };

  return (
    <Section>
      <RecordContainer>
        <h2>My Artistic Moment</h2>
        <Title>
          <h4>{data?.title}</h4>
          <h4>{data?.date}</h4>
        </Title>
        <Content>
          <p>{data?.content}</p>
          <Button>
            <button onClick={goEdit}>EDIT</button>
            <button onClick={handleDelete}>DELETE</button>
          </Button>
        </Content>
      </RecordContainer>
    </Section>
  );
};

export default Record;
