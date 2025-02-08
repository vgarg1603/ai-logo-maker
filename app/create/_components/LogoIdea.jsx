import React, { useEffect, useState } from 'react';
import HeadingDescription from './HeadingDescription';
import axios from 'axios';
import Prompt from '@/app/_data/Prompt';
import { Loader2Icon } from 'lucide-react';

const LogoIdea = ({ formData, onHandleInputChange }) => {
  const [ideas, setIdeas] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState(formData?.idea?.idea || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const aiSelectionIdea = { idea: 'Let Ai select best idea' };

  useEffect(() => {
    generateLogoDesignIdea();
  }, []);

  const generateLogoDesignIdea = async () => {
    setLoading(true);
    setError(null);

    const PROMPT = Prompt.DESIGN_IDEA_PROMPT
      .replace('{logoType}', formData.design?.title)
      .replace('{logoTitle}', formData.title)
      .replace('{logoDesc}', formData.description)
      .replace('{logoPrompt}', formData.design?.prompt);

    try {
      const result = await axios.post('/api/ai-design-ideas', { prompt: PROMPT });
      setIdeas(result.data.logoSuggestions);
    } catch (err) {
      console.error('Error fetching logo ideas:', err);
      setError('Failed to fetch design ideas. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='my-10'>
      <HeadingDescription title="Select Your Design Idea" description="Choose a design style that aligns with your vision, or skip to receive a random suggestion." />

      {loading && <div className='flex justify-center items-center animate-spin my-10'><Loader2Icon  /></div>}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {!loading && (
        <div className='flex flex-wrap gap-3 mt-5'>
          {ideas.map((item, index) => (
            <h2
              key={index}
              className={`p-2 rounded-full border-2 px-3 cursor-pointer hover:scale-105 transition hover:border-primary ${selectedIdea === item ? 'border border-primary' : ''
                }`}
              onClick={() => {
                setSelectedIdea(item);
                onHandleInputChange(item);
              }}
            >
              {item.idea}
            </h2>
          ))}

          <h2
            onClick={() => {
              setSelectedIdea(aiSelectionIdea);
              onHandleInputChange(aiSelectionIdea);
            }}
            className={`p-2 rounded-full border-2 px-3 cursor-pointer hover:scale-105 transition hover:border-primary ${selectedIdea?.idea === 'Let Ai select best idea' ? 'border border-primary' : ''
              }`}
          >
            Let Ai select best idea
          </h2>
        </div>
      )}
    </div>
  );
};

export default LogoIdea;
