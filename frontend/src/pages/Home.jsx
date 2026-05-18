import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-6xl font-bold">
          Welcome to AI Career Coach
        </h1>

        <p className="text-2xl mt-6">
          Build Your Future with AI Guidance
        </p>

        <button className="mt-10 bg-blue-500 px-8 py-4 rounded-xl text-xl hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;