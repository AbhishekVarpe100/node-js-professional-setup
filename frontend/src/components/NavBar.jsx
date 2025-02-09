import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/addproduct"
            className="text-white bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300"
          >
            Add Product
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
          >
            See Product
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
