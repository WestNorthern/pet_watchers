class CreateBookings < ActiveRecord::Migration[7.1]
  def change
    create_table :bookings do |t|
      t.string :first_name
      t.string :last_name
      t.string :animal_name
      t.string :animal_type
      t.integer :hours_requested
      t.date :date_of_service
      t.float :total_cost

      t.timestamps
    end
  end
end
