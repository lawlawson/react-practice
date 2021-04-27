import React from "react";
import People from "./components/People";
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <People />
      <Todo todos={[{id: 1, name: 'Lawrence'}, {id: 2, name: 'Manpreet'}]}/>
    </div>
  );
}

export default App;
