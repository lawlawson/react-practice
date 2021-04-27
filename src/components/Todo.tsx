import React from 'react';

interface todo {
  id: number
  name: string
}

interface todosProps {
  todos: todo[]
  author: author
  // numberOfBooks: number
}

interface author {
  name: string
  numberOfBooks: number
}
// const Todo: React.FC<todos> = ({todos}) => {
//   return <ul>
//     {todos.map((todo) => (
//       <li>{todo.name}</li>
//     ))}
//     </ul>;
// }

const TodoComponent: React.FC<todosProps> = (props) => {
  console.log(props);

  return (
  <div>
    <ul>
      {props.todos.map((todo) => (<li>{todo.name}</li>))}
    </ul>
      <p>{props.author.numberOfBooks}</p>
      <p>{props.author.name}</p>
  </div>
  );
}

export default TodoComponent;