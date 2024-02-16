'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Header() {

  return (
    <>
        <div className='prompt-regular w-full h-[500px] relative'>
            <div className='z-20 absolute flex  w-full h-full'>
                <div className='fade-reveal w-[350px] md:w-[700px] text-[#f0f0f0] text-center m-auto'>
                    <h1 className='md:text-6xl text-4xl font-semibold mb-4'>บริษัท ABC จำกัด</h1>
                    <p className='text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur qui sint laboriosam cumque officiis blanditiis doloremque dolore molestias tenetur impedit eligendi nostrum architecto omnis aliquid, quo ullam ab aliquam.</p>
                </div>
            </div>
            <Image width={1800} height={1000} className='fade-in w-full h-full object-cover object-bottom' src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </>
  )
}
