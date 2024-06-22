import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='  item-center justify-center flex flex-row'>

            <div className='flex flex-row gap-8 mt-6 mb-6 ml-auto mr-auto'>
                <div>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                </div>
                <div>
                    <Link href="/buy_tickets">
                        Buy Tickets
                    </Link>
                </div>
                <div>
                    <Link href="/rides_info">
                        Rides Info
                    </Link>
                </div>
                <div>
                    <Link href="/order_food">
                        Order Food
                    </Link>
                </div>
            </div>
            <div className='justify-end mr-5 mt-6 mb-6 '>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    </div>
  )
}

export default Navbar