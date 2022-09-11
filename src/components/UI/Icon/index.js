import React from "react"
import Img from "../Img"

export default ({ name }) => (
    <div className="icon-wrapper">
        <Img name={`icon-${name}.svg`} />
    </div>
)