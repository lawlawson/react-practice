import React from "react";
import People from "./components/People";
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo
        todos={[{id: 1, name: 'Lawrence'}, {id: 2, name: 'Manpreet'}]}
        author={{name: 'JK', numberOfBooks: 3 }}
        date='1st June 2021'/>
    </div>
  );
}

export default App;
