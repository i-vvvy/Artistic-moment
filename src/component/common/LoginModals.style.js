import styled from 'styled-components';

export const Section = styled.div`
  button {
    margin-left: 2rem;
    font-size: 1.4rem;
  }

  button:hover {
    text-decoration-color: #edd7af;
    text-decoration-line: underline;
    text-decoration-thickness: 6px;
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

  h4 {
    font-size: 1.4rem;
    margin-bottom: 1.4rem;
  }

  input {
    border-bottom: 1px solid #999999;
    padding: 0.4rem;
    width: 30rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
  }
`;

export const SubmitButton = styled.div`
  border: 1px solid #777777;
  font-size: 1.4rem;
  padding: 0.6rem 1.4rem;
  margin: 3rem auto 4rem;
  cursor: pointer;
`;

export const SnsLogin = styled.div`
  text-align: center;
  padding: 4rem 0 6rem;
  background-color: #ede9e1;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  h2 {
    margin-bottom: 3rem;
  }

  button {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;
    padding: 0.8rem 0;
    font-size: 3.6rem;
    border: 1px solid #777777;
    font-size: 2.4rem;

    p {
      font-size: 1.4rem;
      margin-left: 1rem;
    }
  }
`;
