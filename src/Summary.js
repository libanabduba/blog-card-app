// src/Summary.js

import React from 'react';

// Summary component receives a summaryText prop
function Summary({ summaryText }) {
  return <p className="summary">{summaryText}</p>;
}

export default Summary;
