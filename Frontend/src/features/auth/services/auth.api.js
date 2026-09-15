/**
 * This file will work as Service Layer - which will interact with the backend
 */

import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
})

export const register = async (name, username, email, password) => {
    try {
        const res = await api.post("/register", { name, username, email, password });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const login = async (username, password) => {
    try {
        const res = await api.post("/login", { username, password });
        return res.data;

    } catch (error) {
        console.log(error);
    }
} 

export const getMe = async()=>{
    try{
        const res = await api.get("/get-me");
        return res.data;
    }
    catch(error){
        console.log(error);
    }
}