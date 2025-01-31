import dev from '../assets/devt.jpg'
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import './ban.css'
import { Link } from 'react-scroll';

export default function Home() {
    return (
        <div id='#home' className='flex flex-col mt-10 lg:flex-row md:flex-row'>
            <div className='w-1/2 mx-10 mt-20' data-aos="fade-down">
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
            <div className="home-img mt- mx-6" data-aos="fade-up">
                <div className="img-box">
                    <img src={dev} alt="" />

                    <h2>Dev-thayour <br /><span>Full-stack</span></h2>
                    <div className='flex gap-4 my-4'>
                         <a href="https://wa.me/+2348064675460"><FaWhatsapp  size={30} className='hover:scale-105 transition-all duration-200' /></a>
                        <a href="https://www.linkedin.com/in/usman-temytayo-85a75329a"><FaLinkedin size={30} className='hover:scale-105 transition-all duration-200' /></a>
                    </div>
                    <a href="" className='text-whiteColor uppercase font-semibold tracking-wide border-b-2 border-b-blue-200 hover:bg-blue-500 rounded-full w-[100px] flex justify-center items-center'>Hire me!</a>
                </div>
            </div>
            <div className='lg:hidden md:hidden mx-20 mt-4'>
                    <div className='flex gap-4 my-4'>
                        <a href=""><FaTwitter size={30} className='hover:scale-105 transition-all duration-200' /></a>
                        <a href="https://www.linkedin.com/in/usman-temytayo-85a75329a"><FaLinkedin size={30} className='hover:scale-105 transition-all duration-200' /></a>
                        <a href="https://wa.me/+2348064675460"><FaWhatsapp  size={30} className='hover:scale-105 transition-all duration-200' /></a>
                    </div>
                    <a href="" className='text-whiteColor uppercase font-semibold tracking-wide border-b-2 border-b-blue-200 hover:bg-blue-500 rounded-full w-[100px] flex justify-center items-center'>Hire me!</a>
                </div>
        </div>
    )
}