import React, { useState } from 'react';

interface DropdownButtonProps {
  label: string;
  children: React.ReactNode
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ label, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(isDropdownOpen);
  };

  return (
    <div className=" w-full items-center justify-center ">
      <div className=" w-full flex items-center justify-center ">
      <button
        className="flex items-center justify-center text-xl px-4 py-4 m-3 bg-primary text-white rounded-full focus:outline-none  min-h-65"
        onClick={toggleDropdown}
      >
        <span>{label}</span>
        <i className="las la-car text-xl mx-2"></i>
  

      </button>
      </div>
      
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