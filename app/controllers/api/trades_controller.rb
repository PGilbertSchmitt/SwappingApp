class Api::TradesController < ApplicationController
  def index
    @outgoing_trades = current_user
      .outgoing_trades
      .where(status: "PENDING")
      .order("created_at DESC")
    @incoming_trades = current_user
      .incoming_trades
      .where(status: "PENDING")
      .order("created_at DESC")
  end

  def create
    @trade = Trade.new(trade_params)

    if @trade.save
      render :show
    else
      render json: @trade.errors.full_messages, status: 422
    end
  end

  def update
    @trade = current_user.incoming_trades.find_by(id: params[:id])

    unless @trade
      render json: ["No such trade"], status: 404
      return
    end

    if @trade.update_attributes(status: "COMPLETE")
      # The magic
      swap = helpers.swap_owners(@trade)
      p swap ? "Swap successful" : "Swap failed"
      
      render :show
    else
      render json: @trade.errors.full_messages, status: 422
    end
  end

  def destroy
    @trade = Trade.includes(:requester, :receiver).find_by(id: params[:id])

    if @trade && (current_user.id == @trade.requester.id ||
                  current_user.id == @trade.receiver.id)

      @trade.destroy
      render :show
    else
      render json: ["Trade not found"], status: 404
    end
  end

  private

  def trade_params
    params.require(:trade).permit(
      :requester_id, 
      :receiver_id, 
      :request_item_id,
      :offer_item_id
    )
  end
end
