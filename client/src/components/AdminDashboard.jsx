import React from 'react';
import FlashcardForm from './FlashcardForm';

function AdminDashboard({ flashcards, setFlashcards }) {
  const addFlashcard = async (newFlashcard) => {
    const response = await fetch('/api/flashcards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFlashcard),
    });
    const data = await response.json();
    setFlashcards([...flashcards, data]);
  };

  const updateFlashcard = async (updatedFlashcard) => {
    const response = await fetch(`/api/flashcards/${updatedFlashcard.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFlashcard),
    });
    const data = await response.json();
    setFlashcards(flashcards.map(fc => fc.id === data.id ? data : fc));
  };

  const deleteFlashcard = async (id) => {
    await fetch(`/api/flashcards/${id}`, { method: 'DELETE' });
    setFlashcards(flashcards.filter(fc => fc.id !== id));
  };

  return (
    <div className="admin-dashboard">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <FlashcardForm onSubmit={addFlashcard} />
      <h3 className="text-xl font-semibold mt-8 mb-4">Existing Flashcards</h3>
      {flashcards.map(flashcard => (
        <div key={flashcard.id} className="mb-4 p-4 bg-gray-100 rounded">
          <FlashcardForm
            flashcard={flashcard}
            onSubmit={updateFlashcard}
          />
          <button
            onClick={() => deleteFlashcard(flashcard.id)}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;