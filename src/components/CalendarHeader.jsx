import React from 'react';

const CalendarHeader = ({ month, year }) => (
  <header className="locked-header relative w-full overflow-hidden bg-gray-200">
    <img 
      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" 
      alt="Mountain climber" 
      className="w-full h-full object-cover object-center"
    />
    <div 
      className="absolute bottom-0 right-0 bg-blue-600 text-white p-6 pl-12 shadow-lg z-10" 
      style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      <p className="text-sm font-bold opacity-80 leading-none tracking-widest">{year}</p>
      <h1 className="text-3xl font-black uppercase tracking-tighter">{month}</h1>
    </div>
  </header>
);

export default CalendarHeader;