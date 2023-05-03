import React, { useState, useContext, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const ViewportContext = createContext();

function ViewportProvider({ children }) {
  const [viewportWidth, setViewportWidth] = useState(0);
  const isMobileView = viewportWidth < 640;

  useEffect(() => {
    function onResize() {
      setViewportWidth(window.innerWidth);
    }
    
    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <ViewportContext.Provider
      value={{
        viewportWidth,
        isMobileView,
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
}

ViewportProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useViewportContext() {
  return useContext(ViewportContext);
}

export {
  ViewportProvider,
  useViewportContext,
};