import React, { useEffect } from 'react'
import axios from 'axios'
import { StatesContext } from '../hooks/MainHooks'


const tasks = null

const TaskDisplayer = ({Task}) => {
  return (
  <div className='rounded-lg w-full min-h-[7rem] md:min-h-[9rem] flex gap-4  bg-CosGray'>

  </div>
  )


}
const ShowTasks = () => {
  // const API_URL = 'http://localhost:8000/api/Tasks/userTasks/'
  
  // useEffect(()=>{
  //   const fetchTasks = async () =>{
  //     try{
  //       const response = await axios.get(API_URL)
  //     }catch(error){
  //       if (error.response){
  //         console.log(error.response)
  //         toast(`${error.response.status} : ${error.response.statusText} ❌`)
  //       }
  //       else if (error.request){
  //         toast(`${error.request} : no response`)
  //       }
  //       else
  //         toast('Error while setting up the request')
  //     }

  //   }
  //   fetchTasks()

  // }, [])
  // Next Here ...

  return (
    <div className='custom-scrollbar rounded-lg self-center w-full h-[37rem]  flex flex-col gap-2 items-center justify-start overflow-y-auto'>
      {tasks ? (
        tasks.map((elem, index) => <TaskDisplayer key={index} Task={elem}/> )
      ) : (
        <div className='w-full h-full flex items-center justify-center'>
          Empty ANIMATION
        </div>
      )}
    </div>
  )
}

export default ShowTasks