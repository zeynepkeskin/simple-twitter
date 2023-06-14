import Tweet from "./Tweet.js";
import { useContext, useEffect, useState } from "react";
import { fetchTweets } from "../data/tweets.js";
import AddTweet from "./AddTweet.js";
import { AuthContext } from "./AuthContext.js";

export default function Stream() {
  let [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetchTweets().then((data) => setTweets(data));
  });

  let { user } = useContext(AuthContext);

  function like(index) {
    tweets[index].likes += 1;
    setTweets(tweets.map((i) => i));
  }

  return (
    <>
      {user ? <AddTweet /> : ""}
      {tweets.map((t, index) => (
        <Tweet key={index} {...t} onLike={() => like(index)} />
      ))}
    </>
  );
}
