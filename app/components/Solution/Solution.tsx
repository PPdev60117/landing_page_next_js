'use client'
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { motion,Variants} from 'framer-motion';

interface solution {
    icon:JSX.Element,
    name:string,
}


const solution = [{icon:<HomeWorkOutlinedIcon className='m-auto text-6xl text-white'/>,name:'ออกแบบสถาปัตยกรรม'},
{icon:<EngineeringOutlinedIcon className='m-auto text-6xl text-white'/>,name:'วิศวกรวิเคราะห์โครงสร้าง'},
{icon:<AccountBalanceOutlinedIcon className='m-auto text-6xl text-white'/>,name:'ดำเนินการกู้แบงค์ให้สำหรับลูกค้า'},
{icon:<AddOutlinedIcon className='m-auto text-6xl text-white'/>,name:'ดูแลความเรียบร้อยจนจบงานก่อนสร้าง'}
]

export default function Solution() {
  return (
    <>
    <motion.div className='my-[80px] lg:mt-[0]'
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true ,amount:0.8}}
    >
        <div className='text-center relative m-auto w-96 sm:w-[60%] '>
            <h1 className='text-4xl font-semibold md:text-5xl text-[#2C4546]'>ทุกขั้นตอนเริ่มต้นที่เรา</h1>
            <p className='mt-3 z-50 text-[#2c4546a1]'>Lorem,Voluptatem voluptas delectus corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, omnis. Numquam quisquam, ipsam iure voluptas </p>
        </div>

        <div className='flex mt-[35px]'>
            <div className='mx-auto grid grid-cols-2 gap-y-5 md:grid-cols-4'>
            {solution.map((data:solution,num:number)=>{
                return(
                    <>
                        <div className='flex flex-col relative'>
                            <motion.div className='mx-auto bg-[#2c4546a1] w-24 flex h-24 rounded-full'
                                variants={{  offscreen: {
                                    y: 20
                                  },
                                  onscreen: {
                                    y: 0,
                                    transition: {
                                      type: "spring",
                                      bounce: 0.4,
                                      duration: num + 0.8
                                    }
                                  }}}
                            >
                                {data.icon}
                            </motion.div>
                            <div className={`w-24 absolute bg-[#2c45464d] hidden md:flex h-[2px] ${num===3?'opacity-0':''} -right-[48px] top-[45px] `}></div>
                            <div className='text-center mt-5'>
                                <h1 className='text-4xl text-[#2c4546]'>0{num+1}</h1>
                                <p className='w-[60%] mx-auto text-[#2c454678]'>{data.name}</p>
                            </div>
                        </div>
                    </>
                )
            })}
            </div>
        </div>
    </motion.div>
    </>
  )
}
