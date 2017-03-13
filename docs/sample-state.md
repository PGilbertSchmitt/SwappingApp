```js
{
  session: {
    currentUser: {
      id: 1,
      email: pgilbertschmitt@gmail.com
    }
  },
  forms: {
    login: [],
    signup: [],
    addItem: ["Must include item name"]
  },
  items: {
    1: {
      id: 1,
      name: "Toaster",
      description: "Makes toast",
      sender_id: 2,
      photo_url: ".../hE03vj8-CAk3.png",
      category: "Artefacts"
    },
    2: {
      id: 2,
      name: "Shoes",
      description: "You'll run fast in these",
      sender_id: 3,
      photo_url: ".../dtG66syNc_21.png",
      category: "Garb"
    }
  },
  recommendations: {
    3: {
      id: 3,
      name: "Excalibur",
      description: "Won it in a card game",
      sender_id: 4,
      photo_url: ".../452N-c_Zpl41h",
      category: "Weapons"
    }
  },
  trades: {
    incomingRequest: [
      // Any requests other users initiated with me
      // Requires action (Pick one of the sender's item)
      {
        sender_id: 5,       // The user who initiated the request
        receiver_item_id: 4 // One of my items
      }
    ],
    incomingPending: [
      // Any pending trades I started with other users
      // No action (Waiting for acceptance)
      {
        receiver_id: 6,     // User that received the initial request from me
        receiver_item_id: 5 // The item I wanted
        sender_item_id: 4   // One of my items
      }
    ],
    outgoingRequest: [
      // Any requests I initiated with other users
      // No action (Waiting for other user to pick one of my items)
      {
        receiver_id: 7,
        receiver_item_id: 6
      }
    ],
    outgoingPending: [
      // Any pending trades other users initiated with me
      // Requires action (Accept trade)
      {
        sender_id: 8,
        receiver_item_id: 9,
        sender_item_id: 7
      }
    ]
  }
}
```