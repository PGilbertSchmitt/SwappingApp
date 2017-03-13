# SwappinUp

SwappinUp is a full-stack web application inspired by Etsy. It's built on top of a React-Redux frontend, Ruby-on-Rails backend, and Postgresql database.

## Features

### Items

Items are stored in the database with a column for `name`, `sender_id` (the owner), `description`, a single `photo`, and the `category` to which the item belongs.

There are several views in which items are seen:

#### Homepage

![Homepage Wireframe](wireframes/homepage.png)

#### Garage ( a users's personal store of items )

![Garage Wireframe](wireframes/garage.png)

#### Search

![Search Wireframe](wireframes/search.png)

### Trades

Trades are stored in the database with an `id` for the sender and receiver (the person who initiated the trade and the other user respectively), as well as an `id` for their respective items. The trade has three states:

- Begin
- Pending
- Complete

If a trade completes that would invalidate any other beginning or pending trades, they will be purged from the database.

#### Trades page

![Trades Wireframe](wireframes/trade_requests.png)