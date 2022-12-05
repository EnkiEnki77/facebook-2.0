import React from 'react'

const HeaderIcon = ({Icon, active}) => {
  return (
    <div className="cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl
    active:border-b-2 active:border-blue-500 group ">
        <Icon className={`h-5 text-gray-500 group-hover:text-blue-500 sm:h-7 text-center ${active && 'text-blue-500'}`}/>
    </div>
  )
}

export default HeaderIcon