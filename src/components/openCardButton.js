import React from 'react';
import '../styles/open-card-button.css';

const OpenCardButton = ({ openCard, coins }) => {
  return (
    <button 
      className={`open-card-btn ${coins < 3 ? 'disabled' : ''}`}
      onClick={openCard}
      disabled={coins < 3}
    >
      {coins < 3 ? "코인이 부족합니다" : "황금 카드 열기 (3 코인)"}
    </button>
  );
};

export default OpenCardButton;
