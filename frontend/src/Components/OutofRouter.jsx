import React from 'react'
import Lottie from 'lottie-react'
import outOfRouter from './outOfRouter.json'


const  Error = () => {
  return (
    <div className='flex items-center justify-center w-full h-[100svh] bg-bodyBackground bg-no-repeat bg-cover bg-center'>
        <div className='w-[90%] h-[50%]  md:w-[50%] md:h-[60%] text-center flex flex-col gap-3 items-center justify-center'>
            <h2 className='text-orange font-black'> This Rout is unavailable</h2>
            <Lottie animationData={outOfRouter}/>
        </div>
    </div>
  )
}

export default  Error