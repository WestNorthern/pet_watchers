import { Component } from 'react';
import h from './htm_create_element';
import PriceDisplay from 'components/price_display';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      animalName: '',
      animalType: 'Dog',
      hoursRequested: 2,
      dateOfService: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  allFieldsFilled() {
    const { firstName, lastName, animalName, hoursRequested, dateOfService } = this.state;
    return firstName && lastName && animalName && hoursRequested && dateOfService;
  }

  render() {
    const styles = {
      formComponent: {
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9'
      },
      formGroup: {
        marginBottom: '15px'
      },
      label: {
        display: 'block',
        marginBottom: '5px'
      },
      input: {
        width: '100%',
        padding: '10px',
        boxSizing: 'border-box'
      },
      button: {
        width: '100%',
        padding: '10px',
        marginTop: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        boxSizing: 'border-box'
      },
      buttonHover: {
        backgroundColor: '#45a049'
      }
    };

    return h`
      <div style=${styles.formComponent}>
        <form>
          <div style=${styles.formGroup}>
            <label style=${styles.label}>First Name:</label>
            <input
              type="text"
              name="firstName"
              value=${this.state.firstName}
              onChange=${this.handleChange}
              onBlur=${this.handleChange}
              style=${styles.input}
            />
          </div>
          <div style=${styles.formGroup}>
            <label style=${styles.label}>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value=${this.state.lastName}
              onChange=${this.handleChange}
              onBlur=${this.handleChange}
              style=${styles.input}
            />
          </div>
          <div style=${styles.formGroup}>
            <label style=${styles.label}>Animal Name:</label>
            <input
              type="text"
              name="animalName"
              value=${this.state.animalName}
              onChange=${this.handleChange}
              onBlur=${this.handleChange}
              style=${styles.input}
            />
          </div>
          <div style=${styles.formGroup}>
            <label style=${styles.label}>Animal Type:</label>
            <select
              name="animalType"
              value=${this.state.animalType}
              onChange=${this.handleChange}
              onBlur=${this.handleChange}
              style=${styles.input}
            >
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
          </div>
          <div style=${styles.formGroup}>
            <label style=${styles.label}>Hours Requested (min 2, max 8):</label>
            <input
              type="number"
              name="hoursRequested"
              min="2"
              max="8"
              value=${this.state.hoursRequested}
              onChange=${this.handleChange}
              onBlur=${this.handleChange}
              style=${styles.input}
            />
          </div>
          <div style=${styles.formGroup}>
            <label style=${styles.label}>Date of Service:</label>
            <input
              type="date"
              name="dateOfService"
              value=${this.state.dateOfService}
              onChange=${this.handleChange}
              onBlur=${this.handleChange}
              style=${styles.input}
            />
          </div>
          ${this.allFieldsFilled() ? h`<${PriceDisplay} formData=${this.state} />` : null}
          ${this.allFieldsFilled() ? h`<button type="submit" style=${styles.button} onMouseOver=${(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor} onMouseOut=${(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}>Book It!</button>` : null}        </form>
      </div>
    `;
  }
}

export default BookingForm;

