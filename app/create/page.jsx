'use client'
import React, { useState } from 'react';
import LogoTitle from './_components/LogoTitle';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import LogoDescription from './_components/LogoDescription';
import LogoColorPallete from './_components/LogoColorPallete';
import LogoDesigns from './_components/LogoDesigns';
import LogoIdea from './_components/LogoIdea';
import PricingModel from './_components/PricingModel';

const CreatePage = () => {
  const [step, setStep] = useState(1)
  const [formData, setformData] = useState()

  const onHandleInputChange = (field, value) => {
    setformData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  console.log(formData)

  


  return (
    <div className='mt-20 stateborder rounded-xl 2xl:mx-72 px-6 shadow-2xl py-4 bg-[#F9F9F9]'>
      {step == 1 && <LogoTitle formData={formData} onHandleInputChange={(v) => onHandleInputChange('title', v)} />}

      {step == 2 && <LogoDescription formData={formData} onHandleInputChange={(v) => onHandleInputChange('description', v)} />}

      {step == 3 && <LogoColorPallete formData={formData} onHandleInputChange={(v) => onHandleInputChange('colorPallete', v)} />}

      {step == 4 && <LogoDesigns formData={formData} onHandleInputChange={(v) => onHandleInputChange('design', v)} />}

      {step == 5 && <LogoIdea formData={formData} onHandleInputChange={(v) => onHandleInputChange('idea', v)} />}

      {step == 6 && <PricingModel formData={formData} onHandleInputChange ={(v)=> onHandleInputChange('pricing', v)}/>}

      <div className={`flex mt-10 ${step == 1 ? 'justify-center' : 'justify-between'}`}>
        {step != 1 && <Button onClick={() => setStep(step - 1)} > <ArrowLeft /> Previous</Button>}
        {step != 6 && <Button onClick={() => {
          if (formData) {
            setStep(step + 1)
          } 
          else{
            console.log("Invalid")
          }
        }} variant="secondary"> <ArrowRight /> Continue</Button>}
      </div>
    </div>
  );
}

export default CreatePage;
