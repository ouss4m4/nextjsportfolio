import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-dark-100">
      <div
        className="p-4 rounded-xl bg-dark-500"
        style={{ width: '80vw', height: 'auto', maxWidth: '650px' }}
      >
        <div className="flex justify-end text-4xl">
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        {title && <h1 className="text-2xl text-center">{title}</h1>}
        <div className="pt-2">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;
