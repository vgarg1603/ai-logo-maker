'use client'
import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';
import Lookup from '@/app/_data/Lookup';
import Colors from '@/app/_data/Colors';
import { Key } from 'lucide-react';

const LogoColorPallete = ({onHandleInputChange, formData}) => {

    const [colorPalette, setColorPalette] = useState(formData.colorPallete)

  return (
    <div className='bg-[#F9F9F9]'>
      <HeadingDescription title={Lookup.ColorPalleteHeading} description={Lookup.ColorPaletteDesc}/>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 text-center'>
        {Colors.map((palette, index) => {
            return <div key={index} className={`p-1 flex hover:scale-105 transition cursor-pointer ${colorPalette==palette.name ? 'border-2 rounded-lg border-primary' : ''}`}>
                {palette.colors.map((color, index) => {
                   return <div onClick={() => {
                    setColorPalette(palette.name)
                    onHandleInputChange(palette.name)
                    }} key={index} className='h-24 w-full' style={{backgroundColor: color}}>
                    </div>
                })}
            </div>
        })}
      </div>
    </div>
  );
}

export default LogoColorPallete;
