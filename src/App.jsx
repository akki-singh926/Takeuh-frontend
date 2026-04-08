import React, { useState } from 'react';
import CalendarHeader from './components/CalendarHeader';
import CalendarGrid from './components/CalendarGrid';
import NotesPanel from './components/NotesPanel';
import { useLocalStorage } from './hooks/useLocalStorage';
import { MONTH_DATA } from './constants/calendarData';

export default function App() {
  const [monthIdx, setMonthIdx] = useState(0);

  // Dynamic keys ensure Jan notes don't show up in Feb
  const [range, setRange] = useLocalStorage(`range-${monthIdx}`, { start: null, end: null });
  const [notes, setNotes] = useLocalStorage(`notes-${monthIdx}`, '');

  const nextMonth = () => setMonthIdx((prev) => (prev === 11 ? 0 : prev + 1));
  const prevMonth = () => setMonthIdx((prev) => (prev === 0 ? 11 : prev - 1));

  return (
    <div className="min-h-screen bg-[#d1d5db] flex items-center justify-center p-4 md:p-12 overflow-hidden">
      <div className="relative max-w-5xl w-full flex flex-col items-center">
        
        {/* PHYSICAL WALL HOOK */}
        <div className="w-6 h-6 bg-gray-700 rounded-full mb-[-12px] z-30 shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
        </div>

        {/* CALENDAR BODY */}
        <div className="calendar-card bg-white flex flex-col md:flex-row relative overflow-hidden shadow-2xl w-full h-[85vh] md:h-auto md:max-h-[90vh]">
          
          {/* SPIRAL BINDER */}
          <div className="absolute top-0 left-0 w-full h-4 bg-gray-300 border-b border-gray-400 flex justify-around px-8 z-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-2 h-8 -mt-3 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 rounded-full border border-gray-600"></div>
            ))}
          </div>

          {/* LEFT CONTENT: FIXED HEADER AREA */}
          <div className="flex-[1.5] flex flex-col pt-4 border-r border-gray-100 min-h-0 overflow-hidden">
            {/* Dynamic Header */}
            <CalendarHeader 
               month={MONTH_DATA[monthIdx].name} 
               year="2022" 
               img={MONTH_DATA[monthIdx].img} 
            />
            
            {/* Month Navigation Controls */}
            <div className="flex justify-between items-center px-8 py-2 bg-gray-50 border-b text-gray-600 font-bold text-xs tracking-widest">
              <button onClick={prevMonth} className="hover:text-blue-600 transition-colors">PREV</button>
              <span>{MONTH_DATA[monthIdx].name} 2022</span>
              <button onClick={nextMonth} className="hover:text-blue-600 transition-colors">NEXT</button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <CalendarGrid 
                range={range} 
                setRange={setRange} 
                totalDays={MONTH_DATA[monthIdx].days}
                monthIdx={monthIdx}
              />
            </div>
          </div>

          {/* RIGHT CONTENT: NOTES */}
          <div className="w-full md:w-80 bg-[#fbfbfb] p-8 pt-12 flex flex-col">
            <NotesPanel notes={notes} setNotes={setNotes} range={range} />
          </div>

        </div>
      </div>
    </div>
  );
}