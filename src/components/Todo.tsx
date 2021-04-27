import React from 'react';

interface todo {
  id: number
  name: string
}

interface todos {
  todos: todo[]
}

const Todo: React.FC<todos> = ({todos}) => {
  return <ul>
    {todos.map((todo) => (
      <li>{todo.name}</li>
    ))}
    </ul>;
}

export default Todo;