import React,{useState, useContext, useEffect} from 'react'
import { PaperPlaneTilt,Eraser } from 'phosphor-react'
import { StatesContext } from '../hooks/MainHooks'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import {useNavigate } from "react-router-dom";



const API_URL = 'http://localhost:8000/api/Tasks/userTasks/'
 
const PalleteColor = () => {
  const [isHovered, setisHovered] = useState(false)
  const {setTitle,title, setDescription, Description,  setTaskImage, taskImage} = useContext(StatesContext)

  const handleHover = () =>{
    setisHovered(true)
  }
  const handeMouseOut = () =>{
    setisHovered(false)
  }
  const handleErase = () =>{
    setDescription("")
    setTitle("")
    setTaskImage("")
  }
  const navigate = useNavigate();

  const handleDataSend = async () =>{
    if (title && Description && taskImage){
      const requestBody = new FormData()
      requestBody.append('taskTitle', title)
      requestBody.append('description', Description)
      requestBody.append('TaskStatus', 'STARTED')
      if (taskImage !== null)
        requestBody.append('taskImage', taskImage)
      try{
        const response = await axios.post(API_URL, requestBody)
        toast('✅ Task Added Succesfully')
        handleErase()
      }catch(error){
        if (error.response){
          console.log(error.response)
          toast(`${error.response.status} : ${error.response.statusText} ❌`)
        }
        else if (error.request){
          toast(`${error.request} : no response`)
        }
        else
          toast('Error while setting up the request')
      }
  }
  else{
    toast('❌ All Fields Should be Full ')
  }
}
  return (
    <div className='flex w-full h-full items-center justify-end gap-5 '>
      <div className='rounded-lg w-[5rem] h-[4rem] bg-CosGray flex items-center justify-center'>
          <PaperPlaneTilt onClick={handleDataSend} size={34} color="#365E32" />
      </div>
      <div className='rounded-lg w-[5rem] h-[4rem] bg-CosGray flex items-center justify-center '>
        <Eraser onClick={handleErase} onMouseOver={handleHover} onMouseOut={handeMouseOut} size={34} color={isHovered ? 'red' : '#365E32'} className='hover:text-red-500' />
    </div>
  </div>
  )
}

export default PalleteColor