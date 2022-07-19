flyweight = JSON.parse(File.read('db/FighterJSON/flyweight.json'))
flyweight.each do |record|
    Fighter.create!(record)
end


bantamweight = JSON.parse(File.read('db/FighterJSON/bantamweight.json'))
bantamweight.each do |record|
    Fighter.create!(record)
end

featherweight = JSON.parse(File.read('db/FighterJSON/featherweight.json'))
featherweight.each do |record|
    Fighter.create!(record)
end

lightweight = JSON.parse(File.read('db/FighterJSON/lightweight.json'))
lightweight.each do |record|
    Fighter.create!(record)
end

welterweight = JSON.parse(File.read('db/FighterJSON/welterweight.json'))
welterweight.each do |record|
    Fighter.create!(record)
end

middleweight = JSON.parse(File.read('db/FighterJSON/middleweight.json'))
middleweight.each do |record|
    Fighter.create!(record)
end

lightHeavyweight = JSON.parse(File.read('db/FighterJSON/lightheavyweight.json'))
lightHeavyweight.each do |record|
    Fighter.create!(record)
end

heavyweight = JSON.parse(File.read('db/FighterJSON/heavyweight.json'))
heavyweight.each do |record|
    Fighter.create!(record)
end

strawweight = JSON.parse(File.read('db/FighterJSON/strawweight.json'))
strawweight.each do |record|
    Fighter.create!(record)
end


Promotion.create(name: "UFC")
Weightclass.create(name: "Flyweight", weight: 125)
Weightclass.create(name: "Bantamweight", weight: 135)
Weightclass.create(name: "Featherweight", weight: 145)
Weightclass.create(name: "Lightweight", weight: 155)
Weightclass.create(name: "Welterweight", weight: 170)
Weightclass.create(name: "Middleweight", weight: 185)
Weightclass.create(name: "LightHeavyweight", weight: 205)
Weightclass.create(name: "Heavyweight", weight: 265)
Weightclass.create(name: "Women's Straweight", weight: 115)
Weightclass.create(name: "Women's Flyweight", weight: 125)
Weightclass.create(name: "Women's Bantamweight", weight: 135)
Weightclass.create(name: "Women's Featherweight", weight: 145)

# User.create(username: "nicky", password: "ye")
# User.create(username: "r", password: "r")
# User.create(username: "d", password: "d")

puts "done seedings broi"