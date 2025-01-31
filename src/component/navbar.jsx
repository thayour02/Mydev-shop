import logo from '../assets/download.webp'
import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from 'react-icons/hi';


export default function Navbar() {

    return (

        <div>
            <div className='flex pt-2 w-[100%] px-10 h-[70px]'>
                <img src={logo} alt="" className='w-20 h-20 rounded-full' />
                <h2 className='pt-10 font-semibold text-2xl uppercase'>thayour</h2>
            </div>
            <div className="overflow-hidden mt-10   relative w-[100%] h-[40px]">
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                    }}
                    className="absolute  w-full flex rounded-lg text-center text-whiteColor  whitespace-nowrap">
                    <h2 className='flex gap-4'>
                        Hello ❤ you can reach me via, 
                    </h2>
                    <div className='flex gap-4 mx-2'>
                            <a href="" className='text-whiteColor flex'><FaTwitter size={20}  className='hover:scale-105 transition-all duration-200 text-whiteColor' />dev-thayour</a>
                            <a href="https://www.linkedin.com/in/usman-temytayo-85a75329a" className='text-whiteColor flex'><FaLinkedin size={20} className='hover:scale-105 transition-all duration-200' />Usman Temytayo</a>
                            <a href="https://wa.me/+2348064675460" className='text-whiteColor flex '><FaWhatsapp size={20} className='hover:scale-105 transition-all duration-200' />08064675460</a>
                            <a href="mailto:devthayour@gmail.com.com" className='text-whiteColor flex '><HiOutlineMail size={20} className='hover:scale-105 transition-all duration-200' />devthayour@gmail.com</a>

                    </div>
                </motion.div>
            </div>
        </div>

    )
}