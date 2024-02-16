import Image from 'next/image'
import React from 'react'

export default function Client() {
  return (
    <>
    <div className='w-full h-[350px] relative bg-[#2c454678]'>
        <div className='flex absolute text-white w-full h-full text-center top-0 left-0 z-50'>
            <div className='m-auto w-[60%] '>
            <h1 className='text-3xl font-light'>" sunt quod aperiam tempora alias qui veritatis, aliquid iste autem quae maiores assumenda."</h1>
            <h1 className='text-xl mt-5 text-[#2c4546]'>peerapat S.</h1>
            </div>
        </div>
        {/* <Image 
        className='saturate-50 static z-10 w-full h-full object-cover object-bottom brightness-50 blur-[2px]'
        src={'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt='' width={1200} height={900}/> */}
    
    </div>
    </>
  )
}
