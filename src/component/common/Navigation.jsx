import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Section, NavContainer, Logo, Right } from './Navigation.style';

const Navigation = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  };

  const goMyList = () => {
    navigate(`/myList`);
  };
  return (
    <Section>
      <NavContainer>
        <Logo onClick={goMain}>Artistic Moment</Logo>
        <Right>
          <h4>mimi</h4>
          <button onClick={goMyList}>LIST</button>
          <button>LOGOUT</button>
        </Right>
      </NavContainer>
    </Section>
  );
};

export default Navigation;
