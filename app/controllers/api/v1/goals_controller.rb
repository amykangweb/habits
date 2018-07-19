class Api::V1::GoalsController < ApplicationController
  respond_to :json

  def index
    @goals = Goal.all
  end

  def create
    # @goal = Goal.new(goal_params)
    # @goal.last_updated_at = Time.now
    # if @goals.save
    #   render json: { status: 200, result: @goal }
    # else
    #   render json: { status: 400 }
    # end
    render json: { status: 200, result: 'success' }
  end

  private

  def goal_params
    params.require(:goal).permit(:name, :desc)
  end
end
