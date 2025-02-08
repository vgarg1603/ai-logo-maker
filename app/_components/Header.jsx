import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

const Header = () => {

  const {user} = useUser()



  return (
    <header className="px-6 md:px-16 lg:px-32 xl:px-48 2xl:px-56 py-4 bg-white shadow-lg sticky top-0 z-50 flex justify-between items-center">
      {/* Logo Section */}
        <Link href={'/'}><h1 className='hover:scale-110 transition-all hover:cursor-pointer text-lg md:text-xl font-bold text-primary'>LogoAI</h1></Link>

      {/* Navigation and Button Section */}
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
          <Link href="#features" className="hover:text-gray-900 transition">Features</Link>
          <Link href="#pricing" className="hover:text-gray-900 transition">Pricing</Link>
          <Link href="#about" className="hover:text-gray-900 transition">About</Link>
        </nav>

        {user && <Button variant="outline">Dashboard</Button>}

        <Link href={'/create'}><button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:from-pink-500 hover:to-purple-500 transition">
          Get Started
        </button></Link>

        {!user && <SignInButton><Button variant="outline">Log In</Button></SignInButton>}

        <UserButton/>
      </div>
    </header>
  );
};

export default Header;

