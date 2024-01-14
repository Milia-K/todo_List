import React, { useState } from 'react'
import {v4} from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

function AddTodo({todo ,setTodo}) {

const [value, setValue] = useState('')

function saveTodo() {
    setTodo(
        [...todo, {
            id: v4(),
            text: value.toUpperCase(),
            status: true,
            }
        ]
    )
    setValue('')
}


  return (
    <div className='todoAdd'>
        <input type='text' placeholder='Add a task' value={value} onChange={ (e) => setValue (e.target.value)} ></input>
        <button onClick={saveTodo}> <FontAwesomeIcon icon={faPlus} /> </button>
    </div>
  )
}

export default AddTodo