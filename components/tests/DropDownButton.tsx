import React, { useState } from 'react';

interface DropdownButtonProps {
  label: string;
  children: React.ReactNode
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ label, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className=" w-full ">
      <button
        className="flex items-center justify-center text-3xl px-4 py-2 bg-primary text-white rounded-md focus:outline-none w-full min-h-65"
        onClick={toggleDropdown}
      >
        <span>{label}</span>
        <svg
  className={`w-4 h-4 ml-2 transition-transform duration-300 ${
    isDropdownOpen ? 'transform rotate-180' : ''
  }`}
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  {isDropdownOpen ? (
    <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M20 12H4"
  />
  ) : (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  )}
</svg>
      </button>
      {isDropdownOpen && (
        <div className={'transition-opacity duration-300 w-full'+ `opacity-${isDropdownOpen? '100' : '0'}`}>

<div className={"mt-2 py-2 bg-white border border-gray-300 rounded-md shadow-lg " + `opacity-${isDropdownOpen? '100' : '0'}`}>
          {children}
        </div>


        </div>
        
      )}
    </div>
  );
};

export default DropdownButton;