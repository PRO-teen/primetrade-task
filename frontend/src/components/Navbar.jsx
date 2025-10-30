import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center relative">
      {/* Logo or Brand */}
      <Link to="/" className="text-xl font-semibold">Task Manager</Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/register" className="hover:text-gray-400">Register</Link>
        <Link to="/login" className="hover:text-gray-400">Login</Link>
        <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4 md:hidden z-20">
          <Link onClick={toggleMenu} to="/" className="hover:text-gray-400">Home</Link>
          <Link onClick={toggleMenu} to="/register" className="hover:text-gray-400">Register</Link>
          <Link onClick={toggleMenu} to="/login" className="hover:text-gray-400">Login</Link>
          <Link onClick={toggleMenu} to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
