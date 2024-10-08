'use client'
import dynamic from 'next/dynamic';

import Instruction from '@/components/Instruction'
import Home2 from '@/components/Home2'
import Bedroom_1 from '@/components/Bedroom_1'
import Bedroom_2 from '@/components/Bedroom_2'
import Old_bed_3 from '@/components/Old_bed_3'

export default function Page({ params }: { params: { slug: string } }) {


    const renderContent = () => {
        switch (params.slug) {
          case "home":
            return <Home2/>
          case "Instruction":
            return <Instruction/>;
          case "Bedroom_1":
            return <Bedroom_1/>;
          case "Bedroom_2":
            return <Bedroom_2/>;
            case "Old_bed_3":
                return <Old_bed_3/>;
          default:
            return <h1>404 - Page Not Found</h1>;
        }
      };


    return (<div className="h-dvh relative  overflow-hidden">
        {renderContent()}      
    </div>)
  }