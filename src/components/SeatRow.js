import {Component} from 'react';
import Seat from './Seat.js';
import styles from './SeatRow.css';

export default class SeatRow extends Component {
  constructor(props) {
    super(props);
    const {row} = this.props;
    const maxSeat = (row - 1) * 2 + 50;
    this.state = {
      seats: [...Array(maxSeat).keys()],
    };
  }
  render() {
    const {row} = this.props;
    const {seats} = this.state;
    return (
      <div className={styles.seatRow}>
        {seats.map(col => (
          <Seat row={row} col={col} />
        ))}
      </div>
    );
  }
}
