'use client'
import React, { useEffect, useState } from 'react';
import HeadingDescription from './HeadingDescription';
import Pricing from '@/app/_data/Pricing';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { SignIn, SignInButton } from '@clerk/clerk-react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';


const PricingModel = ({ formData, onHandleInputChange }) => {

    const { user } = useUser()

    const [pricing, setPricing] = useState(formData.pricing)

    useEffect(() => {
        if (formData.title && typeof window !== 'undefined') {
            localStorage.setItem('formData', JSON.stringify(formData))
        }
    }, [formData])


    return (
        <div className='text-center'>
            <HeadingDescription title="Our Plans" description="Generate Unlimited Fast Logo with your fav model" />

            <div className='grid grid-cols-1 md:grid-cols-2 my-6 gap-3'>
                {Pricing.map((feature, index) => {
                    return <div onClick={() => setPricing(feature.type)} key={index} className={`p-6 text-center border-2 hover:cursor-pointer transition-all ${pricing == feature.type ? 'border-2 border-primary' : ''}`}>
                        <h1 className='mb-4'>{feature.type}</h1>

                        {user ? <Link href={'/generate-logo?type=' + feature.type} className={buttonVariants({ variant: "" })}>Click here</Link>
                            : <SignInButton mode='modal' forceRedirectUrl={'/generate-logo?type=' + feature.type}><Button >Register Now!</Button></SignInButton>}
                    </div>
                })}
            </div>
        </div>
    );
}

export default PricingModel;
