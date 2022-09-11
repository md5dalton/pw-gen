import React from 'react'

import "./styles.sass"

export default  ({ name, label, checked, changeHandler }) => {

    return (
        <div className="checkbox">
            <input name={name} id={name} type="checkbox" defaultChecked={checked} onChange={changeHandler} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}