json.extract! item,
              :id,
              :name,
              :description,
              :photo_url,
              :category

json.owner item.owner, 
           :address, 
           :email, 
           :fname, 
           :lname,
           :username,
           :phone_number,
           :id