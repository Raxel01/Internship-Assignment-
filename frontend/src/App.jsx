import { useState } from 'react'


import Topbar from './Components/Topbar'
import PalleteColor from './Components/PalleteColor'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
    <div className='flex items-center justify-center w-full h-[100svh] bg-bodyBackground bg-no-repeat bg-cover bg-center'>
      <div className='grid gap-1 grid-cols-1 grid-rows-costumised w-[90%] h-[90%] md:w-[40%]'>
        <div className='w-full grid grid-rows-mainRow'>
                <Topbar/> 
                <Outlet/>
        </div>
          <PalleteColor/>
      </div>
    </div>

    </>
  )
}

export default App
