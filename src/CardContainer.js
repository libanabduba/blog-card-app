// CardContainer.js

import React from 'react';
import Card from './Card';

function CardContainer() {
  // Dummy data for the cards (replace with your data)
  const cardData = [
    {
      title: 'Card 1',
      author: 'Author 1',
      content: 'Content 1',
    },
    {
      title: 'Card 2',
      author: 'Author 2',
      content: 'Content 2',
    },
    {
      title: 'Card 3',
      author: 'Author 3',
      content: 'Content 3',
    },
    // Add more card objects as needed
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          author={card.author}
          content={card.content}
        />
      ))}
    </div>
  );
}

export default CardContainer;
