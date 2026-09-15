import { Routes, Route } from 'react-router'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<h1>Welcome to Insta-Clone...</h1>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    )

}

export default AppRoutes