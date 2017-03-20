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
    if category != "all"
      item_params[:category] = Item.categories.include?(category) ? category : nil
    end

    p item_params

    Item.where(item_params)
  end
end
