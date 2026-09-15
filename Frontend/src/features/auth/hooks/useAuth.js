/**
 * Hooks (Orchestration) layer - this will communicate with the context (state layer) and Api Layer
 */

import { useContext } from "react";
import AuthContext from "../AuthContext";
import { login, register, getMe } from '../services/auth.api';

export const useAuth = () => {
    const context = useContext(AuthContext);
    const { user, loading, setUser, setLoading } = context;

    const handleLogin = async (username, password) => {
        setLoading(true);
        try {
            const res = await login(username, password);
            setUser(res.user);

        } catch (error) {
            console.log(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    const handleRegister = async (name, username, email, password) => {
        setLoading(true);
        try {
            const res = await register(name, username, email, password);
            setUser(res.user);
        } catch (error) {
            console.log(error.message);
        }
        finally {
            setLoading(false)
        }
    }
    const handleGetMe = async () => {
        setLoading(true);
        try {
            const res = await getMe();
            setUser(res.user);
        } catch (error) {
            console.log(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return { user, loading, handleLogin, handleRegister, handleGetMe };
}