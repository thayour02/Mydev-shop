import { BsPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"
import cv from '../assets/cv.pdf'

const linkIcon = [
    {
        id: 1,
        child: (
            <>
                Github
                <FaGithub size={30} />
            </>
        ),
        href: "https://github.com/thayour02",
        style:"rounded-tr-md text-(--whiteColor) underline text-2xl"
    },
    {
        id: 2,
        child: (
            <>
                Linkedin
                <FaLinkedin size={30} />
            </>
        ),
        href: "https://www.linkedin.com/in/usman-temytayo-85a75329a",
        style:"text-(--whiteColor) underline text-2xl"
    },
    {
        id: 3,
        child: (
            <>
                Resume
                <BsPersonFill size={30} />
            </>
        ),
        downlod: true,
        href:cv,
        style:"text-(--whiteColor) underline text-2xl"
    },
    {
        id: 4,
        child: (
            <>
                Mail
                <HiOutlineMail size={30} />
            </>
        ),
        href: "mailto:devthayour@gmail.com.com",
        style:"rounded-br-md text-(--whiteColor) underline text-2xl"
    }
]

export default function Icon() {
    return <div className="hidden lg:flex flex-col top-[35%] left-0 fixed  w-80 ">
        <ul>
            {
                linkIcon.map(({ id, child, href, download, style }) => (
                    <li
                        key={id}
                        className={
                            `flex justify-between items-center  w-40 h-14 ml-[-120px] hover:ml-[-5px] hover:rounded-md duration-300 bg-(--bgColor) px-2 ${style}` 
                        }>
                        <a href={href}
                            download={download}
                            className=" flex  justify-between items-center   w-full">
                            <>
                                {child}
                            </>
                        </a>
                    </li>
                ))

            }

        </ul>
    </div>

}