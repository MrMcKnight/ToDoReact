import React, {useState} from 'react'
import Input from '../input/input'
import Button from '../button/button'

const Todolistitem =()=>
{   let data=[]
    const [items, setItems] = useState('Список задач пуст')
    const addItem =()=>
    {
        setItems(
            <div>
            <Input placeholder={'Введите вашу задачу'}/>
            <Button name={'Добавить задачу'} onClick={} />
            </div>
            )
            
            
    }

    return(
        <div>
            {data}
        </div>
    )
}
export default Todolistitem