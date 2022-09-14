import styled from 'styled-components';

export const ConcertItemContainer = styled.div`
  cursor: pointer;
  width: 34rem;

  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    word-break: keep-all;
    overflow-wrap: break-word;
    width: 100%;
    border-bottom: 1px solid #adadac;
  }

  p {
    font-size: 1.4rem;
  }
`;

export const Poster = styled.div`
  width: 34rem;
  height: 44rem;
  position: relative;
  margin-bottom: 1.6rem;
  background-color: #edd7af;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    height: auto;
    &:hover {
      opacity: 60%;
    }
  }
`;
