import React, { Component } from 'react';

import ItemIndex from '../items/item_index_container';
import Search from './search_container';

class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-page">
        <h1 className="search-header">Find what you're into</h1>

        <input type="text" id="search-bar" placeholder="What's your poison?" />

        <div className="search-container">
          <Search />

          <ItemIndex fetchParams={{ category: 'all' }} search={true} />
        </div>
      </div>
    );
  }
}

export default SearchPage;