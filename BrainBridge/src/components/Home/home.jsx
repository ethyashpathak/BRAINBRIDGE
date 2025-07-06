import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white from-indigo-50 via-white to-pink-50 flex items-center justify-center px-6 py-12 dark:bg-black">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6 leading-tight">
          Welcome to <span className="text-pink-500">BrainBridge</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Your bridge to smarter learning. Access quality courses, learn from the best instructors, and grow at your own pace — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/auth"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-base font-medium transition"
          >
            Get Started
          </Link>
          <Link
            to="/courses"
            className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg text-base font-medium transition"
          >
            Browse Courses
          </Link>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 text-left">
          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Wide Range of Courses</h3>
            <p className="text-gray-600 text-sm">
              From web development to core subjects, BrainBridge offers carefully structured courses for every learner.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Expert Mentors</h3>
            <p className="text-gray-600 text-sm">
              Learn directly from verified and passionate educators who bring real-world knowledge to the classroom.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Learn at Your Own Pace</h3>
            <p className="text-gray-600 text-sm">
              Access your courses 24/7 and learn whenever you're ready. No pressure, just progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

