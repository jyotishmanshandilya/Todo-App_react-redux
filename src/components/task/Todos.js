import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import { Link } from "react-router-dom";

const Todos = () => {
  const todos = useSelector((state)=>state.addTodos)
  console.log(todos);
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex justify-start my-16">
        <Link to='/add-task' className="border-2 px-3 py-2 rounded-lg">Add Task +</Link>
      </div>
      {todos.map((task)=>(
        <div key={task.id}>
          <Task key={task.id} taskId={task.id} taskName={task.name} taskStatus={task.completed}/>
          <hr/>
        </div>
        ))}
    </div>
  );
};
export default Todos;