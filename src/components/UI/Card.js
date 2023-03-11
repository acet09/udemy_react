import React from 'react';
import './Card.css';

// 최신 함수 형식
const Card = (props) => {
  const classes = 'card ' + props.className;
  
  return (
    <div className={classes}>{props.children}</div>
  );
}
export default Card;