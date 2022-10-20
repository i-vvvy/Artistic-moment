import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../main/SearchBar';
import { Section, NavContainer, Logo, Right, Bottom } from './Navigation.style';
import LoginModals from './LoginModals';
import { UserAuth } from '../../context/AuthContext';

const Navigation = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  };

  const goMyList = () => {
    navigate(`/myList`);
  };

  const goSearch = () => {
    navigate(`/search`);
  };

  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <NavContainer>
        <Logo onClick={goMain}>Artistic Moment</Logo>
        {user ? (
          <Right>
            <button onClick={goSearch}>SEARCH</button>
            <button onClick={goMyList}>RECORD-LIST</button>
            <button onClick={handleSignOut}>LOGOUT</button>
          </Right>
        ) : (
          <Right>
            <button onClick={goSearch}>SEARCH</button>
            <LoginModals />
          </Right>
        )}
      </NavContainer>
    </Section>
  );
};

export default Navigation;
