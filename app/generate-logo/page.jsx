'use client';
import React, { useContext, useEffect, useState } from 'react';
import { UserDetailsContext } from '../_context/UserDetailsContext';
import Prompt from '../_data/Prompt';
import axios from 'axios';
import Image from 'next/image';

const GenerateLogoPage = () => {
  const { userDetail } = useContext(UserDetailsContext);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [logoImage, setLogoImage] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && userDetail?.email) {
      const storage = localStorage.getItem('formData');

      if (storage) {
        setFormData(JSON.parse(storage));
        console.log('Loaded formData:', JSON.parse(storage));
      }
    }
  }, [userDetail]);

  useEffect(() => {
    if (formData?.title) {
      generateAiLogo();
    }
  }, [formData]);

  const generateAiLogo = async () => {
    try {
      setLoading(true);
      const PROMPT = Prompt.LOGO_PROMPT
        .replace('{logoTitle}', formData?.title)
        .replace('{logoDesc}', formData?.description)
        .replace('{logoColor}', formData?.colorPallete)
        .replace('{logoDesign}', formData?.design?.title)
        .replace('{logoPrompt}', formData?.design?.prompt);

      console.log('Generated Prompt:', PROMPT);

      // Generate logo from AI
      const result = await axios.post('/api/ai-logo-model', {
        prompt: PROMPT,
        email: userDetail?.email,
        title: formData?.title,
        desc: formData?.description,
      });

      console.log('API Response:', result.data);
      setLogoImage(result.data.image);
    } catch (error) {
      console.error('Error generating logo:', error);
      alert('An error occurred while generating the logo. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {loading && <h2 className="text-lg font-bold">Generating your logo...</h2>}

      {!loading && logoImage && (
        <Image
          src={logoImage}
          alt={`${formData?.title} logo`}
          width={200}
          height={200}
          className="rounded-md shadow-lg"
        />
      )}

      {!loading && !logoImage && (
        <h2 className="text-gray-500 mt-5">
          Your logo will appear here once generated.
        </h2>
      )}
    </div>
  );
};

export default GenerateLogoPage;
