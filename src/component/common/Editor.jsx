import React from 'react';
import {
  Section,
  EditorContainer,
  Title,
  Left,
  Right,
  Content,
} from './Editor.style';
import { HeartFilled } from '@ant-design/icons/lib/icons';

const Editor = () => {
  return (
    <Section>
      <EditorContainer>
        <h2>정세윤 : A Grand Day Out</h2>
        <Title>
          <Left>
            <img
              src="https://www.syu.ac.kr/wp-content/uploads/2021/04/%EC%A0%84%EC%8B%9C%ED%9A%8C-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
              alt=""
            />
          </Left>
          <Right>
            <input type="text" placeholder="제목" />
            <input type="date" />
            <div className="grade">
              <button>
                <HeartFilled />
              </button>
              <button>
                <HeartFilled />
              </button>
              <button>
                <HeartFilled />
              </button>
              <button>
                <HeartFilled />
              </button>
              <button>
                <HeartFilled />
              </button>
            </div>
          </Right>
        </Title>
        <Content>
          <textarea
            type="text"
            placeholder="그 순간 느꼈던 감정과 생각을 남겨보세요"
          />
          <button>SUBMIT</button>
        </Content>
      </EditorContainer>
    </Section>
  );
};

export default Editor;
