class WeightclassSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight
  has_many :fighters
end
