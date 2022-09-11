import React from 'react'

export default ({ items, itemHandler }) => (
    <div className="list">
        {items.map(itemHandler)}
    </div>
)
