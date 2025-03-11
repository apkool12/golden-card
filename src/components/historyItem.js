import React from 'react';
import '../styles/history-item.css';

const HistoryItem = ({ card }) => {
  return (
    <div className={`history-item ${card.type} ${card.rarity.toLowerCase()}`}>
      <span className="history-rarity">{card.rarity}</span>
      <span className="history-content">{card.content}</span>
      <span className="history-effect">{card.effect}</span>
    </div>
  );
};

export default HistoryItem;
