import { FaCloudDownloadAlt } from "react-icons/fa";
import cv from '../assets/cv.pdf'

export default function Edu() {
    const career = [
        {
            title: "Mentorship",
            name: "Full-stack",
            company: "SQI college",
            year: "2023-2024"
        },
        {
            title: "Mentorship",
            name: "Full-stack",
            company: "Enforca Technologies",
            year: "2024-present"
        }
    ]

    const education = [
        {
            title: "Web-Design",
            name: "SQI college",
            year: "2023"
        },
        {
            title: "Javscript and Firebase",
            name: "SQI college",
            year: "2023"
        },
        {
            title: "Mern-Stack",
            name: "SQI college",
            year: "2023-2024"
        },
        {
            title: "Typescript",
            // name:"SQI college",
            year: "2024-2025"
        }
    ]


    return (
        <div className="mt-20 mx-16">
            <div className="flex w-[100%] flex-col-reverse md:flex-row lg:flex-row md:justify-between md:items-center  lg:justify-between lg:items-center relative" data-aos="">
                <div className="mt-8 lg:-mt-28 md:-mt-28 -mx-8" data-aos="fade-right">
                    <h3 className="font-bold text-[2rem] mb-[10px] border-b-2 w-28 border-b-gray-400">Carrer</h3>
                    {
                        career.map((item, index) => (
                            <div key={index} className="flex flex-col w-[100%] mt-[20px]">
                                <strong className="text-[1.3rem] font-semibold border-l-[3px] border-l-blue-900 uppercase text-spacing-[2px] pl-[10px] leading-[1.3rem]">{item.title}</strong>
                                <strong className="text-[1rem] text-spacing-[2px] uppercase  pl-[14.6px] text-gray-400">{item.name}</strong>
                                <span className="text-[1rem] text-spacing-[2px] uppercase  pl-[14.6px] text-gray-400">{item.company}</span>
                                <span className="text-[1rem] text-spacing-[2px] uppercase  pl-[14.6px] text-gray-400">{item.year}</span>
                            </div>
                        ))
                    }

                </div>
                <div className="absolute hidden md:block lg:block top-0 left-[50%] transform -translate-x-1/2 h-full w-0.5 bg-gray-200" data-aos="fade"></div>
                <div className="-mx-8" data-aos="fade-left">
                    <h3 className="font-bold text-[2rem] mb-[10px] border-b-2 w-40 border-b-gray-400">Education</h3>
                    {
                        education.map((item, index) => (
                            <div key={index} className="flex flex-col w-[100%] mt-[20px]">
                                <strong className="text-[1.3rem] font-semibold border-l-[3px] border-l-blue-900 uppercase text-spacing-[2px] pl-[10px] leading-[1.3rem]">{item.title}</strong>
                                <h4 className="text-[1rem] text-spacing-[2px] uppercase  pl-[14.6px] text-gray-400">{item.name}</h4>
                                <span className="text-[1rem] text-spacing-[2px] uppercase  pl-[14.6px] text-gray-400">{item.year}</span>

                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="lg:mx-[400px] md:mx-[270px]" data-aos="fade">
                <a href={cv} download={cv} className='text-whiteColor 
                uppercase font-semibold text-[1.10rem] 
                 hover:scale-105 overflow-hidden  
                lg:mt-[50px] mt-[30px] transition-all duration-200  
                tracking-wide border-b-2 border-b-blue-200 
                hover:bg-[rgba(104,154,248,0.102)] rounded-full w-[150px] 
                flex justify-center items-center gap-2 cursor-pointer' >
                    GET CV <FaCloudDownloadAlt />
                </a>
            </div>

        </div>
    )
}