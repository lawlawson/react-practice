import React, { useState, useEffect } from "react";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


const Friends: React.FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggle = (): void => {
    setIsVisible(!isVisible);
  };

  const Add = () => {

    const id = todoList.length + 1 ;
    const addObject = {userId:10, id, title:'Title3', completed:true}
    setTodoList([...todoList,addObject]);

  }

  const RemoveID = (id:number) => {
    setTodoList(
      todoList.filter((item) => item.id !== id)
    );
  }

  const CheckComplete = (id: number): void => {
    setTodoList(
      todoList.map((item) =>
        (item.id === id) ?
          item = { ...item, completed: !item.completed }
        : item
      )
    );
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setTodoList(data);
      });
  }, []);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => Add()}>Add</button>
      {isVisible ? (
        <ul>
          {todoList.map((item) => {
            return (
              <li key={item.id}>
                Todo : {item.title}, userId : {item.userId}, completed:
                {item.completed ? "Yes" : "No"}
                <button onClick={() => CheckComplete(item.id)}>
                  {item.completed ? "Not completed" : "Completed"}
                </button>
                <button onClick={() => RemoveID(item.id)}>Remove</button>
              </li>
            );
          })}
        </ul>
      ) : (
        "List unavailable"
      )}
    </div>
  );
};
export default Friends;
