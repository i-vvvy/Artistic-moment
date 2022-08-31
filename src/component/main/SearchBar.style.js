import styled from 'styled-components';
import { PageWrapper } from '../../styles/container.style';

export const Section = styled.div`
  /* background-color: pink; */
  margin-bottom: 6rem;
`;

export const SearchBarContainer = styled(PageWrapper)`
  width: 50rem;
  height: 5rem;
  padding: 2rem;
  border-bottom: 2px solid #777777;
  margin: auto;
  /* background-color: #f9f9f9; */
  display: flex;
  align-items: center;

  input {
    font-size: 1.8rem;
    width: 60rem;
    height: 4rem;
    border: none;
    outline: none;
    background: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    margin-right: 2rem;
  }
`;
