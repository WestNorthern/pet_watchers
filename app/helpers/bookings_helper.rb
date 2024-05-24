module BookingsHelper
    def calculate_total_cost(animal_type, hours_requested)
      raise ArgumentError, "Invalid animal type" unless %w[Dog Cat].include?(animal_type)
      raise ArgumentError, "Hours requested cannot be negative" if hours_requested.negative?
  
      base_rate = 20.0
      animal_rate = animal_type == 'Dog' ? 10 : 5
      base_rate + (animal_rate * hours_requested)
    end
  end
  
