import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import './style.css';

function Modal() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className='modalContainer'>
            <button className='btn btn-primary' onClick={() => setShowPopup(!showPopup)}>
                Show Popup
            </button>
            <div className="modalPopup"
                style={{
                    visibility: showPopup ? 'visible' : 'hidden',
                    opacity: showPopup ? '1' : '0',
                    transition: '0.3s ease-in-out'
                }}>
                    <div className="modalBorder"></div>
                    <div className="modalForm">
                       <MdClose size={25} className='closeIcon' onClick={() => setShowPopup(false)} />
                       <div className="modalContent">
                        <h2>Modal React Study</h2>
                        <p>Check out the code to learn how to open and close modal in react</p>
                        <div className="btns">
                            <button className='btn btn-primary'>Sign Up</button>
                            <button className='btn btn-secondary' onClick={() => setShowPopup(false)}>Close</button>
                        </div>
                       </div>
                    </div>
            </div>
        </div>
    )
}

export default Modal
