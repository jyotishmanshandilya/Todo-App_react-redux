import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "Default Task",
        completed: false
    },
];

const addTodosSlice = createSlice({
    name: "addTodos",
    initialState,
    reducers: {
        addTask: (state, action)=>{
            // console.log(action)
            state.push(action.payload);
        },
        editTask: (state, action)=>{
            const {id, name, completed} = action.payload;
            const eTask = state.find((task)=> task.id === id);
            if(eTask){
                eTask.name = name;
                eTask.completed = completed;
            }
        },
        deleteTask: (state, action)=>{
            const {id } = action.payload;
            const eTask = state.find((task)=> task.id === id);
            if(eTask){
                return state.filter(f => f.id !== id)
            }
        }
    },
});

export const {addTask, editTask, deleteTask} = addTodosSlice.actions
export default addTodosSlice.reducer;



