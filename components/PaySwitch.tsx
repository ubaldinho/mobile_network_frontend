import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, isActive, style }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flex bg-[var(--primary-light)] rounded">
      <button
        className={`flex-grow px-3 py-1 mx-1 my-2 rounded ${isActive ? 'bg-[var(--primary)] text-white' : 'bg-[var(--primary-light)]'}`}
        onClick={handleClick}
        style={style}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;