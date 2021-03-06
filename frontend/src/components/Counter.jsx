import React, { Component, PropTypes } from 'react';
import styles from './Counter.css';

const Counter = ({ count, onClick, onClickReset, onSave }) => (
  <div className={styles.base}>
    <div className={styles.header}>
      <h2>Welcome to React</h2>
    </div>
    <p
      className={styles.intro}
      onClick={onClick}
    >
      Clicked: {count}!
    </p>
    <p
      className={styles.reset}
      onClick={onClickReset}
    >
      Reset!
    </p>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Counter;
