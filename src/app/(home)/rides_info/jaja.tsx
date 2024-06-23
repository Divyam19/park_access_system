'use server'
import { useEffect, useState } from 'react'
import { getRides } from '../../../../script';

import { BellRing, Check } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import img2 from '../../../../public/2.jpg'

interface Rides{
  id:string;
  name:string;
  price:number;
  age:number;
}
type ride=Object[];

const Rides_info =  () => {
  return getRides().then((rides)=>{
   let rideHTML=''
   for(let i=0;i<rides.length;i++){
    rideHTML+=`
      <div key=${rides[i].id}>
        <Image
          src=${img2}
          alt='ride image
          width={250}
          height={125}
        />
        <div>
            ${rides[i].name}
          </div>
          <div>
            ${rides[i].price}  
          </div>
          <div>
            ${rides[i].age}
          </div>  
      </div>
    `;
   } 
   return <div>{rideHTML}</div>
  })} 


export default Rides_info




// return (
//   <div className=''>
//     {rides.map((ride) => (
//       <div key={index} className=''>
//         <Skeleton className='h-[125px] w-[250px]  rounded-xl'/>
//         <div className='flex flex-col gap-3 mt-3'>
//           <Skeleton className='h-4 w-[250px]'/>
//           <Skeleton className='h-4 w-[200px]'/>
//         </div>
//       </div>
//     ))}
//   </div>
// )