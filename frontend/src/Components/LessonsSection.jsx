import React from 'react';
import LessonCards from './LessonCards';

const LessonsSection = () => {
  const lessons = [
    {
      title: "Binary Search Algorithm",
      description: "Quickly find a target value within a sorted list by repeatedly dividing the search interval in half and comparing the middle element to the target.",
      href: "/binarysearch"
    },
    {
      title: "Binary Search Algorithm",
      description: "Quickly find a target value within a sorted list by repeatedly dividing the search interval in half and comparing the middle element to the target.",
      href: "/binarysearch"
    },
    {
      title: "Binary Search Algorithm",
      description: "Quickly find a target value within a sorted list by repeatedly dividing the search interval in half and comparing the middle element to the target.",
      href: "/binarysearch"
    },
    {
      title: "Binary Search Algorithm",
      description: "Quickly find a target value within a sorted list by repeatedly dividing the search interval in half and comparing the middle element to the target.",
      href: "/binarysearch"
    },
    {
      title: "Binary Search Algorithm",
      description: "Quickly find a target value within a sorted list by repeatedly dividing the search interval in half and comparing the middle element to the target.",
      href: "/binarysearch"
    },
    {
      title: "Binary Search Algorithm",
      description: "Quickly find a target value within a sorted list by repeatedly dividing the search interval in half and comparing the middle element to the target.",
      href: "/binarysearch"
    },
    {
      title: "Binary Search Algorithm",
      description: "Quickly find a target value within a sorted list by repeatedly dividing the search interval in half and comparing the middle element to the target.",
      href: "/binarysearch"
    },
    {
      title: "Binary Search Algorithm",
      description: "Quickly find a target value within a sorted list by repeatedly dividing the search interval in half and comparing the middle element to the target.",
      href: "/binarysearch"
    },
  ];

  return (
    <div className='px-4 py-7 bg-[#121212]'>
      <h1 className="text-3xl mt-5 mb-10 text-white font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">Choose A Topic</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:mx-12'>
          {lessons.map((lesson, index) => (
            <LessonCards
              key={index}
              title={lesson.title}
              description={lesson.description}
              href={lesson.href}
              className='mb-10'
            />
          ))}
        </div>
    </div>
  );
};

export default LessonsSection;
