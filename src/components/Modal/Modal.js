import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

import useAppearanceTransition from '../../hooks/useAppearanceTransition';
import useKeyDown from '../../hooks/useKeyDown';
import useFocusTrap from '../../hooks/useFocusTrap';

function Modal({ children, isOpen, setIsOpen }) {
  const { 
    transitionedElementRef: containerRef, isReady, isRendered
  } = useAppearanceTransition({ isOpen });

  useKeyDown({
    callback: (event) => event.key === 'Escape' && setIsOpen(false),
  });

  useFocusTrap({
    isOpen,
    containerRef,
  });

  if(!isRendered) {
    return;
  }
  
  return (
    <div 
      className={`
        ${css['background']}
        ${isReady ? css['background--ready'] : ''}
      `}
      role="dialog"
      aria-modal="true"
      ref={containerRef}
      onClick={(event) => (event.target === containerRef.current) && setIsOpen(false)}
    >
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Modal;