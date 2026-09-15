/**
 * This will be used as State Layer
 */

import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    return <AuthContext.Provider value={{ user, loading, setUser, setLoading }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;