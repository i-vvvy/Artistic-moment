import styled from 'styled-components';
import { PageWrapper } from '../../styles/container.style';

export const Section = styled.div`
  top: 100px;
  .modal-content {
    width: 800px;
    top: 100px;
  }
`;

export const Title = styled.div`
  text-align: center;
  margin: 6rem 0 4rem;

  h4 {
    margin-bottom: 1.4rem;
  }
`;

export const Form = styled.div`
  /* background-color: pink; */
  width: 30rem;
  margin: auto;

  input {
    border-bottom: 1px solid #999999;
    padding: 0.4rem;
    width: 30rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
  }
`;

export const Checkbox = styled.div`
  width: 30rem;
  /* background-color: pink; */
  margin: 1rem auto 0;
  font-size: 1.2rem;

  input {
    margin-bottom: 1.4rem;
  }

  label {
    margin-left: 1rem;
  }
`;

export const SubmitButton = styled.div`
  border: 1px solid #777777;
  font-size: 1.4rem;
  padding: 0.6rem 1.4rem;
  margin: 4rem auto 6rem;
  cursor: pointer;
`;
