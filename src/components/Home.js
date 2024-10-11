import Link from "next/link"
import Image from 'next/image';
import CLickSound from "./ClickSound"
export default function Home2() {

  return (

    <CLickSound soundFile="/sounds/menu-button-88360.mp3">

       <Link  href="/Instruction">
<div className="w-dvw h-dvh relative desktop	 bg-black mx-auto flex flex-col justify-center">


<Image
  src={'https://bozdlcvcmvligocahzrc.supabase.co/storage/v1/object/public/images/small_updateHome.gif?t=2024-10-08T21%3A29%3A30.094Z'}
  height={852}
  width={393}
  alt={`A cute animal!`}
  className="w-[104.8%] h-[129.3%] top-[-14.6%] absolute"
  unoptimized = {true} 
/>


  <div className="absolute left-[31%]  text-center whitespace-nowrapleft-[20%] top-[88.5%] text-[#3b3b43] text-4xl font-normal font-['TCS_MyRiver']">แตะจอเพื่อเริ่ม</div>
  <div className="absolute left-[22%] tracking-[0em] top-[5%]  text-center text-[#3b3b43] text-8xl font-normal font-['TCS_MyRiverBold']">ดาวหมา</div>
  <div className="absolute -tracking-[0.02em]	left-[23.8%] top-[18.7%] text-[#3b3b43]  font-[550] text-xl font-['TCS_8Jolie_Thin']">ที่ดาวหมาจะเป็นยังไงบ้างนะ</div>
</div>
    </Link> 

    </CLickSound>
    
  );
}

//  <img className="w-[104.8%] h-[129.3%] top-[-14.6%] absolute" src="/images/updateHome.gif" />
/*   <Image
  src={'/images/small_updateHome.gif'}
  height={852}
  width={393}
  alt={`A cute animal!`}
  className="w-[104.8%] h-[129.3%] top-[-14.6%] absolute"
  unoptimized = {true} 

/> */