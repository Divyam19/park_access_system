import Image from 'next/image';
import React from 'react'

interface Props{
    id:string|number;
    age?:number;
    price:number;
    rideName?:string;
    dish?:string;

}

const ItemCard:React.FC<Props> = (props:Props) => {
  return (
    <div >
        <div className='w-[325px] h-[380px] rounded-xl flex gap-3 ml-9 mr-9 flex-col p-3  bg-gradient-to-r from-red-500 to-yellow-500 ...'>
            <div className='flex justify-center '>
                <Image
                    src={'/public/'+props.id+'.jpg'}
                    alt=""
                    width={300}
                    height={200}
                />
            </div>
            <div className='font-semibold  flex flex-col justify-center items-center gap-4 text-2xl '>
                <div>{props.rideName}</div>
                <div>{props.id}</div>
                <div>{props.dish}</div>
                <div>{props.price}</div>
                <div>{props.age}+</div>
            </div>
        </div>
    </div>
  )
}

export default ItemCard