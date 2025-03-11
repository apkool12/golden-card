import React from 'react';
import HistoryItem from './historyItem';
import '../styles/history-section.css';

const HistorySection = ({ historyCards }) => {
  return (
    <div className="history-section">
      <h3>최근 카드 내역</h3>
      <div className="card-history">
        {historyCards.length === 0 ? (
          <p className="no-history">아직 카드를 오픈하지 않았습니다.</p>
        ) : (
          historyCards.map((card, index) => (
            <HistoryItem key={card.id || index} card={card} />
          ))
        )}
      </div>
    </div>
  );
};

export default HistorySection;
