import React from "react";
import FlashcardList from "./components/FlashcardList";
import { flashcards } from "./data/flashcards";

function App() {
  return (
    <div className="app">
      <h1>Flashcards App</h1>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;
