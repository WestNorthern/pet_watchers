module BookingsHelper
    def calculate_total_cost(animal_type, hours_requested)
        base_rate = 20.0
        animal_rate = animal_type == 'Dog' ? 10 : 5
        base_rate + (animal_rate * hours_requested)
    end
end
  
