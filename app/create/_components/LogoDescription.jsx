import React from 'react';
import HeadingDescription from './HeadingDescription';
import Lookup from '@/app/_data/Lookup';

const LogoDescription = ({onHandleInputChange, formData}) => {
  return (
    <div className='my-10'>
      <HeadingDescription title={Lookup.LogoDescriptionPageTitle} description={Lookup.LogoDescription}/>

      <input defaultValue={formData.description} placeholder='Enter your logo description' onChange={(e) => onHandleInputChange(e.target.value)} type="text"  className="mt-8 px-8 py-3 text-purple-600 font-semibold rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition w-full" />
    </div>
  );
}

export default LogoDescription;
