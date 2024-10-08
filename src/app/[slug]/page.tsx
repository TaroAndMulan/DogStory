import Instruction from '@/components/Instruction'
import Home from '@/components/Home'
import Bedroom_1 from '@/components/Bedroom_1'
import Bedroom_2 from '@/components/Bedroom_2'

export default function Page({ params }: { params: { slug: string } }) {


    const renderContent = () => {
        switch (params.slug) {
          case "home":
            return <Home/>
          case "Instruction":
            return <Instruction/>;
          case "Bedroom_1":
            return <Bedroom_1/>;
          case "Bedroom_2":
            return <Bedroom_2/>;
          default:
            return <h1>404 - Page Not Found</h1>;
        }
      };


    return (<div className="h-dvh relative  overflow-hidden">
        {renderContent()}      
    </div>)
  }