import { render } from "react-dom"
import h from "components/htm_create_element"

import BookingForm from "components/booking_form"

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
        h`<h1>You are very cool. You are an admin.</h1>`,
        adminPageRoot
    )
  }
});
