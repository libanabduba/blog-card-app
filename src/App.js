// src/App.js

import React from 'react';
import './App.css'; // You can add CSS styles here
import Card from './Card';
import Title from './Title';
import Author from './Author'; // Import the Author component
import Summary from './Summary'; // Import the Summary component


import './App.css'; // Add your CSS styles
import CardContainer from './CardContainer';


function App() {
  return (
    <div className="App">
      <CardContainer />
    </div>
  );
}

export default App;
