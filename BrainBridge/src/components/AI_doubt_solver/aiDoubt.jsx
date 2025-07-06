import React, { useState } from "react";
import conf from "../../conf/conf";

const AiDoubtSolver = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAnswer("");
    setError("");
    try {
      const apiKey = conf.openAI;
      const url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`;
      const body = {
        contents: [{ parts: [{ text: question }] }]
      };
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      console.log("Gemini API response:", data);

      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        setAnswer(data.candidates[0].content.parts[0].text);
      } else if (data.error && data.error.message) {
        setError("API Error: " + data.error.message);
      } else {
        setError("No answer received from AI. See console for details.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-10 bg-white dark:bg-black">
      <div className="w-full max-w-xl bg-white/80 dark:bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6 dark:text-green-400">
          AI Doubt Solver
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-white dark:border-gray-700"
            rows={4}
            placeholder="Type your doubt/question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-60"
            disabled={loading || !question.trim()}
          >
            {loading ? "Solving..." : "Solve with AI"}
          </button>
        </form>
        {error && (
          <div className="mt-4 bg-red-100 text-red-700 border border-red-300 px-3 py-2 rounded text-sm">
            {error}
          </div>
        )}
        {answer && (
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 whitespace-pre-line">
            <span className="font-semibold text-green-700 dark:text-green-400">AI Answer:</span>
            <br />
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default AiDoubtSolver;
