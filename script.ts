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

export async function addRider(name:string,size:number,ride:string){
  try{
    const addRider=await prisma.rideOrders.create({
      data:{
        name,
        size,
        ride,
      },
    });
    console.log(`Rider added successfully with id ${addRider.id}`)
  }
  catch(error){
    console.error(`Error Adding rider:${error}`);
  }
}

export async function addParkCustomer(name:string,size:number){
  console.log('function called')
  try{
    const newCustomer=await prisma.parkOrders.create({
      data:{
        "name":name,
        "size":size,
      }
    })
  }
  catch(error){
    console.error(`Error adding the Park Cu   stomer:${error}`);
  }
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