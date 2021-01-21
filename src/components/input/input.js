import React from 'react'


const Input =({placeholder}) =>
{
    let inputValue = document.querySelector('.input').value
    return(
        <div>
            <input className='input' type="text" placeholder={placeholder}/>
        </div>
    )
}

export default Input