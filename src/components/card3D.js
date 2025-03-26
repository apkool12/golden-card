import React from 'react';
import '../styles/card-3d.css';

const Card3D = ({ card, isOpening, isRevealed, rarities }) => {
  return (
    <div 
      className={`card-3d ${isOpening ? 'opening' : ''} ${isRevealed ? 'revealed' : ''}`}
      style={{transform: isRevealed ? 'rotateY(180deg)' : 'rotateY(0deg)'}}
    >
      <div className="card-3d-inner">
        <div className="card-3d-front">
          <div className="card-back-design">
            <span className="card-logo">MT</span>
          </div>
        </div>
        <div className={`card-3d-back ${card.type} ${card.rarity.toLowerCase()}`}>
          <div className="card-content">
            <div className="card-rarity">{rarities[card.rarity].name}</div>
            <div className="card-type">{card.type.toUpperCase()}</div>
            <div className="card-text">{card.content}</div>
            <div className="card-effect">( *˘╰╯˘*)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3D;
