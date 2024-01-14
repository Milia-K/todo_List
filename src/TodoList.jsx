import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons'

function TodoList({todo, setTodo}) {

    function deleteTodo (id) {
        let newTodo = todo.filter(item => item.id !== id);
        setTodo(newTodo)
    }

    function statusTodo (id) {
        let newTodo = todo.filter(item => {
            if (item.id ==id){
                item.status = !item.status
            }
            return item;
        });
        setTodo(newTodo)


    }


    return (
        <div className='todoList'>
            {
                todo.map(item => (
                    <div key={item.id} className='todoItem'>
                        <ul className={ !item.status? 'close' : ''}><li>{item.text}</li></ul> 
                            <div className='todoBtn'>
                                <button onClick={() => deleteTodo(item.id)}>  <FontAwesomeIcon icon={faTrash} /> </button>
                                <button onClick={() => statusTodo(item.id)}>
                                    {
                                        item.status? <FontAwesomeIcon icon={faLockOpen} /> : <FontAwesomeIcon icon={faLock} /> 
                                    }
                                </button>
                            </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList