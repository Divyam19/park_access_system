import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getRides(){
  const rides=await prisma.ride.findMany();
  return rides;
}

// getRides().then(console.log)










// async function main() {
//   const ride=await prisma.ride.create({
//     data:{
//         "name": "Splash Zone",
//         "price": 500,
//         "age": 12
//     },
//   })
//   console.log(ride)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })