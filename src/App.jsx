
import { useState } from 'react'
import './App.css'
import BackgroundController from './components/BackgroundController'
import { Button } from './components/button'
import Header from './components/Header'
import IconController from './components/IconController'
import SideNav from './components/SideNav'
import LogoPreview from './components/LogoPreview'
import { UpdateStorageContext } from './context/UpdatestorageContext'

function App() {
  const [selectedIndex,setSelectedIndex] = useState();
  const [updateStorage,setUpdateStorage]=useState({});
  const[downloadIcon,setDownloadIcon]=useState()

  return (

    <UpdateStorageContext.Provider value={{updateStorage,setUpdateStorage}}>
      <>
        
      <Header DownloadIcon={setDownloadIcon}/>
      <div className='w-64 fixed '>
          <SideNav selectedIndex={(value)=>setSelectedIndex(value)}/>
        </div>  
        <div className='ml-64 grid grid-cols-1 md:grid-cols-6 '>
          <div className='md:col-span-2 border h-screen shadow-sm p-5 overflow-auto '>
            {selectedIndex==0?
              <IconController/>:
              <BackgroundController/>
            }
            
            
          </div>
          <div className='md:col-span-3 '>
            <LogoPreview downloadIcon={downloadIcon}/>  
          </div>
          <div className='bg-blue-100 md:col-span-1 font-bold flex justify-center items-center'>
            Ads Banner

          </div>
          
        </div>
      

        
      </>
    </UpdateStorageContext.Provider> 
  )
}

export default App
