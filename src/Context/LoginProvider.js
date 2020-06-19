import React, { createContext, useState, useEffect } from 'react';

export const LoginContext = createContext();

export const LoginProvider = props => {
    const [userData, setUserData] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        // console.log(login)
    })

    return (
        <LoginContext.Provider
            value={{ user: [userData, setUserData], login: [isLogin, setIsLogin] }}>
            {props.children}
        </LoginContext.Provider>
    )
}