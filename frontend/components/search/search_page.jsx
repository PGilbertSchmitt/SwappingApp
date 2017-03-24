import React, { Component } from 'react';

import ItemIndex from '../items/item_index_container';
import Search from './search_container';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleKeywords = this.handleKeywords.bind(this);
  }

  handleKeywords(e) {
    if (e.key === "Enter") {
      let words = e.target.value.split(' ');
      this.props.receiveSearchParam({ search_words: null });
      this.props.receiveSearchParam({ search_words: words });
    }
  }

  render() {
    return (
      <div className="search-page">
        <h1 className="search-header">Find what you're into</h1>

        <input
          onKeyDown={this.handleKeywords}
          type="text"
          id="search-bar"
          placeholder="What's your poison?" />

        <div className="search-container">
          <Search />

          <ItemIndex fetchParams={{ category: 'all', non_self: true }} search={true} />
        </div>
      </div>
    );
  }
}

export default SearchPage;