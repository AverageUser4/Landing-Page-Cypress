import { useEffect } from 'react';
import { getFocusableChildNodes } from '../misc/utils';

function useFocusTrap({ isOpen, containerRef, toggleButton }) {
  useEffect(() => {
    let focusableElements;
    let first;
    let last;

    function onKeyDown(event) {
      if(event.key !== 'Tab') {
        return;
      }

      if(!event.shiftKey) {
        if(document.activeElement === last) {
          event.preventDefault();
          if(toggleButton) {
            toggleButton.focus();
          } else {
            first.focus();
          }
        } else if(document.activeElement === toggleButton) {
          event.preventDefault();
          first.focus();
        }
      } else {
        if(document.activeElement === first) {
          event.preventDefault();
          if(toggleButton) {
            toggleButton.focus();
          } else {
            last.focus();
          }
        } else if(document.activeElement === toggleButton) {
          event.preventDefault();
          last.focus();
        }
      }
    }

    if(containerRef.current) {
      focusableElements = getFocusableChildNodes(containerRef.current);
      first = focusableElements[0];
      last = focusableElements[focusableElements.length - 1];

      if(isOpen) {
        first.focus();
        window.addEventListener('keydown', onKeyDown);
      }
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, containerRef, toggleButton]);
}

export default useFocusTrap;