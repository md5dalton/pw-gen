import React, { useState } from 'react'
import Button from '../../UI/Button'
import Icon from '../../UI/Icon'

export default  ({ text, setCopied, copied }) => {

    // const [ copied, setCopied ] = useState(isCopied)
    
    const copyHandler = ev => {

        ev.preventDefault()

        navigator.clipboard.writeText(text).then(() => setCopied(true))

    }

    return (
        <Button onClick={copyHandler}>
            {copied && <span className="accent">copied</span>}
            <Icon name="copy" />
        </Button>
    )
}