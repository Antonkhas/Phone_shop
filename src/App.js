import React from 'react';
import Header from './components/Header';
import Product from './components/Product';


function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Product />
      </div>
    </>
  );
}

export default App;
