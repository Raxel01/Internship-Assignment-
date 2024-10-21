import React from 'react'
import { PlusCircle, List } from 'phosphor-react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className=' rounded-md h-[80%] w-[20rem] bg-CosGray flex items-center justify-evenly'>
            <div className='hover:bg-DarkGreen rounded-lg w-[3.5rem] h-[2.5rem] mb-1 mt-1 flex items-center justify-center'>
                <Link to='/addtask' > <PlusCircle size={30} /> </Link>
            </div>
            <div className='hover:bg-DarkGreen rounded-lg w-[3.5rem] h-[2.5rem] flex items-center justify-center'>
                <Link to='/showtasks'> <List size={30} /> </Link>  
            </div>
        </div>
    </div>
  )
}

export default Topbar