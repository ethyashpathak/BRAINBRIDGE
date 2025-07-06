import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const handleLogout = async () => {
    await logout();
    navigate("/auth");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <Link to="/" className="text-2xl font-extrabold text-green-600 dark:text-green-400 tracking-tight">
          BrainBridge
        </Link>

        <nav className="flex gap-6 items-center text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/courses" className="hover:text-indigo-600 transition">Courses</Link>
          <Link to="/OurTeam" className="hover:text-indigo-600 transition">Our Team</Link>
          {user && (
            <Link to="/my-courses" className="hover:text-green-600 transition">My Courses</Link>
          )}

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-indigo-600" />
            )}
          </button>

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-indigo-600 text-white px-4 py-1.5 rounded hover:bg-indigo-700 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth"
              className="bg-green-600 text-white px-4 py-1.5 rounded hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
