import React from "react";
import People from "./components/People";
<<<<<<< Updated upstream
=======
import TodoComponent from './components/Todo';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <People />
=======
      <TodoComponent
        todos={[{id: 1, name: 'Lawrence'}, {id: 2, name: 'Manpreet'}]}
        author={{ name: 'JK', numberOfBooks: 3}}
      />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
