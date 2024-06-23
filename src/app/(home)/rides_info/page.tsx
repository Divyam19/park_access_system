'use server'

import { getRides } from "../../../../script";


interface Rides{
  id:string;
  name:string;
  price:number;
  age:number;
}
type ride=Object[];

const Rides_info =  () => {
  return(
    <div>
      {getRides().then((rides)=>(
        rides.map((ride)=>(
          <div key={ride.id}>
            {ride.id}
            
            {ride.name}
<br/>
            {ride.price}
            <br/>
          </div>
        ))
      ))}
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