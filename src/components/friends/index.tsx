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

  const CheckComplete = (props: boolean, id: number): void => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          item = { ...item, completed: !props };
        }
        return item;
      })
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
      {isVisible ? (
        <ul>
          {todoList.map((item) => {
            return (
              <li key={item.id}>
                Todo : {item.title}, userId : {item.userId}, completed:
                {item.completed ? "Yes" : "No"}
                <button onClick={() => CheckComplete(item.completed, item.id)}>
                  {item.completed ? "Not completed" : "Completed"}
                </button>
                <button>Remove</button>
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
