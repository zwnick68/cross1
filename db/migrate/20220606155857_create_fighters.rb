class CreateFighters < ActiveRecord::Migration[6.1]
  def change
    create_table :fighters do |t|
      t.string :nickname
      t.string :name
      t.string :ranking
      t.string :fight_record
      t.string :age
      t.string :height
      t.string :weight
      t.string :octagon_debut
      t.string :reach
      t.string :leg_reach
      t.string :strAcc
      t.string :grpAcc
      t.string :slpm
      t.string :sabpm
      t.string :tdAvg
      t.string :subAvg
      t.string :strDef
      t.string :tdDef
      t.string :knockdown_ratio
      t.string :avgFt
      t.string :ssbPS
      t.string :ssbPC
      t.string :ssbPG
      t.string :wbwKO
      t.string :wbwDec
      t.string :wbwSub
      t.string :ssbTH
      t.string :ssbTB
      t.string :ssbTL
      t.string :img
      t.integer :weightclass_id
      t.integer :promotion_id

      t.timestamps
    end
  end
end
