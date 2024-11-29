import { UpdateStorageContext } from '@/context/UpdatestorageContext';
import React, { useContext, useEffect, useState } from 'react';
import { DownloadIcon, icons, Smile } from 'lucide-react';
import html2canvas from 'html2canvas';
// const BASE_URL ='https://logoexpress.tubeguruji.com'

function LogoPreview({downloadIcon}) {
  const [storageValue, setStorageValue] = useState({});

  const { updateStorage } = useContext(UpdateStorageContext);

  // Listen to context updates and localStorage
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('value')) || {};
    setStorageValue(storageData);
  }, [updateStorage]); // This should trigger when context is updated

  useEffect(()=>{
    if(downloadIcon){
      downloadPngLogo();
    }
  },[downloadIcon])

  // used to download the icon in png format 
  const downloadPngLogo=()=>{
    const downloadLogoDiv = document.getElementById('downloadLogoDiv')

    html2canvas(downloadLogoDiv,{
      backgroundColor:null
    }).then(canvas=>{
      const pngImage=canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href=pngImage;
      downloadLink.download='Supriyo_Ghosh_Logo_Express.png';
      downloadLink.click();

    })
  }


  const Icon=({name,color,size,rotate})=>{
    const LucidIcon=icons[name];
    if(!LucidIcon){
      return;
    }
    return <LucidIcon color={color} size={size}
    style={{
      transform:`rotate(${rotate}deg)`
    }}
    
    />
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300"
      style={{

        padding:storageValue?.bgPadding
      }}
      
      >
        <div
          id = "downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bground || 0,
            background: storageValue?.bgcolor || '#fff',
          }}
        >
          
          <Icon name=
          {storageValue?.icon} 
          color={storageValue?.iconColor} 
          size={storageValue?.iconSize} 
          rotate={storageValue?.iconRotate}/>
        
          
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
