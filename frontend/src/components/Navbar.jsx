import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-8 py-4">
      <Link to="/">
        <h1 className="text-3xl font-bold">
          AI Career Coach
        </h1>
      </Link>

      <div className="space-x-4">
        <Link to="/login">
          <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-700">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;