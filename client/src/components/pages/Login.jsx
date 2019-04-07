import React, { useState } from 'react';
import api from '../../api';

export default function Login (props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) =>{
    e.preventDefault()
    api.login(username, password)
      .then(result => {
        console.log('SUCCESS!')
        props.history.push("/") // Redirect to the home page
      })
      .catch(err => setMessage(err.toString()))
  }

  
    return (
      <div className="Login">
        <h2>Login</h2>
        <form>
          Username: <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
          type="text"
          name="username"
          required
        /> <br />
          Password: <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name="password"
          required
        /> <br />
          <button onClick={(e) => handleClick(e)}>Login</button>
        </form>
        {message && <div className="info info-danger">
          {message}
        </div>}
      </div>
    );
  
}
