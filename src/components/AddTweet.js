import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AddTweet() {
  let [tweet, setTweet] = useState({
    text: "say something",
  });
  let { user } = useContext(AuthContext);

  return (
    <div className="tweet">
      <div className="pfp">
        <img src={"/img/" + user.avatar} />
      </div>
      <div className="content">
        <div className="header">
          <span className="displayName">{user.full_name}</span>
          <span className="userName">{user.username}</span>
        </div>
        <p className="text">
          <textarea
            onChange={(event) => setTweet({ text: event.target.value })}
          >
            {tweet.text}
          </textarea>
        </p>

        <div className="footer"></div>
      </div>
    </div>
  );
}
