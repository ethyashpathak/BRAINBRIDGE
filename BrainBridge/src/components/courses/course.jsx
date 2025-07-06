import React from "react";

const dummyCourses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "Amit Sharma",
    price: "₹4999",
    image: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    instructor: "Sakshi Mehta",
    price: "₹3499",
    image: "https://yt3.googleusercontent.com/x1iAf8MN08FlFaIMPE8JWFYDysnXkK8S7WZ-dHeROrfgY2EZUVsztox4g8kwWbU7PzG71kVO=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 3,
    title: "C++ Masterclass",
    instructor: "Ravi Verma",
    price: "₹2999",
    image: "https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png",
  },
  {
    id: 4,
    title: "React JS Bootcamp",
    instructor: "Priya Sen",
    price: "₹2000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbGnoRnSc7PbyR5GRffdtfIVsp-RAyruQMQ&s",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-black">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">
        Explore Courses
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto border-white">
        {dummyCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col  dark:bg-gray-900 border-white"
          >
            <img
              src={course.image}
              alt={course.title}
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{course.title}</h2>
            <p className="text-sm text-gray-600 mt-1">Instructor: {course.instructor}</p>
            <p className="mt-2 font-bold text-green-600">{course.price}</p>
            <button
              className="mt-auto bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition mt-4"
              onClick={() => alert(`Enrolled in ${course.title}`)}
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

