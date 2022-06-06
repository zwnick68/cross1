# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_06_06_160007) do

  create_table "fighters", force: :cascade do |t|
    t.string "nickname"
    t.string "name"
    t.string "ranking"
    t.string "fight_record"
    t.string "age"
    t.string "height"
    t.string "weight"
    t.string "octagon_debut"
    t.string "reach"
    t.string "leg_reach"
    t.string "strAcc"
    t.string "grpAcc"
    t.string "slpm"
    t.string "sabpm"
    t.string "tdAvg"
    t.string "subAvg"
    t.string "strDef"
    t.string "tdDef"
    t.string "knockdown_ratio"
    t.string "avgFt"
    t.string "ssbPS"
    t.string "ssbPC"
    t.string "ssbPG"
    t.string "wbwKO"
    t.string "wbwDec"
    t.string "wbwSub"
    t.string "ssbTH"
    t.string "ssbTB"
    t.string "ssbTL"
    t.string "img"
    t.integer "weightclass_id"
    t.integer "promotion_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "promotions", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "weightclasses", force: :cascade do |t|
    t.string "name"
    t.integer "weight"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
