import React, { useState } from 'react';
import './App.css';
import Updatetext from './component/Updatetext';
import Modal from './component/modal';
import Form1 from './component/form';

function App() {
  
  return (
    <div>
      <div id="main"  >
        <Updatetext />
      </div>
      <Modal/>
  <Form1/>
    </div>
  );
}

export default App;
