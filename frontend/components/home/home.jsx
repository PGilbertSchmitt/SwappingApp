import React, { Component } from 'react';

import ItemIndex from '../items/item_index_container';
import Banner from '../banner/banner';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.receiveParam({
      user_id: null,
      category: "all",
      non_self: false,
    });
    this.state = {
      currentUserId: null
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      currentUserId: newProps.currentUserId
    });
  }

  render() {
    return (
      <div className="homepage">
        <Banner currentUserId={this.props.currentUserId} />
        {/*<ItemIndex />*/}
        {/*categories*/}
        {/*children*/}
        {/*links*/}
      </div>
    );
  }
}

export default Home;