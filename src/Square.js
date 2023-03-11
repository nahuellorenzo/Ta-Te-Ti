import React from 'react';

function Square(props) {
  const { isLightMode, onClick, value } = props;

  return (
    <button className={`square${isLightMode ? 'light-mode' : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
