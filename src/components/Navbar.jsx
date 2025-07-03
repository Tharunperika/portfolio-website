import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Tharun Perika</h1>
      <ul className="flex gap-6 text-lg">
        <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li> {/* ✅ Skills added */}
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li> {/* ✅ Moved to last */}
      </ul>
    </nav>
  );
};

export default Navbar;

