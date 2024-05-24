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
    <div className='px-4 py-7'>
      <h1 className="text-3xl font-bold mb-8">Choose A Topic</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:mx-12'>
        {lessons.map((lesson, index) => (
          <LessonCards
            key={index}
            title={lesson.title}
            description={lesson.description}
            href={lesson.href}
          />
        ))}
      </div>
    </div>
  );
};

export default LessonsSection;
