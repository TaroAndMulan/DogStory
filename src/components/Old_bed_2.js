import Image from 'next/image';
import Link from "next/link"
import Old_bed_pic from '/public/images/Old_bed_room.png'

export default function Old_bed_2() {


  return (

<div className="w-[393px] h-[852px] relative bg-white mx-auto">  
  <Image
        width = {1097}
        height = {933}
        className=" top-[-2px] absolute"
        src={Old_bed_pic}
        alt="background" 
      />
  <div className="left-[103px] top-[134px] absolute text-center text-black text-[40px] font-normal font-['FC_Marshmallow']">ฉันพบบางอย่าง<br/>สิ่งที่มีค่ายิ่งกว่าสมบัติ</div>

  <Link href='/Old_bed_3' className="left-[148px] top-[724px] absolute text-center text-black text-2xl font-normal font-['FC_Marshmallow'] underline">ฉันหยิบมันขึ้นมาดู</Link>
</div>

  );
}


/*
      style={{
      transform: `scale(${viewportHeight/852.0}) `, // Scaling up based on viewport height
      top:'0',
    }}
  */
