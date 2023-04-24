import { useState, useRef, useEffect } from 'react';

function useAppearanceTransition({ isOpen }) {
  const [isReady, setIsReady] = useState(false);
  const [isTransitioned, setIsTransitioned] = useState(false);
  const transitionedElementRef = useRef();
  const isRendered = isOpen || isTransitioned;

  useEffect(() => {
    function onTransitionEnd() {
      setIsTransitioned(false);
    }
    
    if(isOpen) {
      setIsReady(true);
      setIsTransitioned(isOpen);
    } else {
      setIsReady(false);
      transitionedElementRef.current?.addEventListener('transitionend', onTransitionEnd, { once: true });
    }

    return () => {
      removeEventListener('transitionend', onTransitionEnd);
    };
  }, [isOpen]);

  return {
    transitionedElementRef,
    isReady,
    isRendered,
  };
}

export default useAppearanceTransition;