import Tweet from './Tweet.js';
import {useState} from 'react';

export default function Stream() {
    let[tweets, setTweets] = useState([{
        avatar: "/img/obama.jpg",
        displayName: "Barak Obama",
        username: "@obama",
        date: "1hr",
        text: "Make America Great Again",
        img: "/img/flag.jpg",
        replies: 20,
        retweets: 30,
        likes: 10,
        shares: 4
    },
    {
        avatar: "/img/flag.jpg",
        displayName: "USA",
        username: "@UnitedStates",
        date: "2hr",
        text: "Make me great again",
        img: "/img/obama.jpg",
        replies: 240,
        retweets: 350,
        likes: 180,
        shares: 40
    }
    ]);

    function like(index) {
       tweets[index].likes += 1;
       setTweets(tweets.map(i => i));
    }

    return (
        <>
            {tweets.map((t, index) => <Tweet key={index} {...t} onLike={() => like(index)} />)}

        </>
    );
}