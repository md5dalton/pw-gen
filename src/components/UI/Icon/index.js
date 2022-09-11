import React from "react"
import Img from "../Img"

export default ({ name }) => (
    <span className="icon-wrapper">
        <Img name={`icon-${name}.svg`} />
    </span>
)