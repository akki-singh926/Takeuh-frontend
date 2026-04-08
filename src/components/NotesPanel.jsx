import React from 'react'; // Ensure this is present

const NotesPanel = ({ notes, setNotes, range }) => {
  // Calculate duration for the "Creative Liberty" summary feature [cite: 30, 37]
  const rangeLength = range && range.start && range.end ? range.end - range.start + 1 : 0;

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Notes</h3>
      
      {/* Smart Summary Feature [cite: 37] */}
      {rangeLength > 0 && (
        <div className="mb-6 p-3 bg-blue-600 rounded-lg text-white shadow-lg">
          <p className="text-[10px] font-bold uppercase opacity-80">Range Details</p>
          <p className="text-sm font-bold">{rangeLength} Days Selected</p>
        </div>
      )}

      <textarea
        className="flex-1 w-full bg-transparent border-none focus:ring-0 resize-none text-gray-700 leading-relaxed outline-none notes-lines"
        placeholder="Jot down general memos for the month..."
        value={notes || ""} // Ensure it doesn't crash if notes is undefined
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
};

export default NotesPanel;