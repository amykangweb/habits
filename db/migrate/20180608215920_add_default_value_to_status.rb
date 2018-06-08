class AddDefaultValueToStatus < ActiveRecord::Migration[5.2]
  def change
    change_column :habits, :status, :string, default: 'in progress'
  end
end
