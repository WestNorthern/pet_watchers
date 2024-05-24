import { Component } from 'react';
import h from './htm_create_element';
import Booking from './booking';

class BookingsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      sortKey: 'date_of_service',
    };
    this.loadBookings = this.loadBookings.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    this.loadBookings();
  }

  loadBookings() {
    fetch('/bookings.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ bookings: data });
      });
  }

  handleDelete(id) {
    this.setState({
      bookings: this.state.bookings.filter(booking => booking.id !== id),
    });
  }

  handleSort(sortKey) {
    const sortedBookings = this.state.bookings.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
      return 0;
    });
    this.setState({ bookings: sortedBookings, sortKey });
  }

  render() {
    const { bookings, sortKey } = this.state;
    const styles = {
      container: {
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
      },
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
      },
      sortButton: {
        marginRight: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
      },
    };

    return h`
      <div style=${styles.container}>
        <div style=${styles.header}>
          <h1>Bookings</h1>
          <div>
            <button style=${styles.sortButton} onClick=${() => this.handleSort('date_of_service')}>Sort by Date</button>
            <button style=${styles.sortButton} onClick=${() => this.handleSort('animal_name')}>Sort by Animal Name</button>
            <button style=${styles.sortButton} onClick=${() => this.handleSort('hours_requested')}>Sort by Hours</button>
            <button style=${styles.sortButton} onClick=${() => this.handleSort('total_cost')}>Sort by Total Cost</button>
          </div>
        </div>
        ${bookings.map(booking => h`<${Booking} key=${booking.id} booking=${booking} onDelete=${this.handleDelete} />`)}
      </div>
    `;
  }
}

export default BookingsList;
