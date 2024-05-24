require 'test_helper'

class BookingsHelperTest < ActionView::TestCase
  include BookingsHelper

  test "calculates total cost for dogs" do
    assert_equal 70.0, calculate_total_cost('Dog', 5)
    assert_equal 120.0, calculate_total_cost('Dog', 10)
  end

  test "calculates total cost for cats" do
    assert_equal 45.0, calculate_total_cost('Cat', 5)
    assert_equal 70.0, calculate_total_cost('Cat', 10)
  end

  test "calculates total cost with zero hours" do
    assert_equal 20.0, calculate_total_cost('Dog', 0)
    assert_equal 20.0, calculate_total_cost('Cat', 0)
  end

  test "calculates total cost with minimum hours" do
    assert_equal 30.0, calculate_total_cost('Dog', 1)
    assert_equal 25.0, calculate_total_cost('Cat', 1)
  end

  test "calculates total cost with maximum hours" do
    assert_equal 1020.0, calculate_total_cost('Dog', 100)
    assert_equal 520.0, calculate_total_cost('Cat', 100)
  end

  test "calculates total cost with invalid animal type" do
    assert_raises ArgumentError do
      calculate_total_cost('Fish', 5)
    end
  end

  test "calculates total cost with negative hours" do
    assert_raises ArgumentError do
      calculate_total_cost('Dog', -5)
    end
  end
end

