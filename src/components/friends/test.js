import React, { useState, useEffect } from "react";

const Friends = () => {
  const [people, setPeople] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  let list = "";
  console.log(isVisible);
  const toggle = () => {
    setIsVisible(!isVisible);
  };
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

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isVisible ? (
        <ul>
          {people.map((item) => {
            console.log("item:", item.name);
            return (
              <li key={item.name}>
                Name : {item.name}, Username : {item.username}, Email:
                {item.email}
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
