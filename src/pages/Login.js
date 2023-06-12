import { useState } from "react";
import "./Login.css";
import { login } from "../data/users";

export default function Login() {
  let [userData, setUserData] = useState({});

  function doLogin() {
    let token = login();
  }

  return (
    <div className="login">
      <h1>Sign in to Twitter</h1>
      <label>Username: </label>
      <input
        onChange={(event) =>
          setUserData({
            username: event.target.value,
            password: userData.password,
          })
        }
      />
      <label>Password: </label>
      <input
        type="password"
        onChange={(event) =>
          setUserData({
            username: userData.username,
            password: event.target.value,
          })
        }
      />
      <button onClick={doLogin}>Login</button>
    </div>
  );
}
