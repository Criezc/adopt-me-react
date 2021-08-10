import React, { FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal: FunctionComponent = ({ children }) => {
  const elRef = React.useRef(document.createElement('div'));

  React.useEffect(() => {
    if (!modalRoot) {
      return;
    }

    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
