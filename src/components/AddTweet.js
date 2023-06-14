import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AddTweet() {
  let [tweet, setTweet] = useState({
    displayName: "",
  });
  let { user, token } = useContext(AuthContext);
  return (
    <div className="tweet">
      <div className="pfp">
        <img src={user.avatar} />
      </div>
      <div className="content">
        <div className="header">
          <span className="displayName">{user.full_name}</span>
          <span className="userName">{user.username}</span>
        </div>
        <p className="text">
          <textarea
            onChange={(event) => setTweet({ text: event.target.value })}
          ></textarea>
        </p>

        <div className="footer"></div>
      </div>
    </div>
  );
}
