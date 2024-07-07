import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className='flex items-center pt-10'>
      <h1 className='text-5xl font-bold mr-4 md:text-lg'>Hi, I'm Praise</h1>
      <div className='relative w-20 h-20'>
        <Image src='/hand.png' layout='fill' objectFit='contain' />
      </div>

      <div className='ml-20'>
        <p>This is additional content that is in a flex layout with the h1.</p>
      </div>
    </div>
  );
}

export default Hero;
