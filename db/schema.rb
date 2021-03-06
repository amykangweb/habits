# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_07_19_004924) do

  create_table "goals", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", default: "in progress"
    t.text "desc"
    t.integer "priority", default: 1
    t.datetime "destroyed_at"
    t.datetime "last_updated_at"
  end

  create_table "habits", force: :cascade do |t|
    t.string "name"
    t.text "desc"
    t.datetime "destroyed_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "last_updated_at"
    t.integer "goals_id"
    t.index ["goals_id"], name: "index_habits_on_goals_id"
  end

end
