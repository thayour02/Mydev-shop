
import img from '../assets/download.webp'
import {  FaGithub,  FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail  } from "react-icons/hi"
import { Link } from 'react-scroll'
export default function Foooter() {


    return (
        <div className="mt-10 text-white  w-full p-4 max-w-screen-2xl mx-auto xl:px-24 px-10">
            <footer className="footer text-neutral-content items-center p-4">
                <aside className="grid-flow-col  items-center">
                    <Link to='/' className='text-xl font-bold text-purple-700 flex
                        items-center'>
                        <img className='img rounded-full' src={img} alt="" />
                         <span className='text-white'>thayour</span>
                    </Link>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a>
                        <a href="https://github.com/thayour02">
                            <FaGithub size={40} />
                        </a>
                    </a>
                    <a>
                        <a href="https://www.linkedin.com/in/usman-temytayo-85a75329a"
                        >
                      <FaLinkedin size={40}/>
                        </a>
                    </a>
                    <a>
                        <a href="mailto:temyking@gmail.com.com"></a>
                        <HiOutlineMail size={40} />
                    </a>
                </nav>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </footer>

        </div>
    )
}

