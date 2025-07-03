import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-2 mt-12">
      <div className="max-w-6xl mx-auto px-2 flex flex-col md:flex-row justify-between items-center">
        {/* Left-aligned text at bottom */}
        <p className="text-sm w-full md:w-auto text-left">
         Copyrights © 2025 Tharunperika | All Rights Reserved
        </p>

        {/* Right-side button */}
        <button
          onClick={() => alert('Privacy Policy page coming soon.')}
          className="text-sm hover:text-gray-300 transition underline mt-2 md:mt-0"
        >
          Privacy Policy
        </button>
      </div>
    </footer>
  );
};

export default Footer;


