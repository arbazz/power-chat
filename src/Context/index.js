import React, { createContext, useState } from 'react';
import { LoginProvider } from './LoginProvider';
import { SearchProvider } from './SearchProvide';

export const GlobalContext = createContext();

export const GloabalProvider = props => {


    return (
        <GlobalContext.Provider value={"hello"}>
            <LoginProvider>
                <SearchProvider>
                    {props.children}
                </SearchProvider>
            </LoginProvider>
        </GlobalContext.Provider>
    )
}