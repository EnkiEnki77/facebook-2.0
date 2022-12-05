import Image from 'next/image'
import React from 'react'
import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <div className="grid place-items-center gap-10 pt-10">
        <Image src='https://links.papareact.com/t4i' height={400} width={400} style={{objectFit:'contain'}} alt=''/>
        <h1 onClick={signIn} className='p-5 bg-blue-500 rounded-full cursor-pointer text-white text-center'>Login with Facebook</h1>
    </div>
  )
}

export default Login