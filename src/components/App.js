import React, { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'

import usePassword from "../hooks/usePassword"
import Button from "./UI/Button"
import Icon from "./UI/Icon"
import Slider from "./UI/Slider"
import StrengthIndicator from "./UI/StrengthIndicator"
import Checkboxes from "./Layout/Checkboxes"
import CopyButton from "./Layout/CopyButton"

import "./App.sass"

const App = () => {
    
    const { 
        password, strength, options,
        passwordHandler, setOption, generatePassword 
    } = usePassword()
    
    const { length } = options

    const submitHandler = ev => {
        ev.preventDefault()
        generatePassword()
    }

    return (
        <main>
            <section className="card">
                <form onSubmit={submitHandler}>
                    <h1 className="text-M text-GREY">Password Generator</h1>
                    <div className="result">
                        <input 
                            type="text" 
                            className="text-L"
                            value={password} 
                            onChange={({ target }) => passwordHandler(target.value)}
                            placeholder="P4$5W0rD!" 
                        />
                        <CopyButton text={password} />
                    </div>
                    <div className="config">
                        <div className="length">
                            <div className="header-wrapper">
                                <span>Character Length</span>
                                <span className="accent text-L">{length}</span>
                            </div>
                            <Slider changeHandler={({ target }) => setOption("length", target.value) } defaultValue={length} max={20}/>
                        </div>
                        <Checkboxes changeHandler={setOption} />
                        <div className="strength">
                            <span className="text-GREY">STRENGTH</span>
                            <StrengthIndicator strength={strength} />
                        </div>
                        <Button className="submit-button" type="submit" >
                            <span>generate</span>
                            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
                            </svg>
                            {/* <Icon name="arrow-right" /> */}
                        </Button>
                    </div>
                </form>
            </section>
        </main>
    )
}

const root = createRoot(document.getElementById('app'))
root.render(<App />)