import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  

const Navbar = () => {
  return (
    <div className=''>
        <div className='  item-center justify-center flex flex-row '>

            <div className='flex flex-row gap-8 mt-5 mb-5 ml-auto mr-auto'>
                <div className='bg-slate-500 text-white p-2 rounded-xl hover:bg-black hover:shadow-md'>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                </div>
                <div className='bg-slate-500 text-white p-2 rounded-xl hover:bg-black hover:shadow-md'>
                    <Link href="/rides_info">
                        Rides Info
                    </Link>
                </div>
                <div className='bg-slate-500 text-white p-2 rounded-xl hover:bg-black hover:shadow-md'>
                    <Link href="/order_food">
                        Order Food
                    </Link>
                </div>
                <div className='bg-slate-500 text-white p-2 rounded-xl hover:bg-black hover:shadow-md z-10'>
                <DropdownMenu>
                    <DropdownMenuTrigger>Buy Tickets</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Ticket Types </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <a href='/buy_tickets/park_tickets'>
                            <DropdownMenuItem >Park Ticket</DropdownMenuItem>
                        </a>
                        <a href='/buy_tickets/ride_tickets'>
                            <DropdownMenuItem >Ride Ticket</DropdownMenuItem>
                        </a>
                    </DropdownMenuContent>
                </DropdownMenu>

                </div>
            </div>
            <div className='justify-end mr-5 flex   gap-5 mt-4 mb-4 '>
                <ModeToggle  />
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