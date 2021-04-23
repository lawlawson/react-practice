import React, { useState, useEffect } from "react";

interface people {
  id: number;
  Name: string;
  Location: string;
  HasJob: boolean;
}

const People: React.FC = () => {
  const [peopleList, setPeopleList] = useState<people[]>([]);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState('');

  const Add = () => {
    setMessage('Adding...');
    const id = peopleList.length + 1;
    const addObject = {
      id,
      Name: "Gerald",
      Location: "london",
      HasJob: true,
    };
      setStatus('success');
    fetch("https://retoolapi.dev/E1RJhV/data/", {
      method: "POST",
      body: JSON.stringify(addObject),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then(()=> {
        setPeopleList([...peopleList, addObject]);
      })
      .catch(() => {
        setMessage("Something went wrong!!!");
        setStatus('');
      })
      .finally(() => {
        setMessage('');
      });
  };

  const RemoveID = (id: number) => {
    setMessage('Deleting...');
    console.log(setMessage);
    setStatus('success');
    fetch(`https://retoolapi.dev/E1RJhV/data/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPeopleList(peopleList.filter((item) => item.id !== id));
      }).catch(() => {
        setStatus('');
    }).finally(() => {
      setMessage('');
    });
  };

  const Edit = (id: number): void => {
    setMessage('Editing...')
    const editObject = {
      id,
      Name: "manpreet",
      Location: "germany",
      HasJob: false,
    };
    const tempEdit = peopleList.map((item) =>
      item.id === id ? { ...editObject } : item
    );

    fetch(`https://retoolapi.dev/E1RJhV/data/${id}`, {
      method: "PUT",
      body: JSON.stringify(editObject),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPeopleList(tempEdit);
      }).catch(() => {

    }).finally(() => {
      setMessage('');
    });
  };

  useEffect(() => {
    fetch("https://retoolapi.dev/E1RJhV/data", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPeopleList(data);
      });
  }, []);

  return (
    <div className='container'>
      <ul>
        <button className="btn btn-success btn-sm mx-2" onClick={() => Add()}>
          Add
        </button>
        {message  && <div className={`alert alert-${status}`} role="alert">{message}</div>}
        {peopleList.map((item: people) => {
          return (
            <li key={item.id}>
              {item.Name}, {item.Location}, {item.HasJob ? "yes" : "no"}
              <button
                className="btn btn-danger btn-sm mx-2 my-1"
                onClick={() => RemoveID(item.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => Edit(item.id)}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default People;
