import { useState } from "react"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editTask } from "../../redux/addTodosSlice"

const EditTask = () => {
  const { id } = useParams();
  const taskId = parseInt(id, 10);//number
  // console.log("type of task Id: ", typeof(id));

  const tasks = useSelector((state)=>state.addTodos);
  // console.log("Edit task data: ", tasks)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("Type of tasks:", typeof(tasks[0].id));

  let editTaskId = null;

  if(tasks.length>0){
    const taskToEdit = tasks.filter((task) => task.id===taskId);
    editTaskId = taskToEdit.length > 0 ? taskToEdit[0].id : null;
  }
  // console.log("Id of task to edit: ",editTaskId);

  const [taskData, setTaskData] = useState({
    id: editTaskId,
    name: tasks.find(task => task.id === editTaskId).name,
    completed: tasks.find(task => task.id === editTaskId).completed,
  });
  
  const handleChange = (e)=>{
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    })
  }
  console.log("Task Data: ", taskData);
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(editTask({
      id: taskData.id,
      name: taskData.name,
      completed: taskData.completed
    }));
    navigate("/");
  }


  return (
    <div className='flex-col p-24 max-w-screen-md mx-auto'>
      <h1 className='text-center font-bold text-2xl'>
        Edit Task
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
              value={taskData.name}     
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
              placeholder='Task Status'
              className='m-3 border rounded-lg p-2 w-full'
              onChange={handleChange}   
              value={taskData.completed}  
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

export default EditTask
