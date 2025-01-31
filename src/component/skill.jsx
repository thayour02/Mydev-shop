import { FaCloudDownloadAlt } from "react-icons/fa";
import cv from '../assets/cv.pdf'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import java from '../assets/js.png'
import logo from '../assets/logo192.png'
import git from '../assets/github.png'
import mongo from '../assets/mongo.png'
import post from '../assets/post.png'





const skill = [
    {
        id: 1,
        src: html,
        title: "HTML ",
        style: "hover:shadow-orange-500 pt-6  px-10 bg-none hover:scale-105 transition-all duration-200 rounded-full h-[200px] w-[200px]"
    },
    {
        id: 2,
        src: css,
        title: "CSS",
        style: "hover:shadow-blue-500 pt-6  px-10 hover:transition ease-in duration-3000 hover:scale-105 transition-all duration-200  rounded-full h-[200px] w-[200px]"
    },
    {
        id: 3,
        src: tailwind,
        title: "TAILWIND CSS",
        style: "hover:shadow-cyan-400 pt-6  px-10 hover:scale-105 transition-all duration-200  rounded-full h-[200px] w-[200px]"
    },
    {
        id: 4,
        src: node,
        title: "NODE JS EXPRESS ",
        style: "hover:shadow-green-500 pt-6  px-10 hover:scale-105 transition-all duration-200  rounded-full h-[200px] w-[200px]"
    },
    {
        id: 5,
        src: java,
        title: "JAVASCRIPT",
        style: "hover:shadow-yellow-500 pt-6  px-10 hover:scale-105 transition-all duration-200   rounded-full h-[200px] w-[200px]"
    },
    {
        id: 6,
        src: logo,
        title: "REACT",
        style: "hover:shadow-blue-200 pt-6  px-10 hover:scale-105 transition-all duration-200 rounded-full h-[200px] w-[200px]"
    },
    {
        id: 7,
        src: mongo,
        title: "MONGODB",
        style: "hover:shadow-green-500 pt-6  px-10 hover:scale-105 transition-all duration-200 rounded-full h-[200px] w-[200px]"
    },

    {
        id: 9,
        src:git,
        title: "GITHUB",
        style: "hover:shadow-blue-400 pt-6  px-10 hover:scale-105 transition-all duration-200 rounded-full h-[200px] w-[200px]"
    },
    {
        id: 10,
        src: post,
        title: "POSTMAN TOOL",
        style: "hover:shadow-blue-400 pt-6  px-10 hover:scale-105 transition-all duration-200 rounded-full h-[200px] w-[200px]"
    }
]

export default function Skill() {

    return (
        <div name="Skills" className="w-full mt-4 lg:mt-20 md:mt-0">
            <div className=" flex flex-col lg:flex-row justify-center w-full h-full">
                <div className="lg:w-1/2 text-2xl mt-20 mx-10 md:text-" data-aos="fade-right">
                    <strong className="text-2xl font-bold text-blue-400 inline">My Skills</strong>
                    <h2 className="py-2 font-semibold">This are the technology have worked with.</h2>
                    <div>
                        <a href={cv} download={cv}  className='text-whiteColor uppercase 
                        font-semibold tracking-wide border-b-2 hover:scale-105 transition-all duration-200 
                        border-b-blue-200 hover:bg-[rgba(104,154,248,0.102)] 
                        rounded-full w-[150px] flex gap-2 justify-center items-center'>
                            GET CV <FaCloudDownloadAlt className="underline" />
                        </a>
                    </div>
                </div>
                <div
                    className="grid grid-cols-3 gap-2 mt-10 lg:gap-18 lg:mx-10 md:grid-cols-4 md:mx-20  lg:grid-cols-3  " data-aos="fade-left">
                    {
                        skill.map(({ id, src, title, style }) => (
                            <div className={`hover:shadow-xl  sm:hover:shadow-orange-500 sm:hover:scale-105 -mx-10 px-10  transition-2 duration-300 text-center text-white ${style}`} key={id}>
                                <img src={src} className="cursor-pointer mx-2 rounded-full w-[100px] h-[100px]" alt="" />
                                <p className="font-semibold    mt-5 ">{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>


    )
}