import { useState,useEffect,useRef } from "react"



export default function Progress(){
    const [run,setRun ] = useState(false)

    const progressRef = useRef();
    const valueRef = useRef()

    window.onscroll = ()=> setRun(prev => !prev)
    window.onload = ()=> setRun(prev => !prev)

    useEffect(()=>{
        const scrollProgress = progressRef.current;
        const progressValue = valueRef.current;


        let pos = document.documentElement.scrollTop
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round(pos * 100 / calcHeight);

        scrollProgress.style.background = `conic-gradient(#689af8 ${scrollValue}%, #2b2f38${scrollValue}%) `
        progressValue.innerText = `${scrollValue}%`
    },[run])



    return(
        <div ref={progressRef}
        className="bg-zinc-900 text-green-200 font-bold w-[55px] h-[55px] rounded-full text-center  flex justify-center
         items-center fixed top-[45%] left-[60%] md:left-[84%] lg:left-[90%] z-10 cursor-pointer shadow-lg shadow-white" onClick={()=>window.scroll(0,0)}>
            <div ref={valueRef} className="">50%</div>
        </div>
    )
}