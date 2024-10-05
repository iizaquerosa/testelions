import React from 'react';
import ReactDOM from 'react-dom'

import Header from './components/Header';
import Nav from './components/Navbar';
import Section from './components/Section';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Nav></Nav>
    <Section>
        
    </Section>
    
  </React.StrictMode>
);


