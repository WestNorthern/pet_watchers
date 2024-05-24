import { Component } from 'react';
import h from './htm_create_element';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    if (confirm('Are you sure you want to delete this booking?')) {
      fetch(`/bookings/${this.props.booking.id}`, {
        method: 'DELETE',
        headers: {
          'X-CSRF-Token': document.querySelector('[name=csrf-token]').content,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.props.onDelete(this.props.booking.id);
          } else {
            alert('There was an error deleting the booking.');
          }
        });
    }
  }

  render() {
    const { booking } = this.props;
    const styles = {
      container: {
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
      },
      button: {
        marginRight: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
      },
      deleteButton: {
        backgroundColor: '#f44336',
      },
    };

    return h`
      <div style=${styles.container}>
        <p><strong>First Name:</strong> ${booking.first_name}</p>
        <p><strong>Last Name:</strong> ${booking.last_name}</p>
        <p><strong>Animal Name:</strong> ${booking.animal_name}</p>
        <p><strong>Animal Type:</strong> ${booking.animal_type}</p>
        <p><strong>Hours Requested:</strong> ${booking.hours_requested}</p>
        <p><strong>Date of Service:</strong> ${booking.date_of_service}</p>
        <p><strong>Total Cost:</strong> $${booking.total_cost}</p>
      </div>
    `;
  }
}

export default Booking;
