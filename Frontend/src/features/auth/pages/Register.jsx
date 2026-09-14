import "./style/form.scss"
import { Link } from "react-router";
import axios from 'axios';
import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/api/auth/register",
      { name, username, email, password },
      { withCredentials: true });

    const data = response.data;
    console.log(data);
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