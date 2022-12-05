import Image from 'next/image'
import React from 'react'

const StoryCard = ({name, src, profile}) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 
    transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
        <Image 
        src={profile} 
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 max-h-10" 
        alt='' 
        width={40} 
        height={40} 
        fixed='true'
        style={{objectFit: 'cover'}}
        />
        <Image 
        src={src}
        className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
        alt='' 
        fill
        />
        <p className='absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>{name}</p>
    </div>
  )
}

export default StoryCard