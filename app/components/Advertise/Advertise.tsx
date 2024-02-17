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

const advertise:advertise[] = [{icon:<LocalAtmRoundedIcon sx={{ fontSize: 70 }} />,name:'บริษัทชั้นนำ',present:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, a? Error mollitia cumque odio! Nemo fugit aut rem sed veritatis. '},
{icon:<ShoppingCartOutlinedIcon sx={{ fontSize: 70 }} />,name:'คุ้มค่าคุ้มราคา',present:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, a? Error mollitia cumque odio! Nemo fugit aut rem sed veritatis.'},
{icon:<StarOutlineRoundedIcon sx={{ fontSize: 70 }} />,name:'มืออาชีพ',present:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, a? Error mollitia cumque odio! Nemo fugit aut rem sed veritatis.'},]


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
                    <Cardadver data={data} key={num}/>
                )
            })}
        </motion.div>
    </>
  )
}
