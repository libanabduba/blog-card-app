// src/Author.js

import React from 'react';

// Author component receives an authorName prop
function Author({ authorName }) {
  return <p className="author">Author: {authorName}</p>;
}

export default Author;
