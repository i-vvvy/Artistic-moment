import React from 'react';
import { Section, MainItemContainer, Content, Poster } from './MainItem.style';

const MainItem = ({ item }) => {
  return (
    <Section>
      <MainItemContainer>
        <Content>
          <h2>{item.TITLE}</h2>
          <span />
          <p className="date">
            {item.START_DATE} ~ <br />
            {item.END_DATE}
          </p>
          <p>{item.PLACE_NAME}</p>
        </Content>
        <Poster>
          <img src={item.FILE_URL_MI} alt="" />
        </Poster>
      </MainItemContainer>
    </Section>
  );
};

export default MainItem;
