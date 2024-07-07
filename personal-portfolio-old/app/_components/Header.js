import Link from 'next/link'
import React from 'react'
import { Switch } from "@/components/ui/switch"

function Header() {
  return (
    <div className='p-5 shadow-sm flex justify-between items-center'>
      <div className='flex gap-8'>
          <h2 className='text-xl'>{'< Praise Waweru />'}</h2>
      </div>
      
      <div className='md:flex items-center gap-8 ml-auto hidden'>
            <Link href='' className='hover:scale-105 hover:text-primary'>About Me</Link>
            <Link href='' className='hover:scale-105 hover:text-primary'>Projects</Link>
            <Link href='' className='hover:scale-105 hover:text-primary'>Contact Me</Link>
  
          <div className='flex gap-6'>
            <Switch />
          </div>
      </div>
      
    </div>

  )
}

export default Header