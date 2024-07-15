"use client";
import React, { useEffect, useState } from 'react';
import { Backbutton } from '../components/Backbutton';

const Messagepage = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const large = params.get('large');
    const base = params.get('base');
    const small = params.get('small');

    setFormData({ large, base, small });
  }, []);

  return (
    <div className="container mx-auto py-7 md:py-10 lg:py-24 flex justify-center">
      <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-blue-500 italic">Your data has been received, thanks for submitting these data:</h1>
        <p className="mb-2 font-bold"><strong>Your Message:</strong> {formData.large}</p>
        <p className="mb-2 font-bold"><strong>Your Name:</strong> {formData.base}</p>
        <p className="mb-2 font-bold"><strong>Your Job:</strong> {formData.small}</p>
        <br/>
        <Backbutton />
      </div>
    </div>
  );
};

export default Messagepage;
