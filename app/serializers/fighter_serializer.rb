class FighterSerializer < ActiveModel::Serializer
  attributes :id, 
  :name, 
  :nickname, 
  :fight_record, 
  :ranking, 
  :img, 
  :age, 
  :height, 
  :weight, 
  :reach, 
  :leg_reach, 
  :strAcc, 
  :slpm, 
  :tdAvg, 
  :grpAcc, 
  :subAvg, 
  :octagon_debut, 
  :strDef, 
  :tdDef,
  :knockdown_ratio, 
  :avgFt,
  :ssbPS, 
  :ssbPC, 
  :ssbPG,
  :wbwDec, 
  :wbwKO, 
  :wbwSub, 
  :ssbTB, 
  :ssbTH, 
  :ssbTL,
  :sabpm

  belongs_to :weightclass
end