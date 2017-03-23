import React, { Component } from 'react';

import ItemIndex from '../items/item_index_container';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.receiveParam({
      user_id: null,
      category: "all"
    });
  }

  render() {
    return (
      <div className="homepage">
        <ItemIndex />
        {/*categories*/}
        {/*children*/}
        {/*links*/}
      </div>
    );
  }
}

export default Home;