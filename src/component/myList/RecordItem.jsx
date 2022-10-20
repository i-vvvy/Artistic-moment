import React from 'react';
import {
  Section,
  RecordItemContainer,
  Poster,
  Content,
  Button,
} from './RecordItem.style';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { recordListAction } from '../../redux/actions/recordListAction';

const RecordItem = ({ concertInfo, title, date, id }) => {
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
    <div>
      <Section>
        <RecordItemContainer>
          <Poster onClick={goDetail}>
            <img src={concertInfo.FILE_URL_MI} alt="" />
          </Poster>
          <Content onClick={goDetail}>
            <h4>{concertInfo.TITLE}</h4>
            <h2>{title}</h2>
            <div className="bottom">
              <p>{date}</p>
              <p>{concertInfo.PLACE_NAME}</p>
            </div>
          </Content>
          <Button>
            <button onClick={goEdit}>EDIT</button>
            <button onClick={handleDelete}>DELETE</button>
          </Button>
        </RecordItemContainer>
      </Section>
    </div>
  );
};

export default RecordItem;
