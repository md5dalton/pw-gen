import React, { createContext, useState } from "react"

const PasswordContext = createContext()

export function PasswordProvider ({ children }) {

    const [ password, setPassword ] = useState("PTx1f5DaFX")

    const [ options, setOptions ] = useState({
        length: 0,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: false
    })

    const setOption = (option, value) => setOptions(prevState => ({...prevState, [option]: value}))
    
    return (
        <PasswordContext.Provider value={{password, length, setOption, options}}>
            {children}
        </PasswordContext.Provider>
    )

}

export default PasswordContext