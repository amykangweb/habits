class CreateHabits < ActiveRecord::Migration[5.2]
  def change
    create_table :habits do |t|
      t.string :name
      t.text :desc
      t.integer :priority
      t.string :status
      t.datetime :destroyed_at

      t.timestamps
    end
  end
end
