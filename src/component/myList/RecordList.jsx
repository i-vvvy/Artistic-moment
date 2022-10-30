import React from 'react';
import RecordItem from './RecordItem';
import styles from './RecordList.module.css';

const RecordList = ({ recordList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.count}>
        There's {recordList.length} Artistic Moment
      </div>
      {recordList.length < 1 ? (
        <div className={styles.noList} />
      ) : (
        <div>
          {recordList.map(item => (
            <RecordItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

RecordList.defaultProps = {
  recordList: [],
};

export default RecordList;
