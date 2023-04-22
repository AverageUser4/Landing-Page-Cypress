import React, { useState, useContext, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const ScrollContext = createContext();

function ScrollProvider({ children }) {
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    
    onScroll();

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        scrollY,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

ScrollProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useScrollContext() {
  return useContext(ScrollContext);
}

export {
  ScrollProvider,
  useScrollContext,
};