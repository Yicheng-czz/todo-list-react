import React, { useState } from 'react'
import List from './list'
import { v4 as uuidv4 } from 'uuid'

function FormInput () {
  const [input, setInput] = useState({
    id: null,
    val: '',
    update: false
  })
  const [list, setList] = useState([])

  const onChange = (e) => {
    setInput({ id: null, val: e.target.value, update: false })
  }

  const addTodo = (val) => {
    if (/^\s*$/.test(val.val)) {
      return
    }
    let todo = {
      id: uuidv4(),
      val: input.val,
      update: false
    }
    let newList = [todo, ...list]
    setList(newList)
    setInput({ id: null, val: '' })
  }

  const removeTodo = (id) => {
    let newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  // todo (json)
  const toggle = (todo) => {
    let newList = list.map(item => {
      if (item.id === todo.id) {
        // console.log(111)
        return {
          ...item,
          update: true
        }
      }
      return item
    })
    setList(newList)
  }

  const updateTodo = (todo) => {
    // console.log(todo)
    let newList = list.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          val: todo.val,
          update: false
        }
      }
      return item
    })
    // console.log(newList)
    setList(newList)
  }


  return (
    <div className='todo-app'>
      <div className='formInput'>
        <div className='form-title'>
          <h1>Todo Lists</h1>
        </div>
        <div className="todo-input-container">
          <input type="text" className='todo-input' placeholder='what are your plans today?' value={input.val} onChange={onChange} />
          <button className='todo-btn' onClick={() => addTodo(input)}>Add Todo</button>
        </div>
      </div>
      <div className='lists'>
        <List list={list} removeTodo={removeTodo} toggle={toggle} updateTodo={updateTodo} />
      </div>
    </div>
  )
}

export default FormInput
