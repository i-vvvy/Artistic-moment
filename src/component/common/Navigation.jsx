import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModals from './LoginModals';
import { UserAuth } from '../../context/AuthContext';
import styles from './Navigation.module.css';
import { FaUserCheck } from 'react-icons/fa';
import Menu from './Menu';

const Navigation = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  };

  const goMyList = () => {
    navigate(`/myList`);
  };

  const goSearch = () => {
    navigate(`/search`);
  };

  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2 onClick={goMain}>Artistic Moment</h2>
        </div>
        <div className={styles.desktopButton}>
          {user ? (
            <div className={styles.handleButton}>
              <button onClick={goSearch}>SEARCH</button>
              <button onClick={goMyList}>RECORD-LIST</button>
              <button onClick={handleSignOut}>LOGOUT</button>
            </div>
          ) : (
            <div className={styles.handleButton}>
              <button onClick={goSearch}>SEARCH</button>
              <button>
                <LoginModals />
              </button>
            </div>
          )}
        </div>
        <div className={styles.tabletButton}>
          <button>
            {user ? (
              <FaUserCheck size="26" color="#777777" onClick={handleSignOut} />
            ) : (
              <LoginModals />
            )}
          </button>

          <button className={styles.fabars}>
            <Menu
              goMyList={goMyList}
              goSearch={goSearch}
              user={user}
              logOut={logOut}
              handleSignOut={handleSignOut}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
