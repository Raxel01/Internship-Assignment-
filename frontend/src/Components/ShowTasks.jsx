import React from 'react'

let tasks = [
  {
    id: 1,
    taskImage : '',
    taskTitle : 'Your task 1',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 2',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 3,
    taskImage : '',
    taskTitle : 'Your task 3',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  },
  {
    id: 2,
    taskImage : '',
    taskTitle : 'Your task 4',
    taskDescription : 'Lorem ipsum jkhsdjkgh jksd jksdh hdjksgh kdsjk hds ghkdsgj '
  }
]

const ShowTasks = () => {
  return (
    <div className='flex items-center justify-center '>
      {
        tasks ? <div className='w-[20rem] sm:w-[90%] h-[38rem] flex flex-col justify-start overflow-auto bg-yellow-400'> 
        {
          tasks.map(elem =>{
            return <div className=' rounded-lg w-[20rem] h-[6rem] mt-2 bg-orange'>

             </div>
          })

        }
          </div> : <div className='w-full h-full flex items-center justify-center'>
            Empty ANIMATION
          </div>
      }
    </div>
  )
}

export default ShowTasks