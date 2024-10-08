import Link from "next/link"
import Image from 'next/image';
//import HomeGif from '/public/images/Home.gif'
export default function Home() {

  return (
    <Link href="/Instruction">
        <div  className="w-[393px] h-dvh relative  bg-white mx-auto ">


      <Image
        width={393} height={852}
        className="w-[393px] h-screen top-[0px] absolute"
        src="/images/Home.gif"
        alt="Gif of floating dog" 
        unoptimized
      />

      <div  className="left-[82px] top-[580px] absolute text-center text-black text-[64px] 
      font-normal font-['FC_Marshmallow']"
      >
        แตะจอเพื่อเริ่ม
      </div>
      <div className="left-[72px] top-[90px] absolute text-center text-black text-8xl font-normal font-['FC_Marshmallow']">
        (ห)มาหานะ
      </div>
      <div className="left-[97px] top-[192px] absolute text-center text-black text-xs font-normal font-['Sukhumvit-Set']">
        ความเป็นอยู่บนดาวหมา มันเป็นยังไงบ้างนะ
      </div>
    </div>
    </Link>

  );
}
