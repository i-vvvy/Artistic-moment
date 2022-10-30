import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './LoginModals.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AiFillGoogleSquare } from 'react-icons/ai';

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
    <div>
      <div className={styles.desktopLoginButton} onClick={handleShow}>
        LOGIN
      </div>
      <div className={styles.tabletLoginButton} onClick={handleShow}>
        <FaUser size="22" color="#777777" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <div className={styles.title}>
          <h4>Artistic Moment</h4>
          <h2>Login</h2>
        </div>
        <div className={styles.form}>
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
        </div>
        <div className={styles.submitButton} onClick={handleLogin}>
          LOGIN
        </div>

        <div className={styles.snsLogin}>
          <h2>SNS Login</h2>
          <div className="icon">
            <button onClick={handleGoogleSignIn}>
              <AiFillGoogleSquare size="26" color="#333333" />
              <p>GOOGLE LOGIN</p>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModals;
