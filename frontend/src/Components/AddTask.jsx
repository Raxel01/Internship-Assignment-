import React, { useContext, useEffect } from 'react'
import { StatesContext } from '../hooks/MainHooks'
import { Image } from 'phosphor-react'
import toast, { Toaster } from 'react-hot-toast';

const InputTitle = ({setTitle, title}) =>{
    return (
        <input className='text-DarkGreen h-[4rem] w-[20rem] sm:w-[90%] rounded-md bg-CosGray border-none text-xl outline-none px-5'
        type="text"
        value={title}
        placeholder='Insert Task title ...'
        onChange={(e) => e.target.value.length < 15 ? setTitle(e.target.value) : toast('Title : long Title max [15]')}/>
    )
}
const AddTask = () => {
    const {setTitle, title, setDescription,Description, setTaskImage, taskImage} = useContext(StatesContext)

    const handleImageSelect = (event) => {
      setTaskImage(event.target.files[0])
    };
    
    return (
        <div className=' grid grid-rows-addtaskRows'>

        {/* input text */}
        <div className=' flex items-center justify-center'>
            <InputTitle setTitle={setTitle} title={title}/>
        </div>

        <div  className=' grid grid-cols-imgDescription items-center justify-center gab-1'>
                <div className='bg-CosGray rounded-lg h-[20%] sm:h-[30%] w-[90px] sm:w-[100px] flex items-center justify-center'>                    
                    <label htmlFor="uploadImagebtn">
                        <Image size={40} />
                    </label>
                    <input
                    type="file"
                    name="Task-photo"
                    id="uploadImagebtn"
                    className='hidden'
                    onChange={handleImageSelect}
                    accept="image/*"
              />

                </div>
                <div className='bg-CosGray rounded-lg h-[80%]'>
                    <textarea type="text"
                           value={Description}
                           placeholder='Enter Task Description' 
                           className='text-DarkGreen h-full w-full sm:w-full text-center rounded-md bg-CosGray border-none text-xl outline-none px-5 py-2'
                           onChange={(e) => e.target.value.length < 100 ? setDescription(e.target.value) : toast('Description : long Description max 50')}
                    />
                </div>
                <Toaster/>
        </div>
    </div>
  )
}

export default AddTask