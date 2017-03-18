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
    item_params[:category] = category if Item.categories.include?(category)

    Item.where(item_params)
  end
end
