import Tweet from "./Tweet.js";
import { useEffect, useState } from "react";
import { fetchTweets } from "../data/tweets.js";

export default function Stream() {
  let [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetchTweets().then((data) => setTweets(data));
  });

  function like(index) {
    tweets[index].likes += 1;
    setTweets(tweets.map((i) => i));
  }

  return (
    <>
      {tweets.map((t, index) => (
        <Tweet key={index} {...t} onLike={() => like(index)} />
      ))}
    </>
  );
}
