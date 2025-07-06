import React, { useState } from "react";
import authService from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", name: "" });
    setError("");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        await authService.login({
          email: formData.email,
          password: formData.password,
        });
      } else {
        await authService.createAccount({
          email: formData.email,
          password: formData.password,
          name: formData.name,
        });
      }

      const user = await authService.getCurrentUser();
      if (user) {
        navigate("/courses");
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 dark:bg-black">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl border border-gray-200 rounded-2xl p-8 w-full max-w-md transition-all dark:bg-black">
        <h1 className="text-3xl font-extrabold text-center text-green-700 mb-6 tracking-wide">
          {isLogin ? "Welcome back to BrainBridge" : "Join BrainBridge Today"}
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 border border-red-300 px-3 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition  dark:placeholder-gray-600 dark:text-white"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition dark:placeholder-gray-600 dark:text-white"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition  dark:placeholder-gray-600 dark:text-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200"
            disabled={loading}
          >
            {loading
              ? isLogin
                ? "Logging in..."
                : "Creating account..."
              : isLogin
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-green-600 font-semibold hover:underline ml-1"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
