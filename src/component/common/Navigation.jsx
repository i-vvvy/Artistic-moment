import React from 'react';
import { Section, NavContainer, Logo, Right } from './Navigation.style';

const Navigation = () => {
  return (
    <Section>
      <NavContainer>
        <Logo>Artistic Moment</Logo>
        <Right>
          <h4>mimi</h4>
          <button>LIST</button>
          <button>LOGOUT</button>
        </Right>
      </NavContainer>
    </Section>
  );
};

export default Navigation;
