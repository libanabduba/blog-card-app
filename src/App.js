// src/App.js

import React from 'react';
import './App.css'; // You can add CSS styles here
import Card from './Card';
import Title from './Title';
import Author from './Author'; // Import the Author component
import Summary from './Summary'; // Import the Summary component

function App() {
  return (
    <div className="App">
      <Card title="Blog Post">
        <Title text="My Blog Post Title" />
        <Author authorName="John Doe" /> {/* Use the Author component */}
        <Summary summaryText="This is a summary of my blog post." /> {/* Use the Summary component */}
        <p>
          This is the content of my blog post. It can contain multiple
          paragraphs, images, and more.
        </p>
      </Card>
    </div>
  );
}

export default App;
