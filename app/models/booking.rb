class Booking < ApplicationRecord
  validates :first_name, :last_name, :animal_name, :animal_type, :hours_requested, :date_of_service, :total_cost, presence: true
  validates :animal_type, inclusion: { in: %w(Dog Cat), message: "%{value} is not a valid animal type" }
  validates :hours_requested, numericality: { only_integer: true, greater_than_or_equal_to: 2, less_than_or_equal_to: 8 }
  validates :total_cost, numericality: true
end
