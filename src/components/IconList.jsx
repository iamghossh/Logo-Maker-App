import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { icons, Smile } from 'lucide-react'
import { iconList } from '@/constants/icons'

import axios from 'axios'



const IconList = ({selectedIcon}) => {


  const[openDialog,setOpenDialog]=useState(false)

  let storageValue;
  try {
    storageValue = JSON.parse(localStorage.getItem('value')) || {};
  } catch (error) {
    console.error("Error parsing localStorage value:", error);
    storageValue = {}; // Default to empty if parsing fails
  }
  const [icon,setIcon]=useState(storageValue?storageValue?.icon:'Smile');

  

  const Icon=({name,color,size,rotate})=>{
    const LucidIcon=icons[name];
    if(!LucidIcon){
      return;
    }
    return <LucidIcon color={color} size={size}
    
    
    />
  }

  
  return (
    <div>
      <label>Icon</label>
      <div onClick={()=>setOpenDialog(true)} 
        className='p-3 cursor-pointer bg-gray-200 rounded-sm my-2 w-[50px] h-[50px] flex items-center justify-center'
        //style={{ color: color, transform: `rotate(${rotate}deg)` }}
      > 
        
        <Icon name={icon} color={'#000'} size={20}/>
      
      
        
        
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pic Your Favourite Icon</DialogTitle>
            <DialogDescription>
           
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6'>
                {iconList.map((icon,index)=>(
                  <div className='border p-3 flex rounded-sm items-center justify-center cursor-pointer' 
                  onClick={()=>{selectedIcon(icon);setOpenDialog(false); setIcon(icon)}}>
                      <Icon name={icon} color={'#000'} size={20}/>
                  </div>
                ))}
              </div>
                

              
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default IconList
