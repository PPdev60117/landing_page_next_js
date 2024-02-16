'use client'
import Image from 'next/image'
import { motion, Variants  } from "framer-motion"
import { cardVariants } from '@/app/components/Advertise/Cardadver'
import { slidein } from '@/app/components/Owner/Owner'
import { datashow } from './page'

export default function Cardshow(props:{data:datashow,num:number}) {
    return (
        <>
            <motion.div className='flex flex-col bg-[#fafafa] mb-5 md:my-[45px] md:flex-row'
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true ,amount:0.8}}
            >
                <motion.div variants={slidein} className={`flex md:basis-1/2 ${props.num%2 === 0?'order-last':''}`}>
                    <Image className='mb-2 md:mb-0 lg:p-[50px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] m-auto p-5 w-[90%] md:w-[100%]' width={1200} height={900} src={props.data.image} alt="" />
                </motion.div>
    
                <div className='flex md:basis-1/2'>
                    <div className={`w-[90%] ${props.num%2 === 0?'md:text-end':'md:text-start'} text-center mx-auto md:my-auto`}>
                        <motion.div variants={cardVariants}><h1 className='mb-3 md:text-4xl text-3xl font-semibold'>{props.data.name}</h1></motion.div>
                        <motion.div variants={cardVariants}><p className={`${props.num%2 === 0?'md:w-full':'md:w-[80%]'} px-5 md:px-0 text-sm md:text-md md:mt-4 lg:text-lg `}>{props.data.content}</p></motion.div>
                    </div>
                </div>
            </motion.div>
        </>
      )
}
