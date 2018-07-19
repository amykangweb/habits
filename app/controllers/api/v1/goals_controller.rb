class Api::V1::GoalsController < ApplicationController
  respond_to :json

  def index
    @goals = Goal.all
  end
end
