import React from 'react';
import Friends from './components/friends'


function App() {
  return (
    <div className="App">
         <Friends friends={[
      { id: 1, name: 'aa', age: 32, job: 'IT' },
      { id: 2, name: 'bb', age: 23, job: 'Driver' },
      { id: 3, name: 'cc', age: 45, job: 'Network' },
    ]}/>
    </div>
  );
}

export default App;
