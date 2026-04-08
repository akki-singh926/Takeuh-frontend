import React from 'react';

const DayCell = ({ day, status, onClick }) => {
  const baseClass = "h-10 w-10 flex items-center justify-center text-sm transition-all cursor-pointer font-semibold z-10 relative";
  
  const statusStyles = {
    start: "bg-blue-600 text-white rounded-full scale-105 shadow-md",
    end: "bg-blue-600 text-white rounded-full scale-105 shadow-md",
    range: "bg-blue-50 text-blue-700",
    none: "hover:bg-gray-100 text-gray-600"
  };

  return (
    <div className="relative flex justify-center items-center py-1">
      {/* Background fill for the range connector to make it look seamless */}
      {status === 'range' && (
        <div className="absolute inset-y-1 left-0 right-0 bg-blue-50 -z-0"></div>
      )}
      {status === 'start' && day !== 31 && (
        <div className="absolute inset-y-1 left-1/2 right-0 bg-blue-50 -z-0"></div>
      )}
      {status === 'end' && day !== 1 && (
        <div className="absolute inset-y-1 left-0 right-1/2 bg-blue-50 -z-0"></div>
      )}

      <button 
        onClick={onClick} 
        className={`${baseClass} ${statusStyles[status]}`}
      >
        {day}
      </button>
    </div>
  );
};

export default DayCell;