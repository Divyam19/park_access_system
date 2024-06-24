import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getRides(){
  const rides=await prisma.ride.findMany();
  return rides;
}

export async function getDishes(){
  const dishes=await prisma.food.findMany();
  return dishes;
}

// getRides().then(console.log)

async function main() {
  try {
    const dish=await prisma.food.create({
      data:{
        "id":1,
        "dish": "dosa",
        "price": 500,
      },
    })
    console.log(dish)
  } catch (e) {
    console.error(e)
  } finally {
    await prisma.$disconnect()
  }
}

// main()
//   .then(() => {
//     process.exit(0)
//   })
//   .catch((e) => {
//     console.error(e)
//     process.exit(1)
//   })