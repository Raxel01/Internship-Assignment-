import React, { useState } from 'react'
import { PlusCircle, List } from 'phosphor-react'
import { Link,useParams, useLocation } from 'react-router-dom'



const Topbar = () => {
  const location = useLocation()
  const [greenBackground, setGreenBackground] = useState('#ffffffde')
  const [greenBackgroundTasks, setGreenBackgroundTasks] = useState('#ffffffde')

  const addBackground = () =>{
    setGreenBackground('#365E32')
    setGreenBackgroundTasks('#ffffffde')
  }

  const addBackgroundShowTask = () =>{
    setGreenBackgroundTasks('#365E32')
    setGreenBackground('#ffffffde')
  }


  return (
    <div className='flex items-center justify-center'>
    <div className=' rounded-md h-[80%] w-[20rem] bg-CosGray flex items-center justify-evenly'>
            <div onClick={addBackground} className={`hover:bg-DarkGreen bg-${greenBackground} rounded-lg w-[3.5rem] h-[2.5rem] mb-1 mt-1 flex items-center justify-center`}>
                <Link to='/addtask' > <PlusCircle size={30} /> </Link>
            </div>
            <div onClick={addBackgroundShowTask} className={`hover:bg-DarkGreen bg-${greenBackgroundTasks} rounded-lg w-[3.5rem] h-[2.5rem] flex items-center justify-center`}>
                <Link to='/showtasks'> <List size={30} /> </Link>  
            </div>
        </div>
    </div>
  )
}

export default Topbar