import { Smile } from 'lucide-react';
import { Slider } from "@/components/slider";
import React, { useContext, useEffect, useState } from 'react';
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdatestorageContext';
import IconList from './IconList';

function IconController() {
  
  let storageValue;
  try {
    storageValue = JSON.parse(localStorage.getItem('value')) || {};
  } catch (error) {
    console.error("Error parsing localStorage value:", error);
    storageValue = {}; // Default to empty if parsing fails
  }
  const [size, setSize] = useState(storageValue?storageValue?.iconSize:280);
  const [rotate, setRotate] = useState(storageValue?storageValue?.iconRotate:0);
  const [color, setColor] = useState('#fff');
  const { setUpdateStorage } = useContext(UpdateStorageContext);
  const [icon,setIcon]=useState(storageValue?storageValue?.icon:'Smile');

  //Fetching from localStorage
  // let storageValue;
  // try {
  //   storageValue = JSON.parse(localStorage.getItem('value')) || {};
  // } catch (error) {
  //   console.error("Error parsing localStorage value:", error);
  //   storageValue = {}; // Default to empty if parsing fails
  // }

  // Updating localStorage and context whenever values change
  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: icon
    };
    setUpdateStorage(updatedValue); // Update context
    localStorage.setItem('value', JSON.stringify(updatedValue)); // Update localStorage
  }, [size, rotate, color, setUpdateStorage,icon]);

  return (
    <div>
      <IconList selectedIcon={(icon)=>setIcon(icon)}/>
      <div className='py-1'>
        <label className='p-2 flex justify-between items-center'>
          Size <span>{size} px </span>
        </label>
        <Slider defaultValue={[280]} max={512} step={1} onValueChange={(e) => setSize(e[0])} />
      </div>

      <div className='py-3'>
        <label className='p-3 flex justify-between items-center'>
          Rotate <span>{rotate}°</span>
        </label>
        <Slider defaultValue={[0]} max={360} step={1} onValueChange={(e) => setRotate(e[0])} />
      </div>

      <div className='py-3'>
        <label className='p-3 flex justify-between items-center'>
          Icon Color
        </label>
        <ColorPickerController hideController={true} selectedColor={(color) => setColor(color)} />
      </div>
    </div>
  );
}

export default IconController;
