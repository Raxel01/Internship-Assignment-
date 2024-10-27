import React, { useEffect,useContext } from 'react'
import axios from 'axios'
import { StatesContext } from '../hooks/MainHooks'
import toast, { Toaster } from 'react-hot-toast';
import {Trash} from 'phosphor-react'

const API_URL = 'http://localhost:8000/api/Tasks/userTasks/'


const getBackColor = (status) =>{
  if (status === 'STARTED')
    return 'LightOrange'
  else if (status === 'DONE')
    return 'lightGreen'
  else
    return 'LightYellow'
}

const TaskDisplayer = ({Task}) => {
  const handleTaskRemove = async () =>{
    try {
      const requestData = new FormData()
      requestData.append('id', Task.id)

      const response = await axios.delete(API_URL, {data: requestData, content_type :'application/json'})
      toast(`Task : ${Task.taskTitle} is removed 🗑️ ${response.status}`)
    }catch (error){
      if (error.response)
        toast(`${error.response.statusText} ❌: ${error.response.status}`)
      else if (error.request)
        toast(`error no request : ${error.request}`)
      else
        toast(`error While setting up the request`)
    }
  }

  return (
  <div className='rounded-lg w-full min-h-[7rem] md:min-h-[9rem] flex gap-4 items-center justify-center bg-CosGray'>
    
    <div className='pl-4 h-full flex items-center justify-center '>
      <img src={`http://localhost:8000/${Task.taskImage}`} alt="the Task Image" />
    </div>
    
    <div className=' h-full flex flex-col gap-1 grow items-center justify-center'>
    <h2 className='text-DarkGreen text-xl'> {Task.taskTitle}</h2>
    <p className='text-DarkGreen text-2xl opacity-2'>
      {Task.description}
    </p>
    </div>

    <div className='w-40 h-full  rounded-md flex flex-col gap-4 items-center justify-center'>
    <div className={`flex rounded-md items-center justify-center bg-${getBackColor(Task.TaskStatus)}`}>
      {/*  */}
      <h3 className='px-2 py-2'>{Task.TaskStatus}</h3>
    </div>

    <div className='flex items-center justify-center'>
      <Trash onClick={handleTaskRemove} size={32} color='#FC4747'/>
    </div>
    
    </div>

  </div>
  )


}
const ShowTasks = () => {
  const {savedTasks, setsavedTasks} = useContext(StatesContext)
  
  useEffect(()=>{
    const fetchTasks = async () =>{
      try{
        const response = await axios.get(API_URL)
        setsavedTasks(response.data)

      }catch(error){
        if (error.response){
          toast(`${error.response.status} : ${error.response.statusText} ❌`)
        }
        else if (error.request){
          toast(`${error.request} : no response`)
        }
        else
          toast('Error while setting up the request')
      }
    }

    fetchTasks()
  }, [])

  return (
    <div className='custom-scrollbar rounded-lg self-center w-full h-[37rem]  flex flex-col gap-2 items-center justify-start overflow-y-auto'>
      {savedTasks ? (
        savedTasks.map((elem, index) => <TaskDisplayer key={index} Task={elem}/> )
      ) : (
        <div className='w-full h-full flex items-center justify-center bg-orange'>
          Empty ANIMATION
        </div>
      )}
      <Toaster/>
    </div>
  )
}

export default ShowTasks