import React from 'react';
import '../styles/card-info-panel.css';

const CardInfoPanel = ({ rarities, availableCardsCount }) => {
  return (
    <div className="card-info-panel">
      <div className="card-cost">카드 오픈</div>
      <div className="rarity-list">
        {Object.entries(rarities).map(([key, details]) => (
          <div key={key} className="rarity-item" style={{color: details.color}}>
            {key}: {(details.prob * 100).toFixed(1)}%
          </div>
        ))}
      </div>
      <div className="available-cards">
        남은 카드 수: {availableCardsCount}
      </div>
    </div>
  );
};

export default CardInfoPanel;