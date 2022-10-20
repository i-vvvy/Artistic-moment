import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { GoogleSquareFilled } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Section,
  Title,
  Form,
  SubmitButton,
  SnsLogin,
} from './LoginModals.style';

import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginModals = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    googleSignIn,
    logIn,
    user,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
  } = UserAuth();

  const navigate = useNavigate();

  const emailInput = useRef();
  const passwordInput = useRef();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user]);

  const handleLogin = () => {
    if (loginEmail.length < 8) {
      emailInput.current.focus();
      return;
    }
    if (loginPassword.length < 6) {
      passwordInput.current.focus();
      return;
    } else {
      handleClose();
      logIn();
      setLoginEmail('');
      setLoginPassword('');
    }
  };

  return (
    <Section>
      <button onClick={handleShow}>LOGIN</button>

      <Modal show={show} onHide={handleClose}>
        <Title>
          <h4>Artistic Moment</h4>
          <h2>Login</h2>
        </Title>
        <Form>
          <input
            type="text"
            placeholder="E-MAIL"
            ref={emailInput}
            value={loginEmail}
            onChange={e => {
              setLoginEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            ref={passwordInput}
            value={loginPassword}
            onChange={e => {
              setLoginPassword(e.target.value);
            }}
          />
        </Form>
        <SubmitButton onClick={handleLogin}>LOGIN</SubmitButton>

        <SnsLogin>
          <h2>SNS Login</h2>
          <div className="icon">
            <button onClick={handleGoogleSignIn}>
              <GoogleSquareFilled />
              <p>GOOGLE LOGIN</p>
            </button>
          </div>
        </SnsLogin>
      </Modal>
    </Section>
  );
};

export default LoginModals;
