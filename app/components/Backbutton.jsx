"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export const Backbutton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/Dataentry');
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        className="w-3.5 h-3.5 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5H1m0 0L5 1m-4 4L5 9"
        />
      </svg>
      Back
    </button>
  );
};
