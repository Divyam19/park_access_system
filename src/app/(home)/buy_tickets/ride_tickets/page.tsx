'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { getRides } from '../../../../../script'

const Ride_tickets = () => {
  const [guests, setGuests] = useState(0)
  const [name, setName] = useState('')
  const [number, setNumber] = useState(0)
  const [payment, setPayment] = useState("")
  const [ridePrice,setRidePrice]=useState()

  const rp=0

  const handleSubmit:any = (event:any) => {
    event.preventDefault() 
    const numberOfGuests = parseInt(number)
    setGuests(numberOfGuests) 
  }

  return (
    <div className='flex flex-row justify-center items-center pt-14'>
      <div className='bg-slate-500 rounded-md w-1/4 min-h-3/4'>
        <form onSubmit={handleSubmit} className='flex flex-col p-6 justify-center items-center gap-5'>
          <div className=''>
            <div>Enter name</div>
            <input type='string' id='name' value={name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div>choose ride type</div>
          <select>
          <option value="500">Splash Zone</option>
          <option value="900">Crash Zone</option>
          <option value="250">Tea Party</option>
          <option value="500">Free Fall</option>
          <option value="150">Music Ride</option>
          <option value="350">Twish And Shout</option>
          <option value="450">Scramble Ride</option>
          <option value="300">Octo Ride</option>
          <option value="400">Alien Ride</option>
          <option value="500">Bungee Blast</option>
          <option value="200">Bouncy Fun</option>
          <option value="200">Par 3</option>
          <option value="100">Game Zone</option>
          <option value="200">Art Studio</option>
          <option value="800">UP, Up and away</option>
          <option value="1000">VR Adventure</option>
          <option value="800">Thrill Seeker</option>
          <option value="600">Sky Rider</option>
          <option value="1900">Fly High</option>
          <option value="500">Horse Ride</option>
          </select>
          <div>
            <div>Enter number of guests</div>
            <input type='number' id='number' value={number} onChange={(event) => setNumber(parseInt(event.target.value))} />
          </div>
          <Button type='submit' variant={'outline'}>
            Submit
          </Button>
          {guests > 0 && (
            <Button type='button' variant={'outline'} onClick={() => {
              setPayment("Redirecting to payment page")
              // Add your payment logic here
            }}>
              Pay
            </Button>
          )}
          <p>
            200*{guests}={guests * 200}
          </p>
          <p>
            {payment}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Ride_tickets