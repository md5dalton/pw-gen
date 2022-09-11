import React, { useContext } from 'react'
import PasswordContext from '../../../context/PasswordContext'
import usePassword from '../../../hooks/usePassword'
import Checkbox from '../../UI/Checkbox'
import List from '../../UI/List'

import "./styles.sass"

const checks = [
    {
        name: "upperCase",
        label: "Include Uppercase Letters",
        checked: true
    },
    {
        name: "lowerCase",
        label: "Include Lowercase Letters",
        checked: true
    },
    {
        name: "numeric",
        label: "Include Numbers",
        checked: true
    },
    {
        name: "special",
        label: "Include Symbols"
    }
]

export default  ({ changeHandler }) => {
    
    return (
        <div className="checkboxes">
            <List 
                items={checks} 
                itemHandler={(item, index) => (
                    <Checkbox 
                        key={index} {...item} 
                        changeHandler={({ target }) => changeHandler(item.name, target.checked)} 
                    />
                )}
            />
        </div>
    )
}