"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  ConnectWallet,
  useAddress,
  useAuth,
} from "@thirdweb-dev/react";


const Navbar = () => {



  return (
    <div>
<div className="navbar bg-gray-100 text-black border-b border-gray-500 fixed z-10 backdrop-filter backdrop-blur-lg bg-opacity-70">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black font-light rounded-sm after:w-52 ">
        <li><a href='/About'>About us</a></li>
        <li><a href ='/Invest'>Investors</a></li>
        <li><a>Our Solutions</a></li>
        <li><a>JM-Qafri Forum</a></li>
        <li><a href='/FAQ'>F.A.Q</a></li>
        <li className='md:hidden'><a href="/Contact">Contact</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a href="/">
    <Image src="/jmlogoblack.svg" alt='img' width="84" height="54" />
    </a>
  </div>
  <div className="navbar-end">
    <Link href="/" className=' hidden md:block mx-3 text-sm hover:underline font-normal'>Careers</Link>
    <Link href="/Contact" className=' hidden md:block text-sm hover:underline mx-3 font-normal'>Contact</Link>

    <div>
sign in/up
    </div>
    <Link  href='/user'>
        <Avatar className='mx-3 hidden'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>     
    </Link>
</div>
</div>
    </div>
  )
}

export default Navbar