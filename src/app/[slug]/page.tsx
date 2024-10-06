'use client'
import dynamic from 'next/dynamic';

import Instruction from '@/components/Instruction'
import Old_bed_1 from '@/components/Old_bed_1'
import Old_bed_2 from '@/components/Old_bed_2'
import Old_bed_3 from '@/components/Old_bed_3'

export default function Page({ params }: { params: { slug: string } }) {


    const renderContent = () => {
        switch (params.slug) {
          case "Instruction":
            return <Instruction/>;
          case "Old_bed_1":
            return <Old_bed_1/>;
          case "Old_bed_2":
            return <Old_bed_2/>;
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