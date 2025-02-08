import React from 'react';

const HeadingDescription = ({title, description}) => {
  return (
    <div>
      <h1 className='font-bold text-3xl text-primary'>{title}</h1>
      <h2 className='text-lg text-purple-600 mt-2'>{description}</h2>
    </div>
  );
}

export default HeadingDescription;
