import React, { useEffect, useRef } from 'react'

import "./styles.sass"

export default ({ changeHandler, ...props }) => {
    
    const input = useRef()
    const progress = useRef()

    const { 
        max=100, min=0,
        defaultValue, value
    } = props
    
    const factor = 100 / max

    const getprogress = val => `${val * factor}%`
    
    useEffect(() => {
        input.current.addEventListener("input", ({ target }) => progress.current.style.width = getprogress(target.value))
    }, [])

    return (
        <div className="slider">
            <div className="range-track">
                <div ref={progress} className="range-progress" style={{width: getprogress(value || defaultValue || 0)}}></div>
            </div>
            <input ref={input} {...props} type="range" onChange={changeHandler} />
        </div>
    )
}