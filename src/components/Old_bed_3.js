import Image from "next/image";
import Link from "next/link";

import Old_bed_pic from "/public/images/Old_bed_room.png";
import Choices_Background from "/public/images/Old_bed_3_choices.png";

export default function Old_bed_3() {
  return (
    <div className="w-[393px] h-[852px] relative bg-white mx-auto">
      <Image
        width={1097}
        height={933}
        className="  absolute"
        src={Old_bed_pic}
        alt="background"
      />
      <div className="left-[154px] top-[186px] absolute text-center text-black text-[40px] font-normal font-['FC_Marshmallow']">
        สิ่งนั้นคือ​...
      </div>
      <div className="w-[211px] h-[73px] left-[97px] top-[260px] absolute">
        <Image
          width={211}
          height={73}
          className="  absolute"
          src={Choices_Background}
          alt="choice_1"
        />
        <div className="left-[49px] top-[7px] absolute text-center text-[#2e2e2e] text-[40px] font-normal font-['FC_Marshmallow']">
          ของเล่นหมา
        </div>
      </div>
      <div className="w-[215px] h-[65px] left-[93px] top-[353px] absolute">
      <Image
          width={211}
          height={73}
          className="  absolute"
          src={Choices_Background}
          alt="choice_2"
        />
        <div className="left-[44px] top-[6px] absolute text-center text-[#2e2e2e] text-[40px] font-normal font-['FC_Marshmallow']">
          ตุ๊กตาเน่าหมา
        </div>
      </div>
      <div className="w-[218px] h-[70px] left-[93px] top-[444px] absolute">
      <Image
          width={211}
          height={73}
          className="  absolute"
          src={Choices_Background}
          alt="choice_3"
        />
        <div className="left-[60px] top-[7px] absolute text-center text-[#2e2e2e] text-[40px] font-normal font-['FC_Marshmallow']">
          ผ้าเน่าหมา
        </div>
      </div>
      <div className="w-[215px] h-[74px] left-[93px] top-[533px] absolute">
      <Image
          width={211}
          height={73}
          className="  absolute"
          src={Choices_Background}
          alt="choice_4"
        />
        <div className="left-[45px] top-[10px] absolute text-center text-[#2e2e2e] text-[40px] font-normal font-['FC_Marshmallow']">
          ปลอกคอหมา
        </div>
      </div>
    </div>
  );
}
