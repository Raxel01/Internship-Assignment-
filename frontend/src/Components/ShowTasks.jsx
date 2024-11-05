import React, { useEffect,useContext, useState } from 'react';
import axios from 'axios';
import { StatesContext } from '../hooks/MainHooks'
import toast, { Toaster } from 'react-hot-toast';
import {Trash} from 'phosphor-react';
import {PencilSimple} from 'phosphor-react';
import Lottie from 'lottie-react';
import noTaskYet from  './noTaskAnimation.json'

import { Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Stack, Divider } from '@mui/material';

const API_URL = 'http://localhost:8000/api/Tasks/userTasks/'


const GivStatusChoice = ({Task, startEdit, setStartEdit,setRefetch}) =>{
  const [newStatus, setNewStatus] = useState(null)

  useEffect(()=>{
    const patchTask = async ()=> {
      try {
        const requestData = new FormData()
        requestData.append('id', Task.id)
        requestData.append('newStatus', newStatus)
        const response = await axios.patch(API_URL, requestData)
        setStartEdit(false)
        setRefetch(prev => !prev)
        toast(`Task : ${Task.taskTitle} has been changed `)
      }catch (error){
        if (error.response)
          toast(`${error.response.statusText} ❌: ${error.response.status}`)
        else if (error.request)
          toast(`error no request : ${error.request}`)
        else
          toast(`error While setting up the request`)
    }
  }

  if(newStatus)
    patchTask()
  }, [newStatus])

  const handleDone =  async () =>{
    setNewStatus('DONE')
  }

  const handleInprogress =  async () =>{
  setNewStatus('INPROGRESS')

  }
  
 return(
      <Dialog open={startEdit} fullWidth >
          <DialogTitle className='bg-CosGray'>
            Set New Status
          </DialogTitle>
          <DialogContent>
            <div className='flex items-center justify-evenly ' direction="row" spacing={2} margin={2} divider={<Divider orientation="vertical" flexItem />}>
              <div onClick={handleDone} className='bg-orange w-[6rem] h-[3rem] flex rounded-md items-center font-black text-white justify-center px-3'> Done</div>
              <div onClick={handleInprogress} className='bg-DarkGreen w-[7rem] h-[3rem]  flex rounded-md items-center font-black  text-white justify-center'> INPROGRESS </div>
            </div>
          </DialogContent>
      </Dialog>
 )
}

const TaskDisplayer = ({Task, setRefetch}) => {
  const [trigerRemove, setTrigerRemove] = useState(true)
  const [startEdit, setStartEdit ] = useState(false)
  const [color, setColor] = useState('')
  
  const getBackColor = (status) =>{
    if (status === 'STARTED')
      return 'LightOrange'
    else if (status === 'DONE')
      return 'lightGreen'
    else
      return 'LightYellow'
  }

  const handleTaskRemove = async () =>{
    
    try {
      const requestData = new FormData()
      requestData.append('id', Task.id)
      const response = await axios.delete(API_URL, {data: requestData, content_type :'application/json'})
      toast(`Task : ${Task.taskTitle} has been removed 🗑️ ${response.status}`)
      setRefetch(prev => !prev)
    }catch (error){
      if (error.response)
        toast(`${error.response.statusText} ❌: ${error.response.status}`)
      else if (error.request)
        toast(`error no request : ${error.request}`)
      else
        toast(`error While setting up the request`)
    }
  }

  const handleEditstart = () =>{
    setStartEdit(true)
 }

  useEffect(() =>{
    setColor(getBackColor(Task.TaskStatus))
  }, [])

  
  return (
  <div className='rounded-lg w-full min-h-[7rem] md:min-h-[9rem] flex gap-2 items-center justify-center bg-CosGray'>
    
    <div className=' h-full w-[8rem] sm:w-[10rem]  rounded-lg flex items-center justify-center '>
      <img className=' h-[90%] w-[90%] rounded-lg' src={`http://localhost:8000/${Task.taskImage}`} alt="the Task Image" />
    </div>
    
    <div className=' h-full flex flex-col gap-1 grow items-center justify-center'>
    <h2 className='text-DarkGreen text-xl'> {Task.taskTitle} </h2>
    <p className='text-DarkGreen text-2xl opacity-2'>
      {Task.description}
    </p>
    </div>

    <div className='w-40 h-full  rounded-md flex flex-col gap-4 items-center justify-center'>
    <div className={`w-[90%] flex gap-1  items-center justify-center`}>
      {/*  */}
      <div className={`w-32 h-[2.2rem] rounded-md  bg-${color}  flex items-center justify-center`}>
          <h3 className='text-sm sm:text-xl font-bold px-2 py-2 rounded-md'>{Task.TaskStatus}</h3>
      </div>
      <PencilSimple onClick={handleEditstart} className='h-full w-[10%] mr-1  rounded-sm' size={24} />
    </div>

    <div className='flex items-center justify-center'>
      <Trash className='' onClick={handleTaskRemove} size={32} color='#FC4747'/>
    </div>
    </div>
     {startEdit ? <GivStatusChoice setRefetch={setRefetch} startEdit={startEdit} Task={Task} setStartEdit={setStartEdit} /> : null}
  </div>
  )
}

const ShowTasks = () => {
  const {savedTasks, setsavedTasks} = useContext(StatesContext)
  const [refetch, setRefetch] = useState(false)
  
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

    fetchTasks();
  }, [refetch])

  return (
    <div className='custom-scrollbar rounded-lg self-center w-full h-[37rem]  flex flex-col gap-2 items-center justify-start overflow-y-auto'>
      { savedTasks?.length ? 
        savedTasks.map((elem, index) => <TaskDisplayer setRefetch={setRefetch} key={index} Task={elem}/> )
                                       : 
        (<div className='w-[90%] h-[90%] flex flex-col gap-2 items-center justify-center'>
          <Lottie animationData={noTaskYet}/>
          <h3 className='text-CosGray font-black '> No Task setted Yet, try To insert one </h3>
        </div>)
      }
      <Toaster/>
    </div>
  )
}

export default ShowTasks