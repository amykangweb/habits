class Api::V1::HabitsController < ApplicationController
  respond_to :json

  def index
    @habits = Habit.all
    render json: { habits: @habits }
  end

  def update
    @habit = Habit.find(params[:id])
    @habits = Habit.all
    # @habits = @habits.delete(@habit)
    @habits = @habits.reject{ | h | h.id == @habit.id }
    render json: { habits: @habits }
  end
end
