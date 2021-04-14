import React, { useState, useEffect } from "react";

interface friend {
  id: number;
  name: string;
  username: string;
  email: string;
  address: address;
}
interface address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

const Friends: React.FC = () => {
  const [people, setPeople] = useState<friend[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPeople(data);
      });
  }, []);

  //const [isActive, setIsActive] = useState(true);

  /* const remove = (id: number) => {
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
 */
  return (
    <div>
      <ul>
        {people.map((item) => {
          console.log("item:", item.name);
          return (
            <li key={item.name}>
              Name : {item.name}, Username : {item.username}, Email:{item.email}
              <ul>
                <li> {item.address.street}</li>
                <li> {item.address.city}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Friends;
