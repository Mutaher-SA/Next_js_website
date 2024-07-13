"use client";
import React from "react";
import Link from "next/link";

export const Bloxsection = () => {
    return (
        <div className="dark:bg-gray-900">
        <div className="container mx-auto py-7 md:py-10 lg:py-24">
        <div className="flex flex-col justify-center items-center h-full w-full mt-5 md:mt-8 lg:mt-0">
        <div className="relative w-full h-full flex justify-center items-center">            <div className="relative w-1/2 h-1/2">
            <img src="/Bg1.png" alt="Robort" role="img" className="w-full h-full hidden lg:block" />
            <img src="/Bg1.png" alt="Robort" role="img" className="w-full h-full lg:hidden" />
            <div className="absolute bottom-0 right-0 bg-red-200 w-1/2">
            <button className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-xl xl:text-2xl font-medium text-white flex justify-between w-full items-center p-5 xl:p-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                Discover More
                <div>
                <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1.svg" alt="arrow" />
                <img className="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1dark.svg" alt="arrow" />
                </div>
            </button>
            </div>
        </div>
        <div>
            <div>
            <h2 className="dark:text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900">Amoire</h2>
            <p className="dark:text-gray-300 mt-4 lg:mt-5 text-base leading-normal text-gray-600">
                Welcome to the future AI management...
            </p>
            </div>
 


    </div>

                      
                    </div>
                </div>
            </div>
        </div>
    );
};
