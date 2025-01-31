import dev from '../assets/devt.jpg'
import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from 'react-scroll';
import './ban.css'

export default function Banner() {
    return (
        <div id='home' className='flex justify-between items-center flex-wrap relative'>
            <div className='w-1/2 mx-10 mt-20'>
                <div className='flex gap-4'>
                    <strong className='space-x-1 font-bold text-2xl mb-4'>Hello 👋,</strong>
                    <h1 className='text-2xl font-semibold'>I&apos;m Temitayo Emmanuel</h1>
                </div>
                <p>I have a year experience building and designing software app.
                    currently, i love to work on web application using
                    technologies like
                    React, Tailwind, Node JS and MongoDB
                </p>
                <div className='mt-4'>
                    <Link to="Skills" className="relative cursor-pointer group overflow-hidden font-weight-400 space-y-1 tracking-wide uppercase hover:transition-all duration-200 ease-in-out">
                        Scroll for More
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                    </Link>
                </div>
            </div>


            <div className="relative w-[330px] mt-10 h-[330px] rounded-full flex justify-center items-center opacity-80 bg-black/20 overflow-hidden group">
                {/* Rotating gradient */}
                <div
                    className="absolute inset-0 rounded-full before:content-[''] before:absolute before:inset-[-10px_140px] before:rounded-full before:bg-gradient-to-tr before:from-[#00ccff] before:to-[#d400d4] before:animate-spin-slow before:transition-[inset] hover:before:inset-[-20px_0] group-hover:before:inset-0"
                ></div>
                {/* Inner background */}
                <div className="absolute inset-[6px] bg-[rgb(22,32,82)] z-10 rounded-full"></div>

                {/* Image and content */}
                <div className="absolute inset-[30px] border-[6px] border-black/20 z-30 rounded-full flex flex-col justify-center items-center overflow-hidden">
                    <img
                        src={dev}
                        alt="Dev"
                        className="absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-500 z-40 hover:opacity-0"
                    />
                    <h2 className="relative text-white font-semibold text-lg text-center uppercase tracking-wide z-10">
                        Dev-Thayour <br />
                        <span className="font-light text-sm">Full-Stack Developer</span>
                    </h2>
                    <div className="flex space-x-2 text-white text-2xl mt-4 z-10">
                            <a href="https://www.linkedin.com/in/usman-temytayo-85a75329a" className="hover:scale-105 cursor-pointer transition-all duration-200 pointer tracking-wide">
                                <FaLinkedin />
                            </a>
                            <a href="" className="hover:scale-105 cursor-pointer transition-all duration-200 pointer">
                                <FaTwitter />
                            </a>
                    </div>
                    <Link
                        to="#"
                        className="relative mt-2 py-1 px-4 bg-white
                         text-black rounded-full text-sm font-medium 
                        uppercase tracking-wide transition-all hover:tracking-normal 
                        hover:shadow-lg z-10"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>

     


            
        </div>
    )
}
