'use client'
import Image from 'next/image'
import { motion, Variants  } from "framer-motion"
import { cardVariants } from '../Advertise/Cardadver'

export const slidein: Variants = {
    offscreen: {
      x: -200,
      opacity:0
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      },
      opacity:1
    }
  };

export default function Owner() {
  return (
    <>
        <motion.div className='flex flex-col bg-[#fafafa] mb-5 md:my-[45px] md:flex-row'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true ,amount:0.8}}
        >
            <motion.div variants={slidein} className='flex md:basis-1/2'>
                <Image className='mb-2 md:mb-0 lg:p-[50px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] m-auto p-5 w-[90%] md:w-[100%]' width={1200} height={900} src="https://plus.unsplash.com/premium_photo-1661679796494-61408229a764?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </motion.div>

            <div className='flex md:basis-1/2'>
                <div className='w-[90%] md:text-start text-center mx-auto md:my-auto'>
                    <motion.div variants={cardVariants}><h1 className='mb-3 md:text-4xl text-3xl font-semibold'>บริษัท ABC ทำอะไรบ้าง</h1></motion.div>
                    <motion.div variants={cardVariants}><p className='relative z-50 px-5 md:px-0 text-sm md:text-md md:mt-4 lg:text-lg md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda rem rerum mollitia! Sequi aliquam aspernatur veritatis voluptates quae unde voluptate amet. Accusantium ipsam facere deserunt neque, ipsa optio incidunt.</p></motion.div>
                </div>
            </div>
        </motion.div>
    </>
  )
}
