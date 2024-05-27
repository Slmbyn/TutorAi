import React from 'react';

const LessonCards = ({ title, description, href }) => {
  return (
    // <a href={href} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <a href={href} className=" my-5 group block max-w-sm p-6 border border-grey-800 rounded-lg shadow hover:bg-gray-100 bg-gray-800">
      <h5 className="mb-2 text-2xl font-bold tracking-tight group-hover:text-gray-900 text-white">{title}</h5>
      <p className="font-normal group-hover:text-gray-700 text-white">{description}</p>
    </a>
  );
};

export default LessonCards;
