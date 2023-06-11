//TODO: use backend api here

export const fetchTweets = async () => {
    return [{
        id: 1,
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
        id: 2,
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
    }];
};

export const createTweet = async (tweetData) => {
    tweetData.id = 3;
    return tweetData;
};
