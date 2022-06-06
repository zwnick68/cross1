balls = JSON.parse(File.read('db/bantamweight.json'))
balls.each do |record|
    Fighter.create!(record)
end

Promotion.create(name: "UFC")
Weightclass.create(name: "Bantamweight", weight: 135)

# User.create(username: "nicky", password: "ye")
# User.create(username: "r", password: "r")
# User.create(username: "d", password: "d")

puts "done seedings broi"