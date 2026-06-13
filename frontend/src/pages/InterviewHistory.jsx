import React, { useEffect, useState } from "react";
import axios from "axios";
const InterviewHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(
    localStorage.getItem("user")
  );
  const fetchHistory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/interview-history/${user._id}`
      );

      console.log(response.data);

      setHistory(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchHistory();
    }
  }, []);

  if (!user) {
    return <h2>Please Login</h2>;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (history.length === 0) {
    return <h2>No Interview History Found</h2>;
  }

  return (
  <div className="min-h-screen bg-black text-white p-6">
    <h1 className="text-3xl font-bold mb-6">
      Interview History
    </h1>

    <div className="grid gap-4">
      {history.map((item) => (
        <div
          key={item._id}
          className="bg-gray-900 p-5 rounded-xl border border-gray-700"
        >
          <h2 className="text-xl font-semibold">
            {item.role}
          </h2>

          <p className="mt-2">
            Difficulty: {item.difficulty}
          </p>

          <p>
            Score: {item.score}
          </p>

          <p className="text-sm text-gray-400 mt-2">
            {new Date(item.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  </div>
);
};

export default InterviewHistory;