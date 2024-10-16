import Link from "next/link";
import Image from "next/image";
import CLickSound from "./ClickSound"

export default function Bedroom_1() {
  return (
<div className="w-dvw h-dvh relative desktop bg-black mx-auto flex flex-col justify-center overflow-hidden">


<Image
  src={'https://bozdlcvcmvligocahzrc.supabase.co/storage/v1/object/public/images/Dog_Planet.jfif'}
  height={852}
  width={393}
  alt={`A cute animal!`}
  className="scale-x-[105%] h-[129.3%] left-[0%] top-[-17.6%] absolute"
/>



  <div 
    className=" left-[8%] top-[5%] absolute  leading-relaxed
 text-[#3b3b43] text-2xl font-normal  font-['TCS_8Jolie_Thin']">
    วันนี้เป็นวันที่มีเวลาว่าง<br/>ฉันจัดห้องไปเรื่อย ๆ <br/>จนกระทั่ง
  </div>



  <CLickSound soundFile="/sounds/menu-button-88360.mp3">

  <Link href="/Bedroom_2" className="w-[94.1%] h-[16.8%] left-[2.9%] top-[78.9%] absolute">

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
<Image
  src={'/images/Dog_planet.jfif'}
  height={852}
  width={393}
  alt={`A cute animal!`}
  className="w-[104.8%] h-[129.3%] top-[-14.6%] absolute"

/>

<Image
  src={'https://bozdlcvcmvligocahzrc.supabase.co/storage/v1/object/public/images/Dog_Planet.jfif'}
  height={852}
  width={393}
  alt={`A cute animal!`}
  className=" 	w-[110.8%] h-[129.3%] left-[0%] top-[-14.6%] absolute"
/>
      */
