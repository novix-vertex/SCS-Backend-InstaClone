import "../style/form.scss"
import { Link, useNavigate } from 'react-router'
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { user,handleLogin, loading } = useAuth();

    const navigate = useNavigate();

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleLogin(username, password)
            .then(res => {
                console.log(res);
                navigate("/");
            });
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