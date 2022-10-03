import styled from 'styled-components';
import { PageWrapper } from '../../styles/container.style';

export const Section = styled.div`
  height: 44rem;
  border-bottom: 1px solid #777777;
  margin-bottom: 10rem;
`;

export const SlideContainer = styled(PageWrapper)`
  height: 44rem;
  /* background-color: #ececec; */
  border-bottom: 1px solid #777777;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50rem;

  h2 {
    font-size: 3.4rem;
    margin-bottom: 3.4rem;
  }
  span {
    width: 50rem;
    border-bottom: 2px solid #777777;
    margin-bottom: 6rem;
  }
  p {
    font-size: 2.4rem;
  }
  .date {
    margin-bottom: 3rem;
  }
`;

export const Poster = styled.div`
  /* background-color: pink; */
  width: 60rem;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    object-fit: cover;

    /* width: 100%;
    height: auto; */
    background-color: #fff;
  }
`;
