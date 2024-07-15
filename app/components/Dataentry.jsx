"use client";
import React, { useState } from 'react';
import { ToastMessage } from './ToastMessage';

export const Dataentry = ({ handleSubmit }) => {
  const [largeInput, setLargeInput] = useState('');
  const [baseInput, setBaseInput] = useState('');
  const [smallInput, setSmallInput] = useState('');
  const [invalidField, setInvalidField] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmptyError, setIsEmptyError] = useState(false);

  const letterRegex = /^[a-zA-Z]*$/;

  const validateField = (value, fieldId) => {
    if (!letterRegex.test(value)) {
      setInvalidField(fieldId);
      setErrorMessage('Please enter only letters.');
      return false;
    }
    setInvalidField(null);
    setErrorMessage('');
    return true;
  };

  const handleChange = (event) => {
    const { value, id } = event.target;
    if (value === '' || letterRegex.test(value)) { // Check if the input is empty or matches the regex
      if (id === 'large-input') setLargeInput(value);
      if (id === 'base-input') setBaseInput(value);
      if (id === 'small-input') setSmallInput(value);
      setInvalidField(null);
      setErrorMessage('');
    } else {
      setInvalidField(id);
      setErrorMessage('Please enter only letters.');
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!largeInput || !baseInput || !smallInput) {
      setIsEmptyError(true);
      setErrorMessage('');
      return;
    }

    if (!validateField(largeInput, 'large-input') || !validateField(baseInput, 'base-input') || !validateField(smallInput, 'small-input')) {
      setIsEmptyError(false);
      return;
    }

    setIsEmptyError(false);
    setErrorMessage('');
    handleSubmit(event);
  };

  return (
    <div className="container mx-auto py-7 md:py-10 lg:py-24 flex justify-center space-x-4">
      <div className="bg-white dark:bg-gray-300 p-8 rounded-lg shadow-lg max-w-sm mx-auto">
        <form id="myForm" onSubmit={onSubmit}>
          <div className="mb-5">
            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue">
              Message
            </label>
            <input
              type="text"
              id="large-input"
              value={largeInput}
              onChange={handleChange}
              className={`block w-full p-4 text-blue-500 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                invalidField === 'large-input' ? 'border-red-500' : ''
              }`}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue">
              Name of sender
            </label>
            <input
              type="text"
              id="base-input"
              value={baseInput}
              onChange={handleChange}
              className={`bg-gray-50 border border-blue-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                invalidField === 'base-input' ? 'border-red-500' : ''
              }`}
            />
          </div>
          <div>
            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue">
              Job
            </label>
            <input
              type="text"
              id="small-input"
              value={smallInput}
              onChange={handleChange}
              className={`block w-full p-2 text-blue-500 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-black dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                invalidField === 'small-input' ? 'border-red-500' : ''
              }`}
            />
          </div>
          {errorMessage && <ToastMessage type="error" message={errorMessage} />}
          {isEmptyError && <ToastMessage type="warning" message="Can't send empty data" />}
          <div>
            <br />
            <button
  type="submit"
  className="px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  <svg
    className="w-4 h-4 text-white me-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26c.68.45 1.54.45 2.22 0L21 8m-18 8h18M5 8V6a2 2 0 012-2h10a2 2 0 012 2v2" />
  </svg>
  Send Now
</button>


          </div>
        </form>
      </div>
    </div>
  );
};
