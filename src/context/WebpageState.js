import React, { useState, useContext, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const WebpageStateContext = createContext();

function WebpageStateProvider({ children }) {
  const [viewportWidth, setViewportWidth] = useState();
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    function onResize() {
      setViewportWidth(window.innerWidth);
    }
    function onScroll() {
      setScrollY(window.scrollY);
    }
    
    onResize();
    onScroll();

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <WebpageStateContext.Provider
      value={{
        viewportWidth,
        scrollY,
      }}
    >
      {children}
    </WebpageStateContext.Provider>
  );
}

WebpageStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useWebpageStateContext() {
  return useContext(WebpageStateContext);
}

export {
  WebpageStateProvider,
  useWebpageStateContext,
};