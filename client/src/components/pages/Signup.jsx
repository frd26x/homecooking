import React, { useState } from "react";

import api from "../../api";

export default function Signup(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isCook, setIsCook] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let data = {
      username: username,
      password: password,
      isCook: isCook
    };
    api
      .signup(data)
      .then(result => {
        console.log("SUCCESS!");
        props.history.push("/"); // Redirect to the home page
      })
      .catch(err => setMessage(err.toString()));
  };
  return (
    <div>
      <form>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
          type="text"
          name="username"
          required
        />

        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name="password"
          required
        />

        <input
          type="checkbox"
          name="isCook"
          checked={isCook}
          onChange={e => setIsCook(!isCook)}
        />

        <button onClick={e => handleSubmit(e)} type="submit">
          Submit
        </button>
      </form>
      {message && <div className="info info-danger">{message}</div>}
    </div>
  );
}
