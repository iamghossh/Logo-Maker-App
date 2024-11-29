import { Image, PencilRuler, Shield } from 'lucide-react'
import React, { useState } from 'react'

function SideNav({selectedIndex}) {

  const menuList=[
    {
      id:1,
      name:"Icon",
      icon:PencilRuler

    },
    {
      id:2,
      name:"Background",
      icon:Image
      
    },
    
  ]
   const [activeIndex,setActiveIndex] = useState(0);
  return (
    <div className="border shadow-sm h-screen">
        {menuList.map((menu,index)=>(
          <h2 onClick={()=>{setActiveIndex(index);selectedIndex(index)}}className={`p-2 text-lg px-7 text-gray-500 my-2 cursor-pointer flex items-center gap-2 hover:bg-primary hover:text-white
            ${activeIndex==index&&'bg-primary text-white'}
            `} 
          key={index}><menu.icon/>{menu.name}</h2>
        ))}
    </div>
  )
}

export default SideNav
