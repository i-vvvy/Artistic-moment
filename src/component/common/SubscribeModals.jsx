import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './SubscribeModals.module.css';

const SubscribeModals = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState();

  const nameRef = useRef();
  const emailRef = useRef();

  const handleChecked = e => {
    setChecked(e.target.checked ? 'agree' : 'disagree');
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.length < 1) {
      nameRef.current.focus();
      return;
    }

    if (email.length < 5) {
      emailRef.current.focus();
      return;
    }

    if (checked !== 'agree') {
      return;
    }
    if (window.alert(`${name}! Thank you for subscribing 😊`));
    else {
      setName('');
      setEmail('');
      setChecked('');
      handleClose();
    }
  };
  return (
    <div className={styles.section}>
      <button onClick={handleShow}>Subscribe</button>

      <Modal show={show} onHide={handleClose}>
        <div className={styles.title}>
          <h4>Artistic Moment</h4>
          <h2>Subscribe to the newsletter</h2>
        </div>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="NAME"
            value={name}
            onChange={e => setName(e.target.value)}
            ref={nameRef}
          />

          <input
            type="text"
            placeholder="E-MAIL"
            value={email}
            ref={emailRef}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.checkbox}>
          <div>
            <input
              type="checkbox"
              id="PersonalInfo"
              checked={checked === 'agree'}
              onChange={handleChecked}
            />
            <label htmlFor="PersonalInfo">
              (필수) 개인정보 수집 및 이용약관에 동의합니다.
            </label>
          </div>
          <div>
            <input type="checkbox" id="ad" />
            <label htmlFor="ad">(선택) 광고성 정보 수신에 동의합니다.</label>
          </div>
        </div>

        <div className={styles.submitButton} onClick={handleSubmit}>
          SUBMIT
        </div>
      </Modal>
    </div>
  );
};

export default SubscribeModals;
