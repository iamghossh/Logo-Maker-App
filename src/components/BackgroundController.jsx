

import React, { useContext, useEffect, useState } from 'react'
import { Slider } from './slider'
import ColorPickerController from './ColorPickerController'
import { UpdateStorageContext } from '@/context/UpdatestorageContext'

function BackgroundController() {

  let storageValue;
  try {
    storageValue = JSON.parse(localStorage.getItem('value')) || {};
  } catch (error) {
    console.error("Error parsing localStorage value:", error);
    storageValue = {}; // Default to an empty object if parsing fails
  }
  const[rounded,setRounded]=useState(storageValue?storageValue?.bground:0)
  const[padding,setPadding]=useState(storageValue?storageValue?.bgPadding:0) 
  const[color,setColor]=useState(storageValue?storageValue?.bgColor:'#000')
  // let storageValue;
  // try {
  //   storageValue = JSON.parse(localStorage.getItem('value')) || {};
  // } catch (error) {
  //   console.error("Error parsing localStorage value:", error);
  //   storageValue = {}; // Default to an empty object if parsing fails
  // }
  const {updateStorage,setUpdateStorage}=useContext(UpdateStorageContext)

  useEffect(()=>{
    const updatedValue = {
       ...storageValue,
       bground:rounded,
       bgPadding:padding,
       bgcolor:color,
          

    }
    setUpdateStorage(updatedValue);
    console.log("Updated value to store:", updatedValue); // Debugging
    localStorage.setItem('value', JSON.stringify(updatedValue))

 },[rounded,padding,color]);
  return (
    <div>
      <div className='py-2'>
            <label className='p-2 flex justify-between items-center'>
              
              Rounded <span>{rounded} px </span>
            </label>
            <Slider defaultValue={[0]} max={180} step={1}
             onValueChange={(e)=>setRounded(e[0])}
            
            />

      </div>
      <div className='py-2'>
            <label className='p-2 flex justify-between items-center'>
              
              Padding <span>{padding} px </span> 
            </label>
            <Slider defaultValue={[0]} max={110} step={1}
             onValueChange={(e)=>setPadding(e[0])}
            
            />

      </div> 
      <div className='py-2'>
            <label className='p-2 flex justify-between items-center'>
              
              Icon Color
            </label>
            <ColorPickerController
              hideController={true} 
              selectedColor={(color) => setColor(color)} 
            />


          </div>

    </div>
  )
}

export default BackgroundController
