'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Park_tickets = () => {
  const [guests, setGuests] = useState(0)
  const [name, setName] = useState('') // add a state for the name input
  const [number, setNumber] = useState(0) // add a state for the number input
  const [payment, setPayment] = useState("") // add a state for the payment status

  const handleSubmit = (event :any) => {
    event.preventDefault() // prevent the default form submission behavior
    const numberOfGuests = number // convert the input value to an integer
    setGuests(numberOfGuests) // update the guests state
  }

  return (
    <div className='flex flex-row justify-center items-center pt-14'>
      <div className='bg-slate-500 rounded-md w-1/4 min-h-3/4'>
        <form onSubmit={handleSubmit} className='flex flex-col p-6 justify-center items-center gap-5'>
          <div className=''>
            <div>Enter name</div>
            <input type='string' id='name' value={name} onChange={(event) => setName(event.target.value)} />
          </div>
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

export default Park_tickets