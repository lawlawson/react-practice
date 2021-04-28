import React from 'react';

interface todo {
  id: number
  name: string
}

interface todosProps {
  todos: todo[]
  author: author
  date: string
}

interface author {
  name: string
  numberOfBooks: number
}

const Todo: React.FC<todosProps> = ({todos, author, date}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <>
          <li>{todo.name}</li>
          <li>{author.name}</li>
          <li>{author.numberOfBooks}</li>
          <li>{date}</li>
        </>
      ))}
    </ul>
  );
}

export default Todo;