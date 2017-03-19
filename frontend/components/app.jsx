import React from 'react';

import Header from './nav/header_container';

const App = ({ children }) => (
  <div>
    <Header />
    <div className="background"></div>
    
    {children}
  </div>
);

export default App;