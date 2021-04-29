import React, { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const submit = () => {
    console.log(username, password);
  };
  return (
    <>
      <input
        name="username"
        type="text"
        value={username}
        onChange={inputChange}
      />
      <input
        name="password"
        type="text"
        value={password}
        onChange={inputChange}
      />
      <button onClick={submit}>Submit</button>
    </>
  );
};

export default Login;
