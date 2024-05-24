class BookingsController < ApplicationController
    include BookingsHelper
    before_action :set_booking, only: [:show, :edit, :update, :destroy]
  
    # GET /bookings
    def index
      @bookings = Booking.all
      respond_to do |format|
        format.html
        format.json { render json: @bookings }
      end
    end
  
    # GET /bookings/1
    def show
    end
  
    # GET /bookings/new
    def new
      @booking = Booking.new
    end
  
    # GET /bookings/1/edit
    def edit
    end
  
    # POST /bookings
    def create
        @booking = Booking.new(booking_params)
        @booking.total_cost = calculate_total_cost(@booking.animal_type, @booking.hours_requested)
    
        if @booking.save
          render json: @booking, status: :created
        else
          render json: @booking.errors, status: :unprocessable_entity
        end
    end
  
    # PATCH/PUT /bookings/1
    def update
      @booking.total_cost = calculate_total_cost(@booking.animal_type, @booking.hours_requested)
      if @booking.update(booking_params)
        redirect_to @booking, notice: 'Booking was successfully updated.'
      else
        render :edit
      end
    end
  
    def destroy
      @booking.destroy
      redirect_to bookings_url, notice: 'Booking is toast.'
    end
  
    private
      def set_booking
        @booking = Booking.find(params[:id])
      end
      
      # Nice try, hackers.
      def booking_params
        params.require(:booking).permit(:first_name, :last_name, :animal_name, :animal_type, :hours_requested, :date_of_service)
      end
  
      # Enterprise Quality Back End Pricing Engine
      def calculate_total_cost(animal_type, hours_requested)
        base_rate = 20.0
        animal_rate = animal_type == 'Dog' ? 10 : 5
        base_rate + (animal_rate * hours_requested)
      end
  end
  