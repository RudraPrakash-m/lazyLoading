import React from 'react'

const Button = ({ name, style }) => {
    return (
        <button className={style}>{name}</button>
    )
}

export default Button