import axios from 'axios'
import React, { useState , useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function Todo() {
    const [tasks, setTasks] = useState([])

    const getData = () => {
      return fetch('https://json-server-deploy-mock.herokuapp.com/tasks')
            .then((res) => {
                 return res.json()
            })
    }
    useEffect(() => {
        getData()
            .then((res) => {
                console.log('res',res);
                setTasks(res)
               })
    }, [])
    
    const handleAdd = (q) => {
        let payload = {
            id: tasks.length + 1,
            title: q,
            status:'false'
        }

        axios.post("https://json-server-deploy-mock.herokuapp.com/tasks",payload
        ).then((res)=>setTasks([...tasks,res.data]))


     
    }
  return (
      <div>
          <TodoInput onClick={handleAdd} />
          <TodoList items={tasks} />   
    </div>
  )
}

export default Todo