'use server'

import Image from "next/image";
import { getRides } from "../../../../script";
import  th  from '../../../../public/Thrill.jpg'
import ItemCard from "@/components/ItemCard";

interface Rides{
  id:string;
  name:string;
  price:number;
  age:number;
}
type ride=Object[];

const Rides_info =  () => {
  return(
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 ">
        {getRides().then((rides)=>(
          rides.map((ride)=>(
            <div key={ride.id}>
              {/* <Image 
                className='z-10 '
                alt="bgimage"
                src={th}
                width={25}
                height={10}

              /> */}
              <ItemCard 
                rideName={ride.name}
                price={ride.price}
                age={ride.age}
                id={ride.id}
              />
            </div>
          ))
        ))}
      </div>
    </div>
  )
}


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