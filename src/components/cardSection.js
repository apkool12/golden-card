import React, { useEffect } from 'react';
import Card3D from './card3D';
import OpenCardButton from './openCardButton';
import CardActions from './cardActions';

import '../styles/card-section.css';


const CardSection = ({ 
  currentCard, 
  setCurrentCard, 
  isOpening, 
  isRevealed, 
  reopenCard, 
  openCard, 
  coins,
  rarities,
  handleCardEffect
}) => {
  useEffect(() => {
    if (currentCard && isRevealed && !isOpening) {
      handleCardEffect(currentCard);
    }
  }, [currentCard, isRevealed, isOpening, handleCardEffect]);

  return (
    <div className="card-section">
      {!currentCard ? (
        <div className="card-open-area">
          <OpenCardButton 
            openCard={openCard} 
            coins={coins} 
          />
        </div>
      ) : (
        <div className="card-display">
          <Card3D 
            card={currentCard} 
            isOpening={isOpening} 
            isRevealed={isRevealed} 
            rarities={rarities}
          />
          <CardActions 
            reopenCard={reopenCard} 
            setCurrentCard={setCurrentCard}
            card={currentCard}
          />
        </div>
      )}
    </div>
  );
};

export default CardSection;