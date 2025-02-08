'use client'
import React, { useState, useEffect} from 'react';
import HeadingDescription from './HeadingDescription';
import Lookup from '@/app/_data/Lookup';
import { useSearchParams } from 'next/navigation';

const LogoTitle = ({onHandleInputChange}) => {
    const searchParam = useSearchParams()
    const [title, setTitle] = useState(searchParam.get('title') ?? '')
    const [isClient, setIsClient] = useState(false)

    


    useEffect(() => {
        setIsClient(true)
        onHandleInputChange(title)

    }, [])

    if (!isClient) { return null; }



    return (
        <div className='my-10 '>
            <HeadingDescription title="Logo Title" description="Add your business App, or Website Name for a Custom Logo" />

            <input onChange={(e) => onHandleInputChange(e.target.value)} type="text" placeholder={Lookup.InputTitlePlaceholder} defaultValue={title} className="mt-8 px-8 py-3 text-purple-600 font-semibold rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition w-full" />

        </div>
    );
}

export default LogoTitle;
