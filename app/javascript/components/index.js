import { render } from "react-dom"
import h from "components/htm_create_element"

import BookingForm from "components/booking_form"
import BookingsList from "components/bookings_list"

document.addEventListener('turbo:load', () => {
  const bookingPageRoot = document.getElementById('booking-root');
  const adminPageRoot = document.getElementById('admin-root');
  if (bookingPageRoot) {
    render(
        h`<${BookingForm} />`,
        bookingPageRoot
    )
  }
  if (adminPageRoot) {
    render(
        h`<${BookingsList} />`,
        adminPageRoot
    )
  }
});
