import { useState } from "react"
import { generate, validate } from '@wcj/generate-password'

export default () => {

    const [ password, setPassword ] = useState("PTx1f5DaFX")
    const [ strength, setStrength ] = useState(validate(password) || 1)
    const [ copied, setCopied ] = useState(false)

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
        setCopied(false)
    }

    const passwordHandler = val => {
        setPassword(val)
        setStrength(validate(password) || 1)
        setCopied(false)
    }

    return {
        password, strength, copied, options,
        passwordHandler, setCopied, setOption, generatePassword
    }

}