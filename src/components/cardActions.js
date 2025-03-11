import React from 'react';
import '../styles/card-actions.css';

const CardActions = ({ reopenCard, setCurrentCard }) => {
  return (
    <div className="card-actions">
      <button className="reopen-btn" onClick={reopenCard}>
        카드 다시 보기
      </button>
      <button className="new-card-btn" onClick={() => setCurrentCard(null)}>
        새 카드 뽑기
      </button>
    </div>
  );
};

export default CardActions;
