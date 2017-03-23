# == Schema Information
#
# Table name: trades
#
#  id              :integer          not null, primary key
#  requester_id    :integer          not null
#  receiver_id     :integer          not null
#  request_item_id :integer          not null
#  offer_item_id   :integer          not null
#  status          :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class TradeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
