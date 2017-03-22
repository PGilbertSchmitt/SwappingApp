module Api::ItemsHelper
  def search_items
    # Available search criteria:
    # - user_id (any)
    # - category (inclusion in list)

    item_params = {}
    # For each item, only incude in item_params if it exists,
    # otherwise the database specificaly looks for NULL values

    item_params[:owner_id] = params[:user_id] if params[:user_id]

    category = params[:category]
    if category && category != "all"
      item_params[:category] = []
      Item.categories.each do |cat|
        item_params[:category].push(cat) if category[cat] == "true"
      end
      item_params.delete(:category) if item_params[:category].empty?
    end

    # Matching words that show up in items names and descriptions,
    # and ordering them based on number of keywords each has

    # No work if unnecessary
    if params[:]

    p params[:search_words]

    Item.where(item_params)
  end
end
