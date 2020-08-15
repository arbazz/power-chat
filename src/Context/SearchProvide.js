import React, { createContext, useState, useEffect } from 'react';

export const SeachContext = createContext();

export const SearchProvider = props => {
    const [searchTopic, setSearchTopic] = useState('');
    const [searchDesc, setSearchDesc] = useState(false);
    useEffect(() => {
        // console.log(login)
    })

    return (
        <SeachContext.Provider
            value={{ topic: [searchTopic, setSearchTopic], desc: [searchDesc, setSearchDesc] }}>
            {props.children}
        </SeachContext.Provider>
    )
}