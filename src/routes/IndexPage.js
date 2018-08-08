import React from 'react';
import {connect} from 'dva';
import SeatRow from '../components/SeatRow';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <SeatRow row={1} />
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
