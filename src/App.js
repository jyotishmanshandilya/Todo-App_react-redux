import Home from './components/Home';
import AddTask from './components/functions/AddTask';
import EditTask from './components/functions/EditTask';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add-task' element={<AddTask/>}></Route>
        <Route path='/edit-task/:id' element={<EditTask/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
