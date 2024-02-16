'use client'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
    <div className=' text-[#d5d5d5] bg-[#2C4546] p-[50px] grid gap-5 grid-cols-1 md:grid-cols-2'>
        <div className='max-w-[500px]'>
            <h1 className='text-4xl font-semibold'>About Us</h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates placeat vero modi nulla reiciendis cumque dolore nihil maiores expedita qui sequi quidem, necessitatibus, ab, deserunt odio ex aliquam iusto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores minima soluta quod impedit debitis ut fuga vero atque voluptatum magni illo, nulla cumque in doloribus at, cum quaerat nobis vel?</p>
        </div>
        <div className='max-w-[500px]'>
            <div>
                <h1 className='text-4xl font-semibold'>Contact Us</h1>
                <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quia aliquid eos. Consequatur nam hic totam minima voluptates quos illum alias assumenda quod. Adipisci cumque delectus laudantium quidem neque sequi!</p>
            </div>

            <div className='mt-3'>
                <h1 className='text-3xl font-semibold'>Telephone</h1>
                <div className='mt-2'>
                    <p>0845547896</p>
                    <p>0845547896</p>
                </div>
            </div>

            <div className='flex gap-2 mt-3'>
                <Link href={'https://web.facebook.com/peerapat.sattarattana/'}><motion.div 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                ><FacebookIcon className='cursor-pointer text-4xl'/></motion.div></Link>
                <Link href={'https://www.instagram.com/as_peerinnn/'}><motion.div 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                ><InstagramIcon className='cursor-pointer text-4xl'/></motion.div></Link>
                <Link href={''}><motion.div 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                ><TwitterIcon className='cursor-pointer text-4xl'/></motion.div></Link>
                <Link href={''}><motion.div 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                ><EmailIcon className='cursor-pointer text-4xl'/></motion.div></Link>
            </div>
        </div>
    </div>
    </>
  )
}
