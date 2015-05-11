# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150511174338) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beers", force: :cascade do |t|
    t.string  "beer_name"
    t.string  "type"
    t.string  "description"
    t.integer "rating"
    t.integer "abv"
    t.integer "ibu"
    t.string  "beer_pic"
    t.integer "brewery_id"
    t.integer "user_id"
  end

  add_index "beers", ["brewery_id"], name: "index_beers_on_brewery_id", using: :btree
  add_index "beers", ["user_id"], name: "index_beers_on_user_id", using: :btree

  create_table "breweries", force: :cascade do |t|
    t.string "brewery_name"
    t.string "logo"
    t.string "description"
    t.string "location"
    t.string "menu"
  end

  create_table "tours", force: :cascade do |t|
    t.integer "user_id"
    t.integer "brewery_id"
  end

  add_index "tours", ["brewery_id"], name: "index_tours_on_brewery_id", using: :btree
  add_index "tours", ["user_id"], name: "index_tours_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string "oath_user_id"
    t.string "token"
    t.string "secret"
  end

  add_foreign_key "beers", "breweries"
  add_foreign_key "beers", "users"
  add_foreign_key "tours", "breweries"
  add_foreign_key "tours", "users"
end
