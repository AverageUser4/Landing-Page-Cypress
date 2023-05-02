import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import css from './Slide.module.css';

function Slide({ children, elementsPerPage = 2 }) {
  const setForceRender = useState(false)[1];
  const positionsRef = useRef(null);
  const targetPositionsRef = useRef(null);

  const gapWidth = 5;
  const gapCount = elementsPerPage - 1;
  const gapsWidthPerPage = gapWidth * gapCount;
  const gapPerElement = gapsWidthPerPage / elementsPerPage;
  const elementWidth = 100 / elementsPerPage - gapPerElement;
  const moveFactor = (elementWidth + gapWidth) / 5;
  const combinedWidth = elementWidth + gapWidth;

  useEffect(() => {
    const newPositions = [];
    
    for(let i = 0; i < children.length; i++) {
      newPositions.push((elementWidth + gapWidth) * i);
    }

    positionsRef.current = newPositions;
    setForceRender(Math.random());
  }, [children.length, elementWidth, setForceRender]);

  useEffect(() => {
    function move(direction = 'right') {
      if(direction === 'left') {
        targetPositionsRef.current = positionsRef.current.map(x => x + combinedWidth * elementsPerPage);
      } else {
        targetPositionsRef.current = positionsRef.current.map(x => x - combinedWidth * elementsPerPage);
      }

      const moveIntervalID = setInterval(() => {
        let isEnd = true;
        
        for(let i = 0; i < positionsRef.current.length; i++) {
          const current = positionsRef.current[i];
          const target = targetPositionsRef.current[i];

          if(Math.abs(current - target) > moveFactor) {
            if(current < target) {
              if(current >= 100) {
                positionsRef.current[i] = Math.min(...positionsRef.current) - combinedWidth;
                targetPositionsRef.current[i] = Math.min(...targetPositionsRef.current) - combinedWidth;
              }
              
              positionsRef.current[i] += moveFactor;
            } else {
              if(current <= -combinedWidth) {
                positionsRef.current[i] = Math.max(...positionsRef.current) + combinedWidth;
                targetPositionsRef.current[i] = Math.max(...targetPositionsRef.current) + combinedWidth;
              } 

              positionsRef.current[i] -= moveFactor;
            }

            isEnd = false;
          } else {
            positionsRef.current[i] = target;
          }
        }

        setForceRender(Math.random());

        if(isEnd) {
          targetPositionsRef.current = null;
          clearInterval(moveIntervalID);
        }
      }, 16);
    }

    const mainIntervalID = setInterval(() => {
      if(targetPositionsRef.current || elementsPerPage >= children.length) {
        return;
      }

      move();
    }, 5000);

    return () => {
      clearInterval(mainIntervalID);
    };
  }, [elementWidth, elementsPerPage, moveFactor, children.length, setForceRender, combinedWidth]);

  if(!positionsRef.current) {
    return;
  }
  
  return (
    <div className={css['container']}>
      <ul 
        className={css['list']}
      >
        {children.map((element, index) => (
          <li
            className={css['list-item']}
            key={index}
            style={{
              left: `${positionsRef.current[index]}%`,
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
