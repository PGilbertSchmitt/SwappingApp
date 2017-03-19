import React from 'react';

import ItemIndex from '../items/item_index_container';

const Home = (props) => (
  <div className="homepage">
    <ItemIndex fetchParams={{all: true}}/>
    {/*categories*/}
    {/*children*/}
    {/*links*/}
  </div>
);

export default Home;