import Link from "next/link"
import Image from 'next/image';
import { useRef } from "react";
import { useEffect } from "react";
import ReactAudioPlayer from 'react-audio-player';

//import HomeGif from '/public/images/Home.gif'
export default function Home2() {
  const audioRef = useRef(null);

  useEffect(() => {
    console.log("wtf")
    // Reset the audio when component mounts (including after back button navigation)
    if (audioRef.current) {
      audioRef.current.audioEl.current.load();
      console.log("wt2")

    }
  }, []);

  // Function to play the audio
  const handleDivClick = () => {
      audioRef.current.audioEl.current.play();
  };
 

  return (

    <div>
       <Link onClick={handleDivClick} href="/Instruction">
       <ReactAudioPlayer
        src="/sounds/menu-button-88360.mp3"
        ref={audioRef}
      />

<div className="w-dvw h-dvh relative max-w-screen-sm bg-black mx-auto flex flex-col justify-center">

  
  <Image
  src={'/images/updateHome.gif'}
  height={852}
  width={393}
  alt={`A cute animal!`}
  className="w-[104.8%] h-[129.3%] top-[-14.6%] absolute"

/>


  <div className="ctext top-[88.9%] text-[#3b3b43] text-4xl font-normal font-['TCS_MyRiver']">แตะจอเพื่อเริ่ม</div>
  <div className="ctext top-[5%] absolute text-center text-[#3b3b43] text-8xl font-normal font-['TCS_MyRiverBold']">ดาวหมา</div>
  <div className="ctext top-[18.7%] text-[#3b3b43] text-base font-normal font-['TCS_8Jolie_Thin']">ที่ดาวหมาจะเป็นยังไงบ้างนะ</div>
</div>
    </Link>

    </div>
    
  );
}

//  <img className="w-[104.8%] h-[129.3%] top-[-14.6%] absolute" src="/images/updateHome.gif" />
