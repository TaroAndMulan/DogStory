import Link from "next/link";
import Image from "next/image";
import CLickSound from "./ClickSound"
export default function Instruction() {

  return (
    <div className="w-dvw h-dvh relative desktop bg-black mx-auto flex flex-col justify-center">
      <Image
        src={"/images/Instruction.png"}
      
        alt={`A cute animal!`}
        fill
      />

      <div className="top-[28.5%] absolute left-[35%] text-[#3b3b43] text-7xl font-normal font-['TCS_MyRiverBold']">
        วิธีเล่น
      </div>
      <div className="ctext top-[41.4%] leading-relaxed absolute text-center text-[#3b3b43] text-2xl font-normal font-['TCS_8Jolie_Thin']">
        แตะที่ตัวหนังสือที่อยู่ในกรอบ <br></br> เพื่อเป็นการดำเนินเรื่องไปจนจบ
      </div>

      <CLickSound soundFile="/sounds/menu-button-88360.mp3">
      <Link
        href="/Bedroom_1"
        className="w-[94.1%] h-[16.8%] left-[2.9%] top-[55.7%] absolute"
      >
        <Image
          src={"/images/Button_Purple.png"}
          height={111}
          width={353}
          alt={`A cute animal!`}
          className="w-[100%] h-[100%] absolute"
        />

        <div className="ctext top-[32.4%]  text-[#f9eeee] text-2xl font-normal font-['TCS_8Jolie_Thin']">
          แตะตรงนี้
        </div>
      </Link>
      </CLickSound>
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
