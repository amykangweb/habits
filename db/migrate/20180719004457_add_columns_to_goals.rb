class AddColumnsToGoals < ActiveRecord::Migration[5.2]
  def change
    add_column :goals, :status, :string, default: 'in progress'
    add_column :goals, :desc, :text
    add_column :goals, :priority, :integer, default: 1
    add_column :goals, :destroyed_at, :datetime, default: nil
    add_column :goals, :last_updated_at, :datetime, default: nil
    add_column :habits, :last_updated_at, :datetime, default: nil
    remove_column :habits, :status
    remove_column :habits, :priority
  end
end
