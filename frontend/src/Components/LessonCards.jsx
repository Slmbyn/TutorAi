import React from 'react';
import { Link } from 'react-router-dom';

const LessonCards = ({ title, description, href }) => {
  return (
    <Link to={href} className="my-5 group block max-w-sm p-6 border border-grey-800 rounded-lg shadow hover:bg-gray-100 bg-gray-800">
      <h5 className="mb-2 text-2xl font-bold tracking-tight group-hover:text-gray-900 text-white">{title}</h5>
      <p className="font-normal group-hover:text-gray-700 text-white">{description}</p>
    </Link>
  );
};

export default LessonCards;

