import React from 'react';
import ConcertItem from './ConcertItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './SearchList.module.css';

const SearchList = ({ concert, search }) => {
  const filteredList = concert.filter(item => {
    return (
      item.TITLE.replace(' ', '')
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()) ||
      item.PLACE_NAME.replace(' ', '')
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    );
  });

  return (
    <Container className={styles.container}>
      {search ? (
        <Row className={styles.row}>
          {filteredList.map((item, index) => (
            <Col xs={12} md={6} xl={4} className={styles.col} key={index}>
              <ConcertItem item={item} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className={styles.noContent}>Search for "love" 🤍</div>
      )}
    </Container>
  );
};

export default SearchList;
