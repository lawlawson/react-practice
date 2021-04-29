import React from "react";
import People from "./components/People";
import Todo from './components/Todo';
import ShoppingCart from './components/ShoppingCart'

const App = () => {
  return (
    <div className="App">
      <ShoppingCart
        products={[{name: 'Bread', price: 2, id: 100}, {name: 'Butter', price: 3, id: 101}]}
        sum={6}
        promotion={1000}
      />
    </div>
  );
}

export default App;
