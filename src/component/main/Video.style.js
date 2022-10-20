import styled from 'styled-components';
import { PageWrapper } from '../../styles/container.style';

export const Section = styled.div`
  display: flex;
  align-items: center;
  background-color: #ede9e1;
  height: 46rem;
  /* margin-bottom: 10rem; */
`;

export const VideoContainer = styled(PageWrapper)`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  /* background-color: pink; */
  min-width: 40rem;
  margin-right: 14rem;

  h2 {
    font-size: 3.8rem;
    border-bottom: 1px solid #333333;
    padding-bottom: 1.6rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 3.6rem;
  }
`;

export const VideoContent = styled.div`
  /* background-color: yellow; */
  width: 66rem;
`;
