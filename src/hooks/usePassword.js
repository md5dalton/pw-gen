import { useState } from "react"
import { generate, validate } from '@wcj/generate-password'

export default () => {

    const [ password, setPassword ] = useState("PTx1f5DaFX")
    const [ strength, setStrength ] = useState(validate(password) || 1)

    const [ options, setOptions ] = useState({
        length: 10,
        upperCase: true,
        lowerCase: true,
        numeric: true,
        special: false
    })

    const setOption = (option, value) => setOptions(prevState => ({...prevState, [option]: value}))
    
    const generatePassword = () => {
        setPassword(generate(options))
        setStrength(validate(password) || 1)
    }

    const passwordHandler = val => {
        setPassword(val)
        setStrength(validate(password) || 1)
    }

    return {
        password, strength, options,
        passwordHandler, setOption, generatePassword
    }

}