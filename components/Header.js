import Image from 'next/image'
import React from 'react'
import {MagnifyingGlassIcon, HomeIcon,FlagIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon, Squares2X2Icon, ChatBubbleOvalLeftIcon,  BellIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
// import { } from '@heroicons/react/24/outline'
import HeaderIcon from './HeaderIcon'
import {useSession, signOut} from 'next-auth/react'


const Header = () => {
    const { data: session, status } = useSession()
    console.log(session)
  return (
    <header className="sticky bg-white z-50 flex top-0 items-center p-2 lg:px-5 shadow-md">
        <div className='flex items-center'>
            <Image src="https://links.papareact.com/5me" height={40} width={40} fixed='true' alt=""/>
            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <MagnifyingGlassIcon className="h-6 text-gray-600"/>
                <input className='hidden md:inline-flex flex-shrink items-center ml-2 bg-transparent outline-none ' type="text" placeholder="Search Facebook"/>
            </div>
        </div>
        <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon active Icon={HomeIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
            </div>
        </div>
        <div className='flex items-center sm:space-x-2 justify-end'>
            <Image onClick={signOut} className='rounded-full cursor-pointer' src={session.user.image} alt='' fixed='true' width={40} height={40}/>
            <p className='hidden lg:inline-flex text-sm font-semibold pr-3 whitespace-nowrap'>{session.user.name}</p>
            <Squares2X2Icon className='icon'/>
            <ChatBubbleOvalLeftIcon className='icon'/>
            <BellIcon className="icon"/>
            <ChevronDownIcon className="icon"/>
        </div>
    </header>
  )
}

export default Header