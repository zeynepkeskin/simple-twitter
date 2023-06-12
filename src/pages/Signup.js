import "./Signup.css";

export default function Signup() {
  return (
    <div className="signup">
      <h1>Join Twitter today</h1>
      <label>Email: </label>
      <input />
      <label>Username: </label>
      <input />
      <label>Password: </label>
      <input />
      <label>Confirm password: </label>
      <input />
      <button>Sign up</button>
    </div>
  );
}
