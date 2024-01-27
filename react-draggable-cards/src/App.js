import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './App.css';

function App() {
  const [cards, setCards] = useState(
    Array.from({ length: 20 }, (_, index) => ({ id: index, text: `Card ${index + 1}` }))
  );

  const handleTextChange = (id, newText) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, text: newText } : card))
    );
  };

  return (
    <div className="App">
      {cards.map((card) => (
        <Draggable key={card.id}>
          <div className="card" contentEditable="true" onInput={(e) => handleTextChange(card.id, e.currentTarget.textContent)}>
            {card.text}
          </div>
        </Draggable>
      ))}
    </div>
  );
}

export default App;
