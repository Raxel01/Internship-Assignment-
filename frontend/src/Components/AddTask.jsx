import React, { useContext, useEffect } from 'react'
import { StatesContext } from '../hooks/MainHooks'
import { Image } from 'phosphor-react'
import toast, { Toaster } from 'react-hot-toast';

const InputTitle = () =>{
    return (
        <input className='text-DarkGreen h-[4rem] w-[20rem] sm:w-[90%] rounded-md bg-CosGray border-none text-xl outline-none px-5'
        type="text"
        placeholder='Insert Task title ...'
        onChange={(e) => setTitle(e.target.value)}/>
    )
}
const AddTask = () => {
    const {setTitle, title, setDescription,Description, setTaskImage, taskImage} = useContext(StatesContext)

    const handleImageSelect = (event) => {
        try{
          const file = event.target.files[0];
          const reader = new FileReader();
        
          reader.onloadend = () => {
            setTaskImage(reader.result);
          };
          if (file) {
            reader.readAsDataURL(file);
          } else {
            setTaskImage(null);
          }
        } catch(e){
            toast(' Error While Importing Image', {
                className: 'bg-orange',
                icon: '👏',
                iconTheme: {
                  primary: '#000',
                  secondary: '#fff',
                },
              })
        }
    };

    return (
        <div className=' grid grid-rows-addtaskRows'>

        {/* input text */}
        <div className=' flex items-center justify-center'>
            <InputTitle/>
        </div>

        <div  className=' grid grid-cols-imgDescription items-center justify-center gab-1'>
                <div className='bg-CosGray rounded-lg h-[30%] w-[100px] flex items-center justify-center'>                    
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
                           placeholder='Enter Task Description' 
                           className='text-DarkGreen h-full w-full sm:w-full text-center rounded-md bg-CosGray border-none text-xl outline-none px-5 py-2'
                           onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <Toaster/>
        </div>
    </div>
  )
}

export default AddTask