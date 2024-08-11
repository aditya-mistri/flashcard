import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    const response = await fetch('/api/flashcards');
    const data = await response.json();
    setFlashcards(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Flashcard Learning Tool</h1>
      <button 
        onClick={() => setIsAdmin(!isAdmin)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        {isAdmin ? 'Exit Admin Mode' : 'Enter Admin Mode'}
      </button>
      {isAdmin ? (
        <AdminDashboard flashcards={flashcards} setFlashcards={setFlashcards} />
      ) : (
        <FlashcardList flashcards={flashcards} />
      )}
    </div>
  );
}

export default App;