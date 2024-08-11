import React, { useState } from 'react';

function Flashcard({ flashcard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flashcard shadow-lg rounded-lg p-6 cursor-pointer 
      transition duration-300 transform hover:scale-105 border 
      ${isFlipped ? 'bg-green-300' : 'bg-purple-300'} 
      h-48 overflow-y-auto`} // Added overflow-y-auto for scrolling
      style={{ 
        scrollbarWidth: 'none', /* For Firefox */
        msOverflowStyle: 'none' /* For Internet Explorer and Edge */
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <style jsx>{`
        .flashcard::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }
      `}</style>
      {isFlipped ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Answer</h2>
          <p className="text-lg">{flashcard.answer}</p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Question</h2>
          <h2 className="text-xl font-semibold">{flashcard.question}</h2>
        </>
      )}
    </div>
  );
}

export default Flashcard;
