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
  // 카드가 완전히 공개되었을 때 효과 적용
  useEffect(() => {
    if (currentCard && isRevealed && !isOpening) {
      // 카드 효과 적용
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