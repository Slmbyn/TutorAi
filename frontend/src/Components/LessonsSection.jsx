import { Link } from 'react-router-dom';

const LessonsSection = () => {
  return (
    <div>
      <h1>Lesson Cards</h1>
      <Link to="/binarysearch" className="text-blue-500 underline">
        Go to Binary Search Lesson
      </Link>
    </div>
  );
}

export default LessonsSection;
