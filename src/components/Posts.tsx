import React, {useState, useEffect} from "react";

interface post {
  userId: number;
  id: number;
  title: string;
  body: string

}

const Posts: React.FC = () => {

  const [postList, setPostList] = useState<post[]>([]);

  const Add = () => {

    const id = postList.length + 1;
    const addObject = {userId:10, id, title:'Title5', body:'Body of posts'}

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(addObject),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(function (response) {
        return response.json();
      }).then(function (data) {
      setPostList([...postList,addObject]);
    });
  }

  const RemoveID = (id:number) => {
    fetch('https://jsonplaceholder.typicode.com/posts/'+ id, {
      method: 'DELETE',
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setPostList(postList.filter((item) => item.id !== id));
    });
  }

  const Edit = (id:number): void  => {

    const editObject = {userId:10, id, title:'Title', body:'Body of posts'}
    const tempEdit = postList.map((item) =>
      (item.id === id) ? {...editObject} : item
    )

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify(editObject),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setPostList(tempEdit);
    });
  }


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        setPostList(data);
      });
  }, []);

  return (<div><button onClick={() => Add()}>Add</button>{postList.map((item) => {return <div>{item.title} <button onClick={() => RemoveID(item.id)}>Delete</button><button onClick={() => Edit(item.id)}>Edit</button></div>})}</div>)
}

export default Posts;