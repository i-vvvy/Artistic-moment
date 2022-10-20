import styled from 'styled-components';
import { PageWrapper } from '../../styles/container.style';

export const Section = styled.div`
  width: 100%;
  height: 18rem;
  background-color: #ede9e1;
  margin-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: block;
    border: 1px solid #777777;
    font-size: 1.6rem;
    padding: 0.6rem 1.4rem;
  }
`;

export const SearchBarContainer = styled.div`
  display: block;
  width: 50rem;
  height: 5rem;
  padding: 2rem;
  border-bottom: 2px solid #777777;
  /* margin: auto; */
  display: flex;
  align-items: center;
  margin-right: 2rem;

  input {
    font-size: 1.8rem;
    width: 50rem;
    height: 4rem;
    border: none;
    outline: none;
  }

  .searchIcon {
    margin-right: 2rem;
  }
`;
