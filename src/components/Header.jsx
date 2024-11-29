import React from 'react'
import { Button } from './button'
import { Download, DownloadIcon } from 'lucide-react'

function Header({DownloadIcon}) {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center '>
      <img src='/logo.svg'></img>
      <Button className='flex gap-2 items-center' onClick={()=>DownloadIcon(Date.now())}><Download/>Download</Button>
    </div>
  )
}

export default Header
