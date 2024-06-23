import React from 'react'
import img1 from '../../public/3.jpg'
import Image from 'next/image'
const Background = () => {
  return (
    <Image 
        className='-z-10 blur-[1px]'
        alt="bgimage"
        src={img1}
        placeholder='blur'
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit:'cover'
        }}

      />
  )
}

export default Background