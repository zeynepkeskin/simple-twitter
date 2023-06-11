import './Tweet.css';
import { MdReply, MdShare } from 'react-icons/md';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

export default function Tweet(props){   
    
    return (
        <div className="tweet">
            <div className="pfp">
                <img src={props.avatar}/>
            </div>
            <div className="content">
                <div className="header">
                    <span className="displayName">{props.displayName}</span>
                    <span className="userName">{props.username}</span>
                    <span className="date">{props.date}</span>
                </div>
                <p className="text">{props.text}</p>
                <img height="300" src={props.img}/>
                <div className="footer">
                    <div className="reply"><MdReply/> {props.replies}</div>
                    <div className="retweet"><FaRetweet/> {props.retweets}</div>
                    <div className="like" onClick={props.onLike}><AiOutlineHeart/> {props.likes}</div>
                    <div className="share"><MdShare/> {props.shares}</div>
                </div>
            </div>
        </div>
    );
}