import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const checkBackend = async () => {
    try {
      const response = await fetch("http://localhost:5000/");

      const data = await response.text();

      setMessage(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        Frontend Connected to Backend
      </h1>

      <button
        onClick={checkBackend}
        className="mt-10 bg-blue-500 px-6 py-3 rounded-xl text-xl hover:bg-blue-700"
      >
        Check Backend Status
      </button>

      <p className="mt-8 text-3xl text-green-400">
        {message}
      </p>
    </div>
  );
}

export default App;