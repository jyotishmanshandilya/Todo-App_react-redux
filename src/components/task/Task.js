import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../../redux/addTodosSlice'

const Task = ({taskId, taskName, taskStatus}) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask({id: id}));
  }

  return (
    <div className='py-5'>
      <ul className='flex flex-row gap-24 justify-center items-center'>
        <li>{taskId}</li>
        <li>{taskName}</li>
        <li>{taskStatus ? "Completed" : "Incomplete"}</li>
        <li className='flex flex-row gap-5'>
            <Link to={`/edit-task/${taskId}`} className='border-2 px-3 py-1 rounded-lg'>Edit</Link>
            <button onClick={()=>handleDelete(taskId)} className='border-2 px-3 py-1 rounded-lg'>Delete</button>
        </li>
      </ul>
    </div>
  )
}

export default Task
