require 'application_system_test_case'

class AdminPageTest < ApplicationSystemTestCase
  setup do
    # Create test bookings
    @booking1 = Booking.create!(first_name: 'Captain', last_name: 'Hook', animal_name: 'Smee', animal_type: 'Cat', hours_requested: 3, date_of_service: '2025-10-20', total_cost: 30.0)
    @booking2 = Booking.create!(first_name: 'Patterson', last_name: 'Hood', animal_name: 'Boots', animal_type: 'Dog', hours_requested: 4, date_of_service: '2025-11-15', total_cost: 20.0)
  end

  test 'visiting the admin page' do
    visit bookings_path

    # Verify the page title
    assert_selector 'h1', text: 'Admin Page'

    # Verify the bookings are listed
    assert_text 'Captain'
    assert_text 'Hook'
    assert_text 'Smee'
    assert_text 'Cat'
    assert_text '$30'
    assert_text '2025-10-20'

    assert_text 'Patterson'
    assert_text 'Hood'
    assert_text 'Boots'
    assert_text 'Dog'
    assert_text '$20'
    assert_text '2025-11-15'
  end
end
