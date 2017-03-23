json.array! @items do |item|
  json.extract! item, 
                :id,
                :name,
                :photo_url
  
  json.owner_name item.owner.username
end