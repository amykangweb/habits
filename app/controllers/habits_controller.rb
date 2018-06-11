class HabitsController < ApplicationController

  def index
  end

  def test
    render json: { greeting: 'hellooooo' }
  end
end
