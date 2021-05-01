import React from "react";
import People from "./components/People";
import Todo from './components/Todo';
import ShoppingCart from './components/ShoppingCart'
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="App">
      <Gallery images={[{url: 'https://via.placeholder.com/150'},
        {url: 'https://via.placeholder.com/150'}]}/>
    </div>
  );
}

export default App;
