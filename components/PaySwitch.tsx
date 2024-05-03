import React, { useState } from 'react';

const ButtonGroup: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleClick = (button: string) => {
    setSelectedButton(button);
  };

  return (
    <div className="flex bg-[var(--primary-light)] rounded">
      <button
        className={`flex-grow px-3 py-1 mx-1 my-2 rounded ${selectedButton === 'button1' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--primary-light)]'}`}
        onClick={() => handleClick('button1')}
      >
        Monthly
      </button>
      <button
        className={`flex-grow px-3 py-1 mx-1 my-2 rounded ${selectedButton === 'button2' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--primary-light)]'}`}
        onClick={() => handleClick('button2')}
      >
        Quarterly
      </button>
      <button
        className={`flex-grow px-3 py-1 mx-1 my-2 rounded ${selectedButton === 'button3' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--primary-light)]'}`}
        onClick={() => handleClick('button3')}
      >
        Yearly
      </button>
    </div>
  );
};

export default ButtonGroup;