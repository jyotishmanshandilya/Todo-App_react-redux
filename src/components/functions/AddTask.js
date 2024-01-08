import { useState } from "react"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTask } from "../../redux/addTodosSlice"
import { useNavigate } from "react-router-dom"

const AddTask = () => {
  const tasks = useSelector((state)=>state.addTodos)
  const navigate = useNavigate();
  // console.log("Tasks length: ", tasks[tasks.length-1].id+1);
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({
    name: '',
    completed: '',
  })

  const handleChange = (e)=>{
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    })
  }

  // console.log(taskData);

  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log("Submit button clicked")
    dispatch(addTask({
      id: tasks[tasks.length-1].id+1,
      name: taskData.name,
      completed: taskData.completed
    }));
    navigate("/");
  }


  return (
    <div className='flex-col p-24 max-w-screen-md mx-auto'>
      <h1 className='text-center font-bold text-2xl'>
        Add New Task
      </h1>
      <form className='flex-col'>
        <div className='flex-col justify-center'>
          <div className=' flex my-2 items-center'>
            <label
              htmlFor='name'
              className='text-lg'
            >
              Task
            </label>
            <input
              type='text'
              name='name'
              placeholder='Enter Task'
              className='m-3 border rounded-lg p-2 w-full'
              onChange={handleChange}
            />
          </div>

          <div className=' flex my-2 items-center'>
            <label
              htmlFor='completed'
              className='text-lg'
            >
              Status
            </label>
            <input
              type='text'
              name='completed'
              placeholder='Task Completed (true/false)'
              className='m-3 border rounded-lg p-2 w-full'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='flex my-5 justify-center'>
            <button
              type='button'
              className='border-2 rounded-lg px-3 py-1'
              onClick={handleSubmit}
            >
              Add
            </button>
        </div>
      </form>
    </div>
  )
}

export default AddTask
