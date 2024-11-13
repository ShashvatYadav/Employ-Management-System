import React, { createContext, useEffect, useState } from 'react'
import { getLocalStroge, setLocalStroge } from '../uttils/LocalStorage';

export const AuthContext = createContext()

const  AuthProvider  = ({children}) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setLocalStroge();
        const {employees, admin} = getLocalStroge();
        setUserData({employees, admin});
    }, []);

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider

