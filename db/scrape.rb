require 'nokogiri'
require 'open-uri'

url = 'https://pedalboardplanner.com/'
        brands_list = []
        html = Nokogiri::HTML5(URI.open(url))
        html.css('div.menuDialog > h2').each_with_index do |item,item_index|
            brand = {company_name: nil}
            # puts item.content
            brand[brand.keys[item_index]] = item.content
            brands_list << brand
        end
puts brands_list