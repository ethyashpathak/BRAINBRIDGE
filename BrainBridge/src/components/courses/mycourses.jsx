import React from "react";
import { useAuth } from "../../context/AuthContext";

// Placeholder: Replace with real enrolled courses from backend in the future
const dummyEnrolledCourses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "Amit Sharma",
    progress: 60,
    image: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    instructor: "Sakshi Mehta",
    progress: 30,
    image: "https://yt3.googleusercontent.com/x1iAf8MN08FlFaIMPE8JWFYDysnXkK8S7WZ-dHeROrfgY2EZUVsztox4g8kwWbU7PzG71kVO=s900-c-k-c0x00ffffff-no-rj",
  },
];

const MyCourses = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white dark:bg-black">
        <div className="bg-white/80 dark:bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-800 text-center">
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-green-400 mb-4">My Courses</h2>
          <p className="text-gray-700 dark:text-gray-200">You must be logged in to view your courses.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] px-6 py-12 bg-gray-50 dark:bg-black">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">My Courses</h1>
      {dummyEnrolledCourses.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-300">You are not enrolled in any courses yet.</div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
          {dummyEnrolledCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col dark:bg-gray-900 border-white"
            >
              <img
                src={course.image}
                alt={course.title}
                className="rounded-md mb-4 w-full h-40 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{course.title}</h2>
              <p className="text-sm text-gray-600 mt-1">Instructor: {course.instructor}</p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Progress: {course.progress}%</p>
              <button
                className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition mt-4"
                onClick={() => alert(`Continue learning: ${course.title}`)}
              >
                Continue Learning
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses; 