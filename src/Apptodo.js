import TodoList from './TodoList';
import { uuid } from 'uuidv4';
import { useState, useEffect, useRef, useMemo } from 'react';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function Apptodo() {
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()
    
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  
    }, [])
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])
  
    function toggleTodo(id) {
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === id)
      todo.complete = !todo.complete
      setTodos(newTodos)
    }
  
    function handleAddTodo(e) {
      const name = todoNameRef.current.value
      if (name === '') return
      setTodos(prevTodos => {
        return[...prevTodos, {id: uuid(), name: name, complete: false}]
      })
    }
  
    function handleClearTodos(){
      const newTodos = todos.filter(todo => !todo.complete)
      setTodos(newTodos)
  
    }
    return(
      <>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear Completed</button>
        <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      </>
    )
}

export default Apptodo;