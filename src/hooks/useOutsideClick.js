import { useEffect } from 'react';
import useKeyDown from './useKeyDown';

function useOutsideClick({ containerRef, callback, outsideElementsThatDontTrigger, isInvokeCallbackOnEscapeKey, isIgnore }) {
  useKeyDown({ 
    callback: (event) => event.key === 'Escape' && callback(event),
    isIgnore: !isInvokeCallbackOnEscapeKey || isIgnore,
  });
  
  useEffect(() => {
    if(isIgnore) {
      return;
    }
    
    function onClick(event) {
      if(
        containerRef.current &&
        event.target !== containerRef.current &&
        !containerRef.current.contains(event.target) &&
        (!outsideElementsThatDontTrigger || !outsideElementsThatDontTrigger.find(element => element === event.target))
      ) {
        callback(event);
      }
    }
    
    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [containerRef, callback, outsideElementsThatDontTrigger, isInvokeCallbackOnEscapeKey, isIgnore]);
}

export default useOutsideClick;