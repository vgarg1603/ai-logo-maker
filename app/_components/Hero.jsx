'use client'
import React, { useEffect, useState } from 'react';
import Lookup from '../_data/Lookup';
import Link from 'next/link';

const Hero = () => {
    const [isClient, setIsClient] = useState(false)

    const [logoName, setLogoName] = useState('')

    useEffect(() => {
        setIsClient(true)


    }, [])

    if (!isClient) { return null; }




    return (
        <div className='mt-30 w-full'>
            <section className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 text-white py-20 mt-30">
                <div className="container mx-auto px-6 text-center">

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                        Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">Dream Logo </span>
                        in Seconds
                    </h1>

                    <p className="text-lg md:text-xl font-light text-gray-100 mb-8">
                        {Lookup.HeroSubheading}
                    </p>

                    <div className="flex justify-center gap-4">
                        <input onChange={(e) => setLogoName(e.target.value)}
                            required
                            type="text"
                            placeholder={Lookup.InputTitlePlaceholder}
                            className=" px-8 py-3 text-purple-600 font-semibold rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                        />
                        <Link
                            href={'/create?title=' + logoName}
                            className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
                        >
                            Get Started
                        </Link>
                    </div>


                    <div className="absolute top-10 left-0 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-600 opacity-50 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-0 w-40 h-40 bg-gradient-to-r from-pink-400 to-purple-600 opacity-50 rounded-full blur-xl"></div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
