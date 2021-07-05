import React, { useState } from "react";
import Flashcard from "./Flashcard";

function FlashcardList({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + flashcards.length) % flashcards.length
    );
  };

  return (
    <div className="flashcard-list">
      <Flashcard card={flashcards[currentIndex]} />
      <div className="controls">
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
}

export default FlashcardList;
