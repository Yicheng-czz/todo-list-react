import React, { useState } from 'react'
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri'


function List ({ list, removeTodo, toggle, updateTodo }) {
  const [todo, setTodo] = useState('')

  const todoChange = (e) => {
    setTodo(e.target.value)
  }

  return list.map(item =>
    item.update ?
      (
        <div className="todo-input-container" key={item.id}>
          <input type="text" className='todo-input' placeholder='what are your plans today?' value={todo} onChange={todoChange} />
          <button className='todo-btn' onClick={() => updateTodo({ id: item.id, val: todo, update: true })}>Update</button>
        </div>
      ) :
      (
        <div className='todo-item' key={item.id}>
          <div className='todo-val'>{item.val}</div>
          <div className='todo-operation'>
            {/* update */}
            <RiEdit2Line className='icons' onClick={() => toggle(item)} />
            {/* delete (ok) */}
            <RiDeleteBinLine className='icons' onClick={() => removeTodo(item.id)} />
          </div>
        </div>
      ))

}

export default List
