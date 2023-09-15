// src/Card.js

import React from 'react';

// Card component receives a title and children (content) as props
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
}

export default Card;
