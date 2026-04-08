import React from 'react';
import CalendarHeader from './components/CalendarHeader';
import CalendarGrid from './components/CalendarGrid';
import NotesPanel from './components/NotesPanel';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  const [range, setRange] = useLocalStorage('selected-range', { start: null, end: null });
  const [notes, setNotes] = useLocalStorage('calendar-notes', '');

  return (
    <div className="min-h-screen bg-[#d1d5db] flex items-center justify-center p-4 md:p-12 overflow-hidden">
      <div className="relative max-w-5xl w-full flex flex-col items-center">
        
        {/* PHYSICAL WALL HOOK [cite: 26] */}
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
            <CalendarHeader month="JANUARY" year="2022" />
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <CalendarGrid range={range} setRange={setRange} />
            </div>
          </div>

          {/* RIGHT CONTENT: NOTES [cite: 30, 34] */}
          <div className="w-full md:w-80 bg-[#fbfbfb] p-8 pt-12 flex flex-col">
            <NotesPanel notes={notes} setNotes={setNotes} range={range} />
          </div>

        </div>
      </div>
    </div>
  );
}