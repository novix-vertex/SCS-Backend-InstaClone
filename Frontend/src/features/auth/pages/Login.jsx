import { Link } from 'react-router'
import './style/form.scss'
import axios from "axios";
import { useState } from 'react';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/api/auth/login", { username, password }, { withCredentials: true });
        const data = response.data;
        console.log(data);
    }
    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        onInput={(e) => { setUsername(e.target.value) }}
                        type="text"
                        name="username"
                        placeholder='Enter username' />
                    <input
                        onInput={(e) => { setPassword(e.target.value) }}
                        type="password"
                        name="password"
                        placeholder='Enter password' />
                    <button type="submit">Submit</button>
                </form>
                <p>New User? <Link to="/register" className="toggleAuthLink">Register</Link> </p>

            </div>
        </main>
    )
}

export default Login