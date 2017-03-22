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

ActiveRecord::Schema.define(version: 20170322204929) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "items", force: :cascade do |t|
    t.integer  "owner_id",    null: false
    t.string   "name",        null: false
    t.text     "description", null: false
    t.string   "photo_url",   null: false
    t.string   "category",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "trades", force: :cascade do |t|
    t.integer  "requester_id",    null: false
    t.integer  "receiver_id",     null: false
    t.integer  "request_item_id", null: false
    t.integer  "offer_item_id",   null: false
    t.string   "status",          null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["receiver_id"], name: "index_trades_on_receiver_id", using: :btree
    t.index ["requester_id"], name: "index_trades_on_requester_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "fname"
    t.string   "lname"
    t.string   "address"
    t.string   "phone_number"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
