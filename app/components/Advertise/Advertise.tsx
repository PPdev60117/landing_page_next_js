'use client'
import React from 'react'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { motion, Variants  } from "framer-motion"
import Cardadver from './Cardadver';


export interface advertise {
    icon:string | JSX.Element,
    name:string,
    present:string,
}


const advertise:advertise[] = [{icon:<LocalAtmRoundedIcon className='text-8xl'/>,name:'บริษัทชั้นนำ',present:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, a? Error mollitia cumque odio! Nemo fugit aut rem sed veritatis. '},
{icon:<ShoppingCartOutlinedIcon className='text-8xl'/>,name:'คุ้มค่าคุ้มราคา',present:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, a? Error mollitia cumque odio! Nemo fugit aut rem sed veritatis.'},
{icon:<StarOutlineRoundedIcon className='text-8xl'/>,name:'มืออาชีพ',present:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, a? Error mollitia cumque odio! Nemo fugit aut rem sed veritatis.'},]


// const Card = (data:advertise) => {
    
//     return(
//         <>
//             <motion.div 
//                 className='odd:text-[#2C4546] odd:bg-[#fafafa] py-[35px] px-[40px] lg:py-[80px] even:text-white even:bg-[#2C4546]'
//                 initial="offscreen"
//                 whileInView="onscreen"
//                 viewport={{ once: true ,amount:0.8}}
//             >
//                 <motion.div className='text-center' variants={cardVariants}>{data.icon}</motion.div>
//                 <div className='text-center mt-4'>
//                     <h1 className='text-2xl my-2 font-semibold'>{data.name}</h1>
//                     <p className='w-full max-w-80  m-auto'>{data.present}</p>
//                 </div>
//             </motion.div>
//         </>
//     )
// }


export default function Advertise():JSX.Element {


  return (
    <>
        <motion.div className='grid grid-row-3 md:grid-cols-3 w-full'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true ,amount:0.8}}
        >
            {advertise.map((data:advertise,num:number)=>{
                return(
                    // <div className='odd:text-[#2C4546] odd:bg-[#fafafa] py-[35px] px-[40px] lg:py-[80px] even:text-white even:bg-[#2C4546]'>
                    //     <div className='text-center'>{data.icon}</div>
                    //     <div className='text-center mt-4'>
                    //         <h1 className='text-2xl my-2 font-semibold'>{data.name}</h1>
                    //         <p className='w-full max-w-80  m-auto'>{data.present}</p>
                    //     </div>
                    // </div>
                    <Cardadver data={data} key={num}/>
                )
            })}
        </motion.div>
    </>
  )
}
