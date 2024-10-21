import React, { useContext, useEffect } from 'react'
import { StatesContext } from '../hooks/MainHooks'
import { Image } from 'phosphor-react'

const AddTask = () => {
    const {setTitle, setDescription, setTaskImage, taskImage} = useContext(StatesContext)

    useEffect(() =>{
        console.log(taskImage)
    }, [taskImage])
    
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
        //   ErrorToast('can\'t Load Image');
        }
        };

    return (
        <div className=' grid grid-rows-addtaskRows'>

        {/* input text */}
        <div className=' flex items-center justify-center'>
            <input className='text-DarkGreen h-[4rem] w-[20rem] sm:w-[90%] rounded-md bg-CosGray border-none text-xl outline-none px-5'
                   type="text"
                   placeholder='Insert Task title ...'
                   onChange={(e) => setTitle(e.target.value)}/>
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
        </div>
    </div>
  )
}

export default AddTask