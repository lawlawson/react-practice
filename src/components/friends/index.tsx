import React, { useState } from "react";

interface Props {
  friends: Array<friend>;
}
interface friend {
  id: number;
  name: string;
  age: number;
  job: string;
}
const Friends: React.FC<Props> = ({ friends }) => {
  const [isActive, setIsActive] = useState(true);
  const [people, setPeople] = useState(friends);
  const remove = (id: number) => {
    const updatedState = people.filter((item) => {
      return item.id !== id;
    });
    setPeople(updatedState);
  };

  const add = () => {
    const newPerson = { id: 4, name: "ee", age: 21, job: "Project Manager" };
    const setNewPeople = [...people, newPerson];
    setPeople(setNewPeople);

    console.log(setNewPeople);
  };

  const edit = (id: number) => {
    setIsActive(false);
    const randomNumber = Math.round(Math.random() * (20 - 50) + 50);
    const updateAge = people.map((item) => {
      if (item.id === id) {
        item = { ...item, age: randomNumber };
      }
      return item;
    });
    setPeople(updateAge);
  };

  return (
    <div>
      <button onClick={add}>Add</button>
      <input disabled={isActive} />
      {people.map((item) => {
        return (
          <li key={item.id}>
            Name : {item.name}, Age: {item.age}, Job: {item.job},{" "}
            <button onClick={() => remove(item.id)}>Delete</button>
            <button onClick={() => edit(item.id)}>Edit</button>
          </li>
        );
      })}
    </div>
  );
};
export default Friends;
