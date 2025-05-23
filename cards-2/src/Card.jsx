import React from 'react';
import "./App.css";

const Card = ({ img, price, name }) => {
  return (
    <div className='mainCard'>
      <div className='cardImg'>
        <img src={img} alt={name} />
      </div>
      <div className='cardInfo'>
        <h1>{name}</h1>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Card;
