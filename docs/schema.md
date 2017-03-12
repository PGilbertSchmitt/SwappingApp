# Schema

## Users

| Column Name     | Datatype | Validation                |
|-----------------|----------|---------------------------|
| id              | INTEGER  | not null, primary key     |
| email           | STRING   | not null, indexed, unique |
| fname           | STRING   |                           |
| lname           | STRING   |                           |
| phone_number    | STRING   |                           |
| address         | STRING   |                           |
| password_digest | STRING   | not null                  |
| session_token   | STRING   | not null, indexed, unique |

## Items

| Column Name | Datatype | Validation            |
|-------------|----------|-----------------------|
| id          | INTEGER  | not null, primary key |
| sender_id   | INTEGER  | not null              |
| name        | STRING   | not null, indexed     |
| description | TEXT     | not null              |
| photo       | BLOB     | not null              |
| category    | STRING   | not null, inclusion   |

- If multiple photos are allowed per item, I'll have to use
seperate photos table

- Category is currently limited to:
  - Potion
  - Weapon
  - Armor
  - Garb
  - Gear
  - Ingredient
  - Familiar
  - Artefact
  - Spell

## TradeRequests

| Column Name      | Datatype | Validation            |
|------------------|----------|-----------------------|
| id               | INTEGER  | not null, primary key |
| sender_id        | INTEGER  | not null, indexed     |
| receiver_id      | INTEGER  | not null, indexed     |
| sender_item_id   | INTEGER  | not null              |
| receiver_item_id | INTEGER  |                       |
| trade_status     | STRING   | not null, inclusion   |

- Trade Status is currently limited to:
  - Begin ( A initiates trade for B's item )
  - Pending ( B requests A's item )
  - Complete ( A accepts and completes the trade )

- Should have a trigger that when a trade is complete, no other
trade requests can involve either item, and will be PURGED.