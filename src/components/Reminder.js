import './Reminder.css';

export default function Reminder(props) {
    return (
        <div className="bottom-sign-up">
            <div className="left">
                <p className="title">{props.title}</p>
                <p>{props.description}</p>
            </div>

            <div className="right">
                {props.links.map((l, index) => <a className={l.selected ? 'selected' : ''} key={index} href={l.href}>{l.text}</a>)}
            </div>
        </div>
    );
}