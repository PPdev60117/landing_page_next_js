'use client'
import { motion, Variants  } from "framer-motion"
import { advertise } from "./Advertise";

export const cardVariants: Variants = {
    offscreen: {
      y: 20,
      opacity:0
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      },
      opacity:1
    }
  };

export default function Cardadver(props:{data:advertise}) {
    return(
        <>
            <motion.div 
                className='odd:text-[#2C4546] odd:bg-[#fafafa] py-[35px] px-[40px] lg:py-[80px] even:text-[#fafafa] even:bg-[#2C4546]'
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true ,amount:0.8}}
                
            >
                <motion.div className='text-center' variants={cardVariants}>{props.data.icon}</motion.div>
                <motion.div className='text-center mt-4' variants={cardVariants}>
                    <h1 className='text-2xl my-2 '>{props.data.name}</h1>
                    <p className='w-full max-w-80  m-auto'>{props.data.present}</p>
                </motion.div>
            </motion.div>
        </>
    )
}
