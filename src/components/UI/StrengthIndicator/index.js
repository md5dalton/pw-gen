import React from 'react'
import List from '../List'

import "./styles.sass"

const states = [
    {
        id: "too-weak",
        label: "too weak!"
    },
    {
        id: "weak",
        label: "weak"
    },
    {
        id: "medium",
        label: "medium"
    },
    {
        id: "strong",
        label: "strong"
    }
]
export default ({ strength }) => {
    
    const { id, label } = states[strength - 1]

    return (
        <div className="indicator">
            <span className="text-M">{label}</span>
            <div className={`bars ${id}`}>
                <List 
                    items={states} 
                    itemHandler={(item, index) => (
                        <div 
                            key={index} 
                            className={`bar ${strength > index ? " fill" : ""}`}
                        ></div>
                    )} 
                />
            </div>
        </div>
    )
}
