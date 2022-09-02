import styled from 'styled-components';
import { PageWrapper } from '../../styles/container.style';

export const Section = styled.div`
  height: 8.4rem;
  border-bottom: 1px solid #777777;
`;

export const NavContainer = styled(PageWrapper)`
  height: 8.4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #777777;
`;

export const Logo = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 1.8rem;
  z-index: 10;

  button {
    margin-left: 2.2rem;
    font-size: 1.6rem;
  }

  button:hover {
    text-decoration-color: #edd7af;
    text-decoration-line: underline;
    text-decoration-thickness: 6px;
  }
`;
