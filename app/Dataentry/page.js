"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dataentry } from '../components/Dataentry';
import { ToastMessage } from '../components/ToastMessage'; // Ensure correct import

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
      {isEmptyError && <ToastMessage type="warning" message="Can't send empty data" />}
      {errorMessage && <ToastMessage type="error" message={errorMessage} />}
      <Dataentry handleSubmit={handleSubmit} />
    </div>
  );
};

export default DataEntryPage;
