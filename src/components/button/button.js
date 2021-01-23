import React from 'react'


const Button =({onClick,buttonName}) =>
{
    return(
        <div>
            <button onClick={onClick}>{buttonName}</button>
        </div>
    )
}

export default Button