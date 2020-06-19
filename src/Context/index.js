import React, { createContext, useState } from 'react';
import {LoginProvider} from './LoginProvider';

export const GlobalContext = createContext();

export const GloabalProvider = props => {


    return (
        <GlobalContext.Provider value={"hello"}>
            <LoginProvider>
                {props.children}
            </LoginProvider>
        </GlobalContext.Provider>
    )
}