import { useState, useContext } from "react";
import "./Login.css";
import { login } from "../data/users";
import { AuthContext } from "../components/AuthContext";

export default function Login() {
  let [userData, setUserData] = useState({});

  const { login } = useContext(AuthContext);

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
      <button onClick={() => login(userData)}>Login</button>
    </div>
  );
}
