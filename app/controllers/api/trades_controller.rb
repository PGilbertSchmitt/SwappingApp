class Api::TradesController < ApplicationController
  def index
    @incoming_trades = current_user.incoming_trades
    @outgoing_trades = current_user.outgoing_trades
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
    @trade = Trade.find_by(id: params[:id])

    if @trade.update_attributes(trade_params)
      render :show
    else
      render json: @trade.errors.full_messages, status: 422
    end
  end

  def destroy
    @trade = Trade.find_by(id: params[:id]).includes(:requester, :receiver)

    if @trade
      if current_user.id == trade.requester.id || 
         current_user.id == trade.receiver.id

        @trade.destroy
      end
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
