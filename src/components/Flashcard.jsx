import React, { useState } from "react";

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="front">{card.question}</div>
      <div className="back">{card.answer}</div>
    </div>
  );
}

export default Flashcard;
