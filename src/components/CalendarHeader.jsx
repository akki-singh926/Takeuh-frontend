import React from 'react';

const CalendarHeader = ({ month, year, img }) => (
  <header className="relative w-full h-48 md:h-64 flex-shrink-0 overflow-hidden">
    <img 
      src={img} 
      alt={month} 
      className="w-full h-full object-cover transition-opacity duration-500"
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