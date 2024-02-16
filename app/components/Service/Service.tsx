'use client'
import Image from 'next/image'
import { motion } from "framer-motion"
import { cardVariants } from '../Advertise/Cardadver'


const Service_info = [{image:'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'จำหน่ายแบบบ้าน',content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero impedit a atque velit autem numquam natus laudantium molestiae.'},
{image:'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'ออกแบบบ้าน',content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero impedit a atque velit autem numquam natus laudantium molestiae.'},
{image:'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'ออกแบบภายใน',content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero impedit a atque velit autem numquam natus laudantium molestiae.'}]

interface Service {
    image:string,
    name:string,
    content:string
}

export default function Service() {
  return (
    <>
        <motion.div id='service' className='flex my-5 flex-col relative mt-[80px]'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true ,amount:0.8}}
        >
            
            <div className='absolute bg-[#3d60614d] w-96 h-96 rounded-full -right-[150px] -top-[100px] '></div>

            <div className='text-center relative m-auto w-96 sm:w-[60%] '>
                <h1 className='text-4xl font-semibold md:text-5xl'>บริการของเรา</h1>
                <p className='mt-3 z-50 '>Lorem,Voluptatem voluptas delectus corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, omnis. Numquam quisquam, ipsam iure voluptas </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-[40px] gap-5 mt-5 lg:my-[80px] lg:divide-x'>
                {Service_info.map((data:Service)=>{
                    return(
                        <>
                            <div className="flex flex-col md:last:col-span-2 lg:last:col-span-1 lg:even:scale-[1.1] md:last:scale-[1.02] md:last:mt-5 lg:last:scale-[1] lg:last:mt-0 drop-shadow-2xl">
                                <motion.div className="w-80 h-80 m-auto"
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Image className="drop-shadow-xl object-cover h-full" alt="" width={900} height={600} src={data.image}/>                
                                </motion.div>

                                <motion.div className="m-auto w-[80%] text-center mt-5" variants={cardVariants}>
                                    <h1 className="odd:text-2xl even:text-3xl mb-1">{data.name}</h1>
                                    <p className="text-sm text-gray-500">{data.content}</p>
                                </motion.div>
                            </div>
                        </>
                    )
                })}
            </div>
        </motion.div>
    </>
  )
}
