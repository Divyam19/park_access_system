import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import img1 from '../../../../public/1.jpg'
import Background from '@/components/Background'
const dashboard = () => {
  return (
    <div className=''>
      
      <div className=''>
        <div className='flex flex-col gap-6 text-center'>
          {/* <h1 className='text-3xl'>Welcome to</h1> */}
          <h1 className='text-9xl my-12 font-extrabold  '>YOLO</h1>
          <h1 className='text-4xl -mt-3 font-mono font-bold'>Amusement park</h1>
        </div>
        <div className=''>

          {/* <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image 
                src={img1}
                alt='img 1'
                width='1.2rem'
                
                />
                </CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}

        </div>
      </div>
  
    </div>
  )
}

export default dashboard