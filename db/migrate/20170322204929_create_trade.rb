class CreateTrade < ActiveRecord::Migration[5.0]
  def change
    create_table :trades do |t|
      t.integer :requester_id, null: false
      t.integer :receiver_id, null: false
      t.integer :request_item_id, null: false
      t.integer :offer_item_id, null: false
      t.string :status, null: false

      t.timestamps
    end

    add_index :trades, :requester_id
    add_index :trades, :receiver_id
  end
end
