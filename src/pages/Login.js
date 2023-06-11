import './Login.css';

export default function Login(){
    return(
        <div className="login">
            <h1>Sign in to Twitter</h1>
            <label>Username: </label>
            <input/> 
            <label>Password: </label>
            <input/>
            <button>Login</button>
        </div>
    );
}