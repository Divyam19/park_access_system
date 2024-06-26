import { PrismaClient } from '@prisma/client';
import { db } from '@/lib/db';
import { json } from 'stream/consumers';



export async function POST (req: Request) {
  const body = await req.json();
    const { name, size } = body;
    console.log(body)
    try {
      const newCustomer = await db.parkOrders.create({
        data: {
          "name":name,
          "size":size,
        },
      });
      return new Response(JSON.stringify({message:"successfull"}),{status : 201})
      // res.status(201).json({ message: 'Customer added successfully' });
    } catch (error) {
      return new Response(JSON.stringify({message:"unsuccessfull"}),{status : 500})
    }
}
// import type { NextApiRequest, NextApiResponse } from 'next';

// type ResponseData = {
//   message: string;
// };

// export function GET() {
//  return new  Response (JSON.stringify({ message: 'Hello from Next.js!' }));
// }

// export async function GET() {
//   return new Response("Hello",{status : 200})
// }