import { useEffect } from 'react';

function useKeyDown({ callback, isIgnore }) {
  useEffect(() => {
    if(isIgnore) {
      return;
    }
    
    function onKeyDown(event) {
      callback(event);
    }
    
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [callback, isIgnore]);
}

export default useKeyDown;