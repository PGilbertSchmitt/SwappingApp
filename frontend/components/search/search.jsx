import React, { Component } from 'react';
import { merge, isEqual } from 'lodash';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
    this.props.cleanSearchParams();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveSearchParam(this.state);
  }

  updateCheckbox(e) {
    const newState = {
      category: merge(
        {},
        this.state.category,
        { [e.target.value]: e.target.checked }
      )
    };

    // this.setState(newState);

    // For dynamic searching
    this.setState(newState, () => {
      this.props.receiveSearchParam(this.state);
    });
  }

  render() {
    return (
      <div className="search-params">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              onChange={this.updateCheckbox}
              type="checkbox" 
              className="category-check" 
              value="clothing" />
            Clothing
          </label>
          <label>
            <input
              onChange={this.updateCheckbox}
              type="checkbox" 
              className="category-check" 
              value="jewelry" />
            Jewelry
          </label>
          <label>
            <input
              onChange={this.updateCheckbox}
              type="checkbox" 
              className="category-check" 
              value="kids" />
            Kids
          </label>
          <label>
            <input
              onChange={this.updateCheckbox}
              type="checkbox" 
              className="category-check" 
              value="entertainment" />
            Entertainment
          </label>
          <label>
            <input
              onChange={this.updateCheckbox}
              type="checkbox" 
              className="category-check" 
              value="home_and_living" />
            Home and Living
          </label>
          <label>
            <input
              onChange={this.updateCheckbox}
              type="checkbox" 
              className="category-check" 
              value="electronics" />
            Electronics
          </label>
          {/*<input type="submit" className="primary-button form-button u-full-width" />*/}
        </form>
      </div>
    );
  }
}

export default Search;