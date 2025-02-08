'use client'
import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';
import Design from '@/app/_data/Design';
import Image from 'next/image';

const LogoDesigns = ({onHandleInputChange, formData}) => {
    const [selectedDesign, setselectedDesign] = useState(formData.design)
  return (
    <div>
      <HeadingDescription title="Choose Your Logo Style" description="Select the type of logo design that best represents your brands unique identity"/>

      <div className='mt-5 grid grid-cols-2 md:grid-cols-3 gap-2 px-3'>
        {Design.map((design, index) => {
            return <div onClick={() => {
                setselectedDesign(design.title)
                onHandleInputChange(design)
            }} key={index} className={`p-3 flex flex-col items-center justify-center gap-3 hover:scale-110 transition hover:cursor-pointer ${selectedDesign == design.title? 'border-2 rounded-xl border-primary': ''}`}>
                <Image className='rounded-xl object-cover' src={design.image} alt={design.title} width={200} height={200}/>
                <h2 className='text-center font-bold '>{design.title}</h2>
            </div>
        })}
      </div>
    </div>
  );
}

export default LogoDesigns;
