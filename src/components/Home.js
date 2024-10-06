import Link from "next/link"
import Image from 'next/image';
//import HomeGif from '/public/images/newHome_cropped.gif'
export default function Home() {

  return (
    <Link href="/Instruction">

  
<div className="w-[393px] h-dvh relative bg-white mx-auto overflow-hidden">
    <Image 
    width={393}
    height={654}
    className="w-[393px] h-full left-0 absolute" 
    src="/images/newHome_cropped.gif" alt="background" 
    unoptimized/>

  <div className="left-[125px] top-[699px] absolute text-center text-black text-4xl font-normal font-['TCS MyRiver']">แตะจอเพื่อเริ่ม</div>
  <div className="left-[87px] top-[94px] absolute text-center text-black text-8xl font-normal font-['TCS MyRiverBold']">ดาวหมา</div>
  <div className="left-[112px] top-[217px] absolute text-center text-black text-base font-normal font-['TCS 8Jolie Thin']">ที่ดาวหมาจะเป็นยังไงบ้างนะ</div>
</div>

    </Link>

  );
}
