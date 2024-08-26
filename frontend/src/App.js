// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <h2>Welcome to the Event Management Platform</h2>
          {/* Other content goes here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
