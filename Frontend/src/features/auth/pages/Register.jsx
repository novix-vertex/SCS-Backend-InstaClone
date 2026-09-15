import "../style/form.scss"
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
const Register = () => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { user, loading, handleRegister } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) {
      return (
        <h1>Loading...</h1>
      )
    }

    handleRegister(name, username, email, password)
      .then(res => {
        console.log(res);
        navigate("/");
      });
  }
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => { setName(e.target.value) }}
            type="text"
            name="name"
            placeholder='Enter name' />
          <input
            onInput={(e) => { setUsername(e.target.value) }}
            type="text"
            name="username"
            placeholder='Enter username' />
          <input
            onInput={(e) => { setEmail(e.target.value) }}
            type="email"
            name="email"
            placeholder='Enter email' />
          <input
            onInput={(e) => { setPassword(e.target.value) }}
            type="password"
            name="password"
            placeholder='Enter password' />
          <button type="submit">Submit</button>
        </form>
        <p>Already have an account? <Link to="/login" className="toggleAuthLink">Login</Link> </p>
      </div>
    </main>
  )
}

export default Register