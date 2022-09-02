import styled from 'styled-components';

export const ExhibitionItemContainer = styled.div`
  cursor: pointer;

  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.4rem;
  }
`;

export const Poster = styled.div`
  width: 34rem;
  height: 38rem;
  position: relative;
  margin-bottom: 1.6rem;
  background-color: pink;
  overflow: hidden;

  img {
    position: absolute;
    height: 100%;
  }
`;
