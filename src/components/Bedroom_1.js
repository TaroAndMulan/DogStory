"use client";
import Link from "next/link";
import Image from "next/image";
import CLickSound from "./ClickSound"

export default function Bedroom_1() {
  return (
<div className="w-dvw h-dvh relative max-w-screen-sm bg-black mx-auto flex flex-col justify-center">


<Image
  src={'/images/Dog_Planet.png'}
  height={852}
  width={393}
  alt={`A cute animal!`}
  className="w-[104.8%] h-[129.3%] top-[-14.6%] absolute"

/>
  <div 
    className=" ctext top-[4.6%]  text-[#3b3b43] text-2xl font-normal font-['TCS_8Jolie_Thin']">
    วันนี้เป็นวันที่มีเวลาว่าง<br/>ฉันจัดห้องไปเรื่อย ๆ <br/>จนกระทั่ง
  </div>



  <CLickSound soundFile="/sounds/menu-button-88360.mp3">

  <Link href="/Bedroom_2" className="w-[94.1%] h-[16.8%] left-[2.9%] top-[80.9%] absolute">

    <Image
  src={'/images/Button_Purple.png'}
  height={111}
  width={353}
  alt={`A cute animal!`}
  className="w-[100%] h-[100%] absolute"

/>

    <div 
      className="ctext top-[32.4%]  text-[#f9eeee] text-2xl font-normal font-['TCS_8Jolie_Thin']">
      ฉันพบอะไรบางอย่าง
    </div>
  </Link> </CLickSound>
    </div>
  );
}

/*
   const [viewportHeight,setViewportHeight] = useState()

    useEffect(()=>{setViewportHeight( window.innerHeight)  
        console.log("yea",viewportHeight)},[])


        
    style={{
        transform: `scale(${viewportHeight/852.0}) translateY(var(--translate-y)) `, // Scaling up based on viewport height
        '--translate-y':`${(viewportHeight-852.0)/2.0}px`
     
      }}
      >
      */
