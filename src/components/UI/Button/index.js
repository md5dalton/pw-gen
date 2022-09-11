import React from 'react'

import "./styles.sass"

const Button = ({ children, ...rest }) => <button {...rest}> { children } </button>

Button.defaultProps = {
    className: "primary"
}

export default Button