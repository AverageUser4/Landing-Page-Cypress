import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './Slide.module.css';


function Slide({ children, elementsPerPage = 2 }) {
  const [currentPage, setCurrentPage] = useState(0);

  const gapWidth = 5;
  const gapCount = elementsPerPage - 1;
  const gapsWidthPerPage = gapWidth * gapCount;
  const gapPerElement = gapsWidthPerPage / elementsPerPage;
  const elementWidth = 100 / elementsPerPage - gapPerElement;
  const maxPage = Math.ceil(children.length / elementsPerPage) - 1;

  useEffect(() => {
    setCurrentPage(0);
  }, [elementsPerPage]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentPage(prev => (prev + 1 > maxPage) ? 0 : prev + 1);
    }, 5000);

    return () => {
      clearInterval(intervalID);
    };
  }, [maxPage, currentPage]);
 
  return (
    <div className={css['container']}>
      <ul 
        className={css['list']}
        style={{
          gap: `${gapWidth}%`,
          left: `-${(100 + gapWidth) * currentPage}%`
        }}
      >
        {children.map((element, index) => (
          <li
            className={css['list-item']}
            key={index}
            style={{
              width: `${elementWidth}%`,
            }}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  elementsPerPage: PropTypes.number,
};

export default Slide;
