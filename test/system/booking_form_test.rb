require 'application_system_test_case'

class BookingFormTest < ApplicationSystemTestCase
  test 'visiting the booking form page' do
    visit new_booking_path

    # Verify we are on the correct page
    assert_selector 'h1', text: 'New Booking'

    # Fill in the form
    fill_in 'firstName', with: 'Vincent'
    fill_in 'lastName', with: 'Haskin'
    fill_in 'animalName', with: 'Smiley'
    select 'Dog', from: 'animalType'
    fill_in 'hoursRequested', with: 5
    fill_in 'dateOfService', with: '12/25/2025'

    # Submit the form
    find('button[type="submit"]', visible: :visible).click
    
    # Retrieve the last booking and wait for the new path to be loaded

    # Verify that the correct information is displayed on the booking show page
    assert_text 'Vincent'
    assert_text 'Haskin'
    assert_text 'Smiley'
    assert_text 'Dog'
    assert_text '5'
    assert_text '2025-12-25'

    # Additional assertions to ensure the data is correctly persisted
    booking = Booking.last
    assert_equal 'Vincent', booking.first_name
    assert_equal 'Haskin', booking.last_name
    assert_equal 'Smiley', booking.animal_name
    assert_equal 'Dog', booking.animal_type
    assert_equal 5, booking.hours_requested
    assert_equal Date.parse('2025-12-25'), booking.date_of_service
  end
end
