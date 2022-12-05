import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import {FaceSmileIcon} from '@heroicons/react/24/outline'
import {CameraIcon, VideoCameraIcon} from '@heroicons/react/20/solid'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const InputBox = () => {

    const [inputValue, setInputValue] = useState('')
    const [imageToPost, setImageToPost] = useState(null)
    const imageInputRef = useRef(null)
    const {data: session} = useSession()

    const handleInputValue = (e) => {
        const {value} = e.target
        setInputValue(value)
    }  

    const handleAddImageToPost = (e) => {
        const {files} = e.target
        const reader = new FileReader()
        if(files[0]){
            reader.readAsDataURL(files[0])
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    console.log(imageToPost)

    const sendPost = async (e) => {
        e.preventDefault()

        if (!inputValue) return

        try {
            const docRef = await addDoc(collection(db, "posts"), {
              message: inputValue,
              name: session.user.name,
              email: session.user.email,
              image: session.user.image,
              timestamp: serverTimestamp()
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

          setInputValue('')
    }

    


  return (
    <div className="bg-white p-2 rounded-2xl shadow-md font-medium text-gray-500 mt-6">
        <div className="flex space-x-4 p-4 items-center">
            <Image
            className="rounded-full"
            src={session.user.image}
            width={40}
            height={40}
            fixed='true'
            alt=''
            />
            <form className="flex flex-1">
                <input 
                    value={inputValue}
                    onChange={handleInputValue}
                    className="rounded-full h-12 bg-gray-100 grow px-5 outline-none" 
                    type="text" 
                    placeholder={`Whats on your mind? ${session.user.name}?`}/>
                <button 
                    hidden  
                    type='submit' 
                    onClick={(e) => sendPost(e)}
                    ></button>
            </form>
        </div>
        <div className='flex justify-evenly p-3  border-t '>
            <div className='inputIcon'>
                <VideoCameraIcon className="h-7 text-red-500"/>
                <p className="text-xs sm:text-sm xl:text-base">Live/Video</p>
            </div>
            <div className='inputIcon' onClick={() => imageInputRef.current.click()}>
                <CameraIcon className="h-7 text-green-400"/>
                <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                <input 
                    type='file' 
                    hidden 
                    onChange={handleAddImageToPost}
                    ref={imageInputRef}
                    />

            </div>
            <div className='inputIcon'>
                <FaceSmileIcon className="h-7 text-yellow-300"/>
                <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
            </div>
           
        </div>
    </div>
  )
}

export default InputBox