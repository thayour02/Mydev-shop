import weather from '../assets/wed.jpg'
import mongo from '../assets/job.jpg'
import food from '../assets/foodie.jpg'
import { FaGithub } from 'react-icons/fa6'
import './pro.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from 'react-slick'
import React from 'react'


const SimpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}>
            Next
        </div>
    )
}
const SimplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >
            Prev
        </div>
    )
}

export default function Projects() {
    const data = [
        {
            src: mongo,
            url: "https://thayourjobfinderapp.netlify.app/",
            name: "Job-Finder",
            stack: "Mern Stack"
        },
        {
            src: weather,
            url: "https://thayourweatherapp.netlify.app/",
            name: "WeatherApp",
            stack: "REACT APP",
        },
        {
            src: food,
            url: "https://github.com/thayour02/e-commerce-frontend.git",
            name: "Resturant eCommerce-website",
            stack: "Mern stack"
        }
    ]
    const slider = React.useRef(null)
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SimpleNextArrow />,
        prevArrow: <SimplePrevArrow />
    };
    return (
        <div>
            <div className='mt-20' id='projects'>
                <div className='project-heading text-center' data-aos="fade">
                    <strong className="text-2xl font-bold text-blue-400 inline">Recent Project</strong>
                </div>
                <div className="text-center items-center flex justify-end" data-aos="flip-left">
                    <button onClick={() => slider?.current?.slickPrev()} className="p-2 rounded-full ml-5">
                        <FaAngleLeft className="w-8 h-8 p-1" size={40} />
                    </button>

                    <button onClick={() => slider?.current?.slickNext()} className="p-2  rounded-full ml-5">
                        <FaAngleRight className="w-8 h-8 p-1" />
                    </button>
                </div>
                <Slider ref={slider} {...settings}
                    className="overflow-hidden mt-10 lg:mt-0 lg:mx-40 mx-10 text-center " data-aos="fade">
                    {
                        data.map((items => (
                            <div key={items} id='project-box' className='  lg:px-0 rounded-lg shadow-lg  ' data-aos="flip-left">
                                <a href={items.url}>
                                    <img src={items.src} alt="project" className='lg:h-[500px] h-[200px]' />
                                    <div id='p-overlayer'>
                                        <strong>
                                            Outserved Reports
                                            <h1 className='uppercase text-green-400 pt-4'>{items.name}</h1>
                                            <h2 className='uppercase text-red-400 text-[2rem]'>{items.stack}</h2>

                                        </strong>

                                    </div>
                                    <div className='lg:hidden font-bold'>
                                        <h1 className='uppercase text-green-400 '>{items.name}</h1>
                                        <h2 className='uppercase text-red-400 text-[2rem]'>{items.stack}</h2>

                                    </div>
                                </a>

                            </div>
                        )))
                    }
                </Slider>

            </div>
            <div id='github-btn'>
                <a href="https://github.com/thayour02" className=' uppercase font-semibold tracking-wide border-b-2 border-b-blue-200  hover:scale-105 transition-all duration-200 hover:bg-[rgba(104,154,248,0.102)] rounded-full w-[150px] flex gap-2 justify-center items-center'>
                    My Github  <FaGithub />
                </a>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-700 ease-in-out group-hover:w-full"></span>

            </div>
        </div>

    )
}