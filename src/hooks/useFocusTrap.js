import { useEffect, useRef } from 'react';
import { getFocusableChildNodes } from '../misc/utils';

function useFocusTrap({ isOpen, containerRef, toggleButton, isIgnore }) {
  const lastKeyPressTime = useRef(0);
  
  useEffect(() => {
    if(isIgnore) {
      return;
    }
    
    let first;
    let last;

    function onKeyDown(event) {
      lastKeyPressTime.current = Date.now();
      
      if(!containerRef.current || event.key !== 'Tab') {
        return;
      }

      if(!event.shiftKey) {
        if(document.activeElement === last) {
          event.preventDefault();
          if(toggleButton) {
            toggleButton.focus();
          } else {
            first?.focus();
          }
        } else if(document.activeElement === toggleButton) {
          event.preventDefault();
          first?.focus();
        }
      } else {
        if(document.activeElement === first) {
          event.preventDefault();
          if(toggleButton) {
            toggleButton.focus();
          } else {
            last?.focus();
          }
        } else if(document.activeElement === toggleButton) {
          event.preventDefault();
          last?.focus();
        }
      }
    }

    if(containerRef.current) {
      const focusableElements = getFocusableChildNodes(containerRef.current);
      first = focusableElements[0];
      last = focusableElements[focusableElements.length - 1];

      if(isOpen) {
        first?.focus();

        if(Date.now() - lastKeyPressTime.current > 300) {
          first?.blur();
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, containerRef, toggleButton, isIgnore]);
}

export default useFocusTrap;