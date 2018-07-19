class HabitsBelongToGoals < ActiveRecord::Migration[5.2]
  def change
    add_reference :habits, :goals, index: true
  end
end
