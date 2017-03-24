module Api::ItemsHelper
  def search_items
    # Available search criteria:
    # - user_id (any)
    # - category (inclusion in list)

    item_params = {}
    # For each item, only incude in item_params if it exists,
    # otherwise the database specificaly looks for NULL values
    user_id = params[:user_id]
    item_id = params[:item_id]
    p item_id

    item_params[:owner_id] = params[:user_id] unless user_id && user_id.empty?
    item_params[:id] = params[:item_id] if item_id

    category = params[:category]
    if category && category != "all"
      item_params[:category] = []
      Item.categories.each do |cat|
        item_params[:category].push(cat) if category[cat] == "true"
      end
      item_params.delete(:category) if item_params[:category].empty?
    end

    items = Item.where(item_params)

    # If non_self is true, don't include current_user's items
    if current_user && params[:non_self] == "true"
      items = items.where.not(owner_id: current_user.id)
    end

    # Matching words that show up in items names and descriptions,
    # and ordering them based on number of keywords each has

    # No work if unnecessary
    if params[:search_words]
      words = params[:search_words]

      items = freq_list(items, words)
    end

    items
  end

  def freq_list(items, words)
    # Could probably be more efficient, but I would require more done on the 
    # database level
    score_hash = Hash.new(0)
    words.each do |word|
      item_matches = items.where("name ILIKE ?", "%#{word}%")
      item_matches |= items.where("description ILIKE ?", "%#{word}%")
      item_matches.each do |item|
        score_hash[item] += 1
      end
    end
    
    score_hash.keys.sort { |a, b| score_hash[b] <=> score_hash[a] }
  end
end
