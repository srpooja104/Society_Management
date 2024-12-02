import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Month");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative text-left">
      {/* Dropdown button */}
      <button
        onClick={toggleDropdown}
        className="rounded-md border px-4 py-2 text-sm flex items-center gap-1 hover:bg-gray-100"
      >
        {selectedOption}
        <FiChevronDown />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {["Last week", "Last month", "Last year"].map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${
                  selectedOption === option ? "text-[#000000] font-medium" : ""
                }`}
              >
                <span className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                  {/* Orange dot for the selected option */}
                  {selectedOption === option && (
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  )}
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
