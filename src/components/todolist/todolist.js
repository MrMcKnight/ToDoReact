import React ,{useState} from 'react'
import Todolistitem from '../todoitem/todoitem'
import Button from '../button/button'


const Todolist =()=>
{
    let inputValue;
    let itemsArr = [];
    const getInputValue = () =>
    {
        return(inputValue = document.querySelector('.input').value)
    }
    const pushInputValue = () =>
    {
        console.log(itemsArr)
        itemsArr.push(getInputValue())
        getInputValue()
        return itemsArr
    }
    const addInput = () => 
    {
        return(
            <Todolistitem buttonOnClick={pushInputValue}/>
        )
    }
    const itemsEmpty = () =>
    {
        return(
            <div>
                Список задач пуст
            </div>
        )
    }
    const [item, setState] = useState('')
    const addItem = () =>
    {
        setState(addInput())
        
    }
    return(
        <div>
            {(itemsArr.length==0)?itemsEmpty():function(){return itemsArr}}
            {item}
            {itemsArr}
            <Button buttonName='Создать задачу' onClick={addItem}/>
        </div>
    )
}
export default Todolist