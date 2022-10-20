import styled from 'styled-components';
import { PageWrapper } from '../../styles/container.style';

export const SubscribeContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;

  h4 {
    font-size: 1.8rem;
    /* color: #ffffff; */
    margin-bottom: 0.4rem;
  }

  h2 {
    font-size: 3.8rem;
    /* color: #ffffff; */
    margin-bottom: 1.6rem;
  }

  .line {
    width: 1px;
    height: 5rem;
    background-color: #777777;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 4rem;
  }

  button {
    border: 1px solid #777777;
    font-size: 1.8rem;
    padding: 0.6rem 1.4rem;
    margin-left: 1rem;
    color: #333333;

    &:hover {
      background-color: #333333;
      color: #efefef;
    }
  }
`;
