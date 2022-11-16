import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from 'react-icons/fa';
import styles from './Menu.module.css';

const Menu = ({ user, logOut }) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleMenuClose = () => setShow(false);
  const handleMenuShow = () => setShow(true);

  const goMyList = () => {
    navigate(`/myList`);
    handleMenuClose();
  };

  const goSearch = () => {
    navigate(`/search`);
    handleMenuClose();
  };

  return (
    <div>
      <div onClick={handleMenuShow}>
        <FaBars size="26" color="#777777" />
      </div>

      <Offcanvas
        className={styles.off}
        show={show}
        onHide={handleMenuClose}
        placement="end"
      >
        <div className={styles.menu}>
          {user ? (
            <div className={styles.handleButton}>
              <button onClick={goSearch}>SEARCH</button>
              <button onClick={goMyList}>RECORD-LIST</button>
            </div>
          ) : (
            <div className={styles.handleButton}>
              <button onClick={goSearch}>SEARCH</button>
            </div>
          )}
        </div>
      </Offcanvas>
    </div>
  );
};

export default Menu;
