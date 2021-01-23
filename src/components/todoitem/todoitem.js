import React, {useState} from 'react'
import Input from '../input/input'
import Button from '../button/button'

const Todolistitem =({buttonOnClick})=>
{
    
    return(
        <>
            <Input placeholder='Введите вашу задачу'/>
            <Button buttonName='Добавить задачу' onClick={buttonOnClick}/>
        </>
    )
}
export default Todolistitem