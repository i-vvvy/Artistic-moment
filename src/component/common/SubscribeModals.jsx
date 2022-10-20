import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Section,
  Checkbox,
  Title,
  Form,
  SubmitButton,
} from './SubscribeModals.style';

const SubscribeModals = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [checked, setChecked] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  // const checkedRef = useRef();

  const handleSubmit = () => {
    if (name.length < 1) {
      nameRef.current.focus();
      return;
    }

    if (email.length < 5) {
      emailRef.current.focus();
      return;
    }
    if (window.alert('Thank you for subscribing 😊'));
    else {
      setName('');
      setEmail('');
      handleClose();
    }
  };
  return (
    <Section>
      <button onClick={handleShow}>Subscribe</button>

      <Modal show={show} onHide={handleClose}>
        <Title>
          <h4>Artistic Moment</h4>
          <h2>Subscribe to the newsletter</h2>
        </Title>
        <Form>
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
        </Form>

        <Checkbox>
          <div>
            <input type="checkbox" id="PersonalInfo" />
            <label id="PersonalInfo">
              (필수) 개인정보 수집 및 이용약관에 동의합니다.
            </label>
          </div>
          <div>
            <input type="checkbox" id="ad" />
            <label id="ad">(선택) 광고성 정보 수신에 동의합니다.</label>
          </div>
        </Checkbox>

        <SubmitButton onClick={handleSubmit}>SUBMIT</SubmitButton>
      </Modal>
    </Section>
  );
};

export default SubscribeModals;
