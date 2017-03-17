class Api::ItemsController < ApplicationController
  def index
    @items = Item.all
  end
  
  def show
    @item = Item.find_by(id: params[:id])
  end
  
  def create
    @item = Item.new(item_params)
    @item.owner_id = current_user.id

    if @item.save
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end
  
  def update
    @item = Item.find_by(id: params[:id])

    if @item.update_attributes(item_params)
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @item = Item.find_by(id: params[:id])

    if @item
      @item.destroy
      render :show
    else
      render json: ["No such item"], status: 404
    end
  end
  
  private

  def item_params
    params.require(:item).permit(
      :name,
      :description,
      :photo_url,
      :category
    )
  end
end