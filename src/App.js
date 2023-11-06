import React, { useState } from 'react';
import './App.css';
import Updatetext from './component/Updatetext';
import Modal from './component/modal';

function App() {
  

  return (
    <div>
      <div id="main"  >
        <Updatetext />
      </div>
      <Modal/>
    </div>
  );
}

export default App;
