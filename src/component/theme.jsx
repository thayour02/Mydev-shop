import { useState,useEffect } from "react";
import { LuSunMoon } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";

export default function Themes(){
const [dark,setDark] = useState(false)


 useEffect(()=>{
    if(dark){
        document.documentElement.style.setProperty('--bgColor', '#162052',)
        document.documentElement.style.setProperty('--whiteColor', '#fff')
    }else{ 
       document.documentElement.style.setProperty("--bgColor", '#fff')
        document.documentElement.style.setProperty('--whiteColor', "#111")
    }
 },[dark])

    return(
        <div className=" cursor-pointer w-[50px] h-[50px] rounded-full flex 
        items-center justify-center fixed top-[35%] left-[60%] md:left-[84%] lg:left-[90%] sm:fixed z-10">
            <div className="">
               {
                dark 
                ?    <MdDarkMode onClick={()=>setDark(false)} color="white" size={30}/> 
                :  <LuSunMoon onClick={()=>setDark(true)} color="dark" size={30}/>
               }
            </div>
        </div>
    )
}