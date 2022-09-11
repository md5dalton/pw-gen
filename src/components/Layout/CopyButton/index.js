import React, { useState } from 'react'
import Button from '../../UI/Button'
import Icon from '../../UI/Icon'

export default  ({ text }) => {

    const [ copied, setCopied ] = useState(false)
    
    const copyHandler = ev => {

        ev.preventDefault()

        navigator.clipboard.writeText(text).then(() => setCopied(true))

    }
    
    console.log("copy button render")

    return (
        <Button onClick={copyHandler}>
            {copied && <span className="accent">copied</span>}
            <Icon name="copy" />
        </Button>
    )
}