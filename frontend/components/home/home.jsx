import React from 'react';

import ItemIndex from '../items/item_index_container';

const Home = (props) => (
  <div className="homepage">
    <div className="background"></div>
    <ItemIndex fetchParams={{category: "kidos"}}/>
    {/*categories*/}
    {/*children*/}
    {/*links*/}
  </div>
);

export default Home;