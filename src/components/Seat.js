import {Component} from 'react';
import styles from './Seat.css';

export default class Seat extends Component {
  render() {
    const {row, col, selected} = this.props;
    if (selected) {
      return <div className={styles.seatSelected} />;
    } else {
      return <div className={styles.seat} />;
    }
  }
}
