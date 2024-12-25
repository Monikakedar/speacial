import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'; // Assuming your Home component is in the same folder
import mk9 from '../src/Images/mk9.jpg';

const Proposal = () => {
  return (
    <div 
      className="proposal-container" 
      style={{
        textAlign: 'center', 
        marginTop: '50px',
        boxSizing: 'border-box',
        fontFamily: 'Times New Roman',  // Corrected font family
        backgroundImage: `url(${mk9})`,  // Corrected background image syntax
        backgroundSize: 'cover',  // Ensures background image covers the whole container
        backgroundPosition: 'center',  // Centers the background image
        padding: '20px' // Optional, adds some padding around the content
      }}
    >
      <h1 style={{color:'white'}}>HAPPY BIRTHDAY BABU</h1>
      <h1 style={{color:"white" ,}}>I love you!</h1>
      <h2 style={{color:'white'}}>Will You Marry Me?</h2>

      {/* Add an image to the Proposal page */}
      <img 
        src={mk9} 
        alt="Love" 
        style={{ width: '300px', height: 'auto', margin: '20px 0' }} 
      />

      <div>
        <button 
          className="btn btn-success"
          onClick={() => window.location.href = '/home'}  // Navigate to Home page when clicked
        >
          Yes
        </button>
        <button 
          className="btn btn-danger" 
          style={{ margin: 10 }}
        >
          NO
        </button>
      </div>

   </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Proposal />} /> {/* Proposal Page */}
        <Route path="/home" element={<Home />} /> {/* Home Page */}
      </Routes>
    </Router>
  );
};

export default App;
