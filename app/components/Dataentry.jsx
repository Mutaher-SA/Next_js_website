"use client";
import React, { useState } from 'react';
import { ToastError } from './ToastError';
import { ToastEmpty } from './ToastEmpty';

export const Dataentry = ({ handleSubmit, errorMessage, isEmptyError }) => {
  const [largeInput, setLargeInput] = useState('');
  const [baseInput, setBaseInput] = useState('');
  const [smallInput, setSmallInput] = useState('');
  const [invalidField, setInvalidField] = useState(null);

  const letterRegex = /^[a-zA-Z]*$/;

  const validateField = (value, fieldId) => {
    if (!letterRegex.test(value)) {
      setInvalidField(fieldId);
      return false;
    }
    setInvalidField(null);
    return true;
  };

  const handleChange = (event) => {
    const { value, id } = event.target;
    if (!validateField(value, id)) {
      return;
    }
    if (id === 'large-input') setLargeInput(value);
    if (id === 'base-input') setBaseInput(value);
    if (id === 'small-input') setSmallInput(value);
  };

  return (
    <div className="container mx-auto py-7 md:py-10 lg:py-24 flex justify-center space-x-4">
      <div className="bg-white dark:bg-gray-300 p-8 rounded-lg shadow-lg max-w-sm mx-auto">
        <form id="myForm" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue">
              Message
            </label>
            <input
              type="text"
              id="large-input"
              value={largeInput}
              onChange={handleChange}
              className={`block w-full p-4 text-gray-100 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
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
              className={`bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
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
              className={`block w-full p-2 text-gray-100 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-black dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                invalidField === 'small-input' ? 'border-red-500' : ''
              }`}
            />
          </div>
          {errorMessage && <ToastError message={errorMessage} />}
          {isEmptyError && <ToastEmpty />}
          <div>
            <br />
            <button
              type="submit"
              className="px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4 text-white me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              Send Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
