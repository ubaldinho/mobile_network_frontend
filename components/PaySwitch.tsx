import React from 'react';

const Button: React.FC = (props: any) => {
  const {onClick, label, isActive, style } = props
  const handleClick = () => {
    onClick();
    
  };

  return (
    <div className="flex bg-[var(--primary-light)] rounded">
      <button
        className={`flex-grow px-3 py-1 mx-1 my-2 rounded ${isActive ? 'bg-[var(--primary)] text-white' : 'bg-[var(--primary-light)]'} `}
        onClick={handleClick}
      >
        {label}
      </button>
     
    </div>
  );
};

export default Button;
