"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dataentry } from '../components/Dataentry';

const DataEntryPage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmptyError, setIsEmptyError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const largeInput = document.getElementById('large-input').value;
    const baseInput = document.getElementById('base-input').value;
    const smallInput = document.getElementById('small-input').value;

    const letterRegex = /^[a-zA-Z]*$/;

    if (!largeInput || !baseInput || !smallInput) {
      setIsEmptyError(true);
      setErrorMessage('');
      return;
    }

    if (!letterRegex.test(largeInput) || !letterRegex.test(baseInput) || !letterRegex.test(smallInput)) {
      setErrorMessage('Please enter only letters.');
      setIsEmptyError(false);
      return;
    }

    setErrorMessage('');
    setIsEmptyError(false);

    const params = new URLSearchParams({
      large: largeInput,
      base: baseInput,
      small: smallInput,
    });

    router.push(`/Messagepage?${params.toString()}`);
  };

  return (
    <div>
      <Dataentry handleSubmit={handleSubmit} errorMessage={errorMessage} isEmptyError={isEmptyError} />
    </div>
  );
};

export default DataEntryPage;
