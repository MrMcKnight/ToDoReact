import React, {useState} from 'react'
import Input from '../input/input'
import Button from '../button/button'

const Todolistitem =()=>
{   let data=[]
    const [items, setItems] = useState('Список задач пуст')
    const addItem =()=>
    {
        setItems(<div>
                <Input placeholder={'Введите вашу задачу'}/>
                <Button name={'Добавить задачу'} />
                </div>
            )

            
    }

    return(
        <div>
            {data}
            {items}
            <Button name={'Создать задачу'} onClick={addItem}/>
        </div>
    )
}
export default Todolistitem