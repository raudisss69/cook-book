import React, { useContext, useState, useEffect, createContext } from "react";

const APIContext = createContext();

export function APIContextProvider({ children }) {
    const [filter, setFilter] = useState ("");
    const [ isPending, setIsPending ] = useState(false);
    const [ url, setUrl ] = useState('http://localhost:3000/recipes/')

    const [data, setData] = useState("")

    useEffect(() =>{
    fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("Couldn't fetch data");
            }
            return res.json();
        })
        .then(data =>{
            setData(data);
        })
        }, [isPending]);
    return(
        <APIContext.Provider
            value={{
                recipes,
                url,
                setUrl,
                isPending,
                setIsPending,
                data,
                setData,
                filter,
                setFilter
            }}
        >
            {children}
        </APIContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
      throw new Error("Context should be used within a Provider");
    }
    return context;
  }