
import Image from 'next/image';
import Old_bed_pic from '/public/images/Old_bed_room.png'
import Link from "next/link"

export default function Old_bed_1() {

  if (typeof window !== "undefined") {
    var viewportHeight = window.innerHeight;   
    console.log("yea",viewportHeight)
 }
  return (

<div className="w-[393px] h-[852px] relative bg-white mx-auto"

    >
  
  <Image
        width = {1097}
        height = {933}
        className="w-[393px]  h-[852px] absolute"
        src={Old_bed_pic}
        alt="background" 
      />

  <div className="left-[87px] top-[134px] absolute text-center text-black text-[40px] font-normal font-['FC_Marshmallow']">วันนี้เป็นวันที่ฉันมีเวลาว่าง<br/>ฉันจึงเลือกที่จะจัดห้อง</div>

  <Link href='/Old_bed_2' className="left-[161px] top-[724px] absolute text-center text-black text-2xl font-normal font-['FC_Marshmallow'] underline">ฉันค้นและจัด</Link>
</div>


  );
}


/*
      style={{
      transform: `scale(${viewportHeight/852.0}) `, // Scaling up based on viewport height
      top:'0',
    }}
  */
