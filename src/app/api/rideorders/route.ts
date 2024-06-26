import { PrismaClient } from '@prisma/client';
import { db } from '@/lib/db';
import { json } from 'stream/consumers';


export async function POST (req: Request) {
    const body = await req.json();
      const { name, size,sect } = body;
      console.log(body)
      try {
        console.log('hello');
        const newrideOrder = await db.rideOrders.create({
          data: {
            "name":name,
            "size":size,
            "ride":sect,
          },
        });
        return new Response(JSON.stringify({message:"successfull"}),{status : 201})
        // res.status(201).json({ message: 'Customer added successfully' });
      } catch (error) {
        return new Response(JSON.stringify({message:"unsuccessfull"}),{status : 500})
      }
  }
// type ResponseData = {
//   message: string;
// };

// export function GET() {
//  return new  Response (JSON.stringify({ message: 'Hello from Next.js!' }));
// }

// export async function GET() {
//   return new Response("Hello",{status : 200})
// }