import { createContext, useState } from 'react';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    //Children represents the components inside of AuthProvider
    //It will only render the children when it complies to AuthProvider
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;