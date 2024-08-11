import React, { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardList({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < flashcards.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="flashcard-list max-w-md mx-auto">
      {flashcards.length > 0 && (
        <>

          <div className="navigation flex justify-between mb-4">
            <button
              onClick={goToPrevious}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300"
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={goToNext}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300"
            >
              Next
            </button>
          </div>
          <Flashcard flashcard={flashcards[currentIndex]} />
        </>
      )}
    </div>
  );
}

export default FlashcardList;
