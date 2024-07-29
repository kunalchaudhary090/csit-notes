import React from 'react';
import { HiArrowSmRight } from "react-icons/hi";

const Section = ({ title, destination, description, items, path }) => (
  <div>
    <div className='p-2 mb-5 mt-[-24px] text-xl cursor-pointer'><span className='text-lg p-2'><a href="/">Home</a></span>/<span className='text-lg p-2 opacity-65'><a href={destination}>{title}</a></span></div>
    <h1 className="text-4xl font-semibold mb-2 ml-7 sm:ml-6 lg:ml-2">{title}</h1>
    <p className='font-normal text-base p-2'>{description}</p> <br />
    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-5 sm:mx-5 lg:mx-0 gap-6 mb-10">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 dark:bg-blue-900">
          {item.rank && (
            <span className={`${item.color} text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:text-black`}>{item.rank}</span>
          )}
          <img src={item.img} alt={item.subject} className="w-full object-cover mt-2" />
          <h3 className="mt-4 text-lg font-semibold">{item.subject}</h3>
          <p className="mt-2 text-gray-600 dark:text-white">{item.chapters}+ Chapters</p>
          <div className='flex items-center justify-center w-8 h-8 rounded-md bg-gray-200 dark:bg-gray-800 lg:ml-[186px] md:ml-[300px] mb:ml-[260px] mb:w-10 mb:h-10 '>
          <a href={item.path}>
           <HiArrowSmRight size={22}/>
          </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Section;
