import React, { useState, useRef, useEffect } from 'react';

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const yesButtonRef = useRef(null); // Create a ref for the "Yes" button
  const openButtonRef = useRef(null); // Create a ref for the "Open" button
  const closeButtonRef = useRef(null); // Create a ref for X button
  const noButtonRef = useRef(null); // Create a ref for "No" button
// const main = document.getElementById('main')

  const openModal = () => {
    setIsModalOpen(true);
    // main.style.display= "none";
  }

  const closeModal = () => {
    setIsModalOpen(false);
    // main.style.display = "block";
  }

  // Add an effect to focus on the "Yes" button when the modal opens
  useEffect(() => {
    if (isModalOpen) {
      yesButtonRef.current.focus();
    }
  }, [isModalOpen]);

  // Add an effect to focus on the "Open" button when the modal is closed
  useEffect(() => {
    if (!isModalOpen) {
      openButtonRef.current.focus();
    }
  }, [isModalOpen]);
  
  // Keyboard trap function
const keyboardTrap = (e) => {
  if (isModalOpen && e.key === 'Tab') {
    if (e.shiftKey) {
      if (document.activeElement === closeButtonRef.current) {
        // Shift + Tab: Move focus to the "No" button
        e.preventDefault();
        noButtonRef.current.focus();
      }
    } else {
      if (document.activeElement === yesButtonRef.current) {
        // Tab: Move focus to the "No" button
        e.preventDefault();
        noButtonRef.current.focus();
      } else if (document.activeElement === noButtonRef.current) {
        // Tab: Move focus to the "X" button
        e.preventDefault();
        closeButtonRef.current.focus();
      }
    }
  }
}


  // Add an effect to handle keyboard trapping
  useEffect(() => {
    if (isModalOpen) {
      // Add an event listener for keyboard trapping
      const handleKeyDown = (e) => {
        keyboardTrap(e);
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        // Remove the event listener when the modal is closed
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isModalOpen]);

  return (
    <div>
      {isModalOpen ? (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <button onClick={closeModal} ref={closeButtonRef} aria-label="close" >X</button>
            <h3>Exit this page</h3>
            <p>Are you sure you want to exit this page?</p>
            <ul>
              <li>
                <button ref={yesButtonRef} tabIndex={0} className='modal_btn'>Yes</button>
              </li>
              <li>
                <button ref={noButtonRef} onClick={closeModal} tabIndex={0} className='modal_btn'>No</button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div id="content">
          <h1>Modal</h1>
          <button ref={openButtonRef} onClick={openModal}>Open</button>
        </div>
      )}
    </div>
  );
}

export default Modal;
