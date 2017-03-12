# API Endpoints

## HTML

### Root

| Method | Path | Action |
|--------|------|--------|
| GET    | /    | #root  |

## JSON

### Users

| Method |         Path         |  Action |
|--------|----------------------|---------|
| GET    | /api/users/:id/items | #index  |
| POST   | /api/users           | #create |
| PATCH  | /api/users           | #update |

### Session

| Method |     Path     |  Action  |
|--------|--------------|----------|
| POST   | /api/session | #create  |
| DELETE | /api/session | #destroy |

### Item

| Method |      Path      |  Action  |
|--------|----------------|----------|
| GET    | /api/items     | #index   |
| POST   | /api/items     | #create  |
| GET    | /api/items/:id | #show    |
| PATCH  | /api/items/:id | #update  |
| DELETE | /api/items/:id | #destroy |

### TradeRequest

| Method | Path                   | Action   |
|--------|------------------------|----------|
| GET    | /api/trade_request     | #index   |
| POST   | /api/trade_request     | #create  |
| DELETE | /api/trade_request/:id | #destroy |