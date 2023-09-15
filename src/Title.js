// src/Title.js

import React from 'react';

// Title component receives a text prop
function Title({ text }) {
  return <h1 className="title">{text}</h1>;
}

export default Title;
