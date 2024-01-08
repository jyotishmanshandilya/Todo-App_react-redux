import React from 'react'
import Todos from './task/Todos'

const Home = () => {
  return (
    <div className="flex-col p-24 text-center">
      <h1 className='text-4xl font-bold mb-16'>Todos App using React-Redux</h1>
      <Todos/>
    </div>
  )
}

export default Home
