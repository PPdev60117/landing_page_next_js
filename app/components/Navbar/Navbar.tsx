'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface Menus {
    name:string,
    link:string
}

interface winsize {
  width:undefined | number,
  height:undefined | number
}

export default function Navbar({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>):JSX.Element {

  const menus:Menus[] = 
  [{name:"หน้าแรก",link:"/"},
  {name:"บริการ",link:"/next/service"},
  {name:"ผลงาน",link:"/next/portfolio"},
  {name:"เกี่ยวกับเรา",link:"/next/about"},
  {name:"ติดต่อเรา",link:"/next/contact"}]

  const [toggle,setToggle] = useState(false)
  const [size,setSize] = useState<winsize>({
    width:undefined,
    height:undefined
  })

    
    useEffect(()=>{
      const setWinSize = () => { 
        setSize({
          width:window.innerWidth,
          height:window.innerHeight,
        })
      } 

      window.addEventListener("resize",setWinSize)

      setWinSize();
      return(()=>window.removeEventListener("resize",setWinSize))
    
    },[])

  return (
    <>
      <div className={`w-full bg-[#2C4546] px-5 py-2 flex justify-between`}>
          <Link href={'/'} className='flex'><div className='flex'>
            <h1 className='text-2xl text-white m-auto prompt-regular'>LOGO</h1>
          </div></Link>
          <div className='flex sm:hidden'>
            {!toggle && <MenuRoundedIcon sx={{ fontSize: 40 }} onClick={()=>{setToggle(toggle?false:true)}} className='cursor-pointer flex sm:hidden m-auto text-3xl text-white'/>}
          </div>
            <div className={`${toggle?'translate-x-0 opacity-100':'translate-x-full opacity-0'} z-50 sm:opacity-100 w-full sm:translate-x-0 transition-translate duration-700 ease-out sm:transition-none fixed flex h-screen bg-black top-0 left-0 sm:h-auto sm:bg-inherit sm:static`}>
              <ul className={`sm:flex text-md m-auto sm:mr-0 `}> 
                {menus.map((menu:Menus,num:number)=>{
                    return(                   
                      <Link onClick={()=>setToggle(!toggle)} key={num} href={menu.link}><li className='text-center hover:bg-[#3d6061] prompt-regular hover:text-[#e6e6e6] hover:rounded-md py-2 text-[#F5F5F5] px-4'>{menu.name}</li></Link>
                    )
                })}
                <li onClick={()=>setToggle(!toggle)} className='sm:hidden text-white text-center cursor-pointer'><CloseRoundedIcon sx={{ fontSize: 40 }}/></li>
              </ul>
            </div>
        </div>
        {children}
    </>
  )
}


