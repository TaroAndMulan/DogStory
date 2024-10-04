'use client'
import Link from "next/link"
import Image from 'next/image';
import InstructionPng from '/public/images/Instruction2.png'
import CreamBackgroundGif from '/public/images/CreamBackground.gif'


export default function Instruction() {

  return (
    <div className="w-[393px] h-[852px] relative  bg-white mx-auto  overflow-hidden"
      >
    <Image width={450} height={852}
        className="w-[450px] h-[852px] left-0 top-0 absolute"
        src={CreamBackgroundGif}
        alt="moving background" 
        unoptimized={true}

      />

      <Image
        width = {1178}
        height = {852}
        className="w-[1178px] top-[253px] max-w-full h-auto absolute"
        src={InstructionPng}
        alt="lower bush" 
      />
  
      <div className="left-[127px] top-[253px] absolute text-center text-black text-8xl font-normal font-['FC_Marshmallow']">
        วิธีเล่น
      </div>
      <div className="left-[53px] top-[369px] absolute text-center">
        <div className="text-black text-[64px] font-normal font-['FC_Marshmallow']">
          แตะที่ตัวหนังสือ ที่ี
        </div>
        <Link href='/Old_bed_1' className="text-black text-[64px] font-normal font-['FC_Marshmallow'] underline">
          ขีดเส้นใต้ทุกครั้ง{" "}
        </Link>
        <div className="text-black text-[64px] font-normal font-['FC_Marshmallow']">
          เพื่อดำเนินเรื่องต่อ
        </div>
      </div>
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