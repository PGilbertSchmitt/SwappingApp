## Component Hierarchy

- AuthForm
- AuthFormContainer
  - AuthForm
- Banner
- Categories
- Error
- ErrorContainer
  - Error
- FeaturedContainer
  - ItemIndex
- Garage
  - ItemsIndex
  - ItemForm
- Header
- HeaderContainer
  - Header
- HomeContainer
  - HeaderContainer
  - Categories
  - Banner
  - RecommendationsContainer
  - FeaturedContainer
- ItemForm
- ItemIndex
  - ItemBox
- ItemBox
- Links
- Profile
  - HeaderContainer
  - Categories
  - UserSidebar
  - UserHeader
  - About
  - Wishlist
- Recommendations
  - ItemsIndex
- RecommendationsContainer
  - Recommendations
- Search
  - HeaderContainer
  - Categories
  - SearchRefinementContainer
  - SearchResultsContainer
- SearchRefinementContainer
  - SearchRefinementForm
- SearchRefinementForm
- SearchResultsContainer
  - ItemIndex
- Trades
  - Header
  - IncomingPendingContainer
  - IncomingRequestContainer
  - OutgoingPendingContainer
  - OutgoingRequestContainer
- UserSidebar
  - UserDataContainer
- UserDataContainer
- UserLinks
- Wishlist

- IncomingPendingContainer
  - IncomingPendingIndex
- IncomingPendingIndex
  - IncomingPendingItem
- IncomingPendingItem

- IncomingRequestContainer
  - IncomingRequestIndex
- IncomingRequestIndex
  - IncomingRequestItem
- IncomingRequestItem

- OutgoingPendingContainer
  - OutgoingPendingIndex
- OutgoingPendingIndex
  - OutgoingPendingItem
- OutgoingPendingItem

- OutgoingRequestContainer
  - OutgoingRequestIndex
- OutgoingRequestIndex
  - OutgoingRequestItem
- OutgoingRequestItem

## Routes

| Path          | Component         |
|---------------|-------------------|
| /             | AuthFormContainer |
| /home         | HomeContainer     |
| /search       | Search            |
| /:user        | Profile           |
| /:user/garage | Garage            |
| /trades       | Trades            |