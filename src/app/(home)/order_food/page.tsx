
import React from 'react'
import { getDishes } from '../../../../script';
import ItemCard from '@/components/ItemCard';

interface dishes{
  id:number;
  dish:string;
  price:number;
}
type dish=Object[];

const order_food = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 ">
        {getDishes().then((dishes)=>(
          dishes.map((dish)=>(
            <div key={dish.id}>
              {/* <Image 
                className='z-10 '
                alt="bgimage"
                src={th}
                width={25}
                height={10}

              /> */}
              <ItemCard 
                dish={dish.dish}
                price={dish.price}
                // age={ride.age}
                id={dish.id}
              />
            </div>
          ))
        ))}
      </div>
    </div>
  )
}

export default order_food