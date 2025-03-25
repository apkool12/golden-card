import React from 'react';
import '../styles/open-card-button.css';

const OpenCardButton = ({ openCard, coins }) => {
  return (
    <button 
      className={`open-card-btn`}
      onClick={openCard}
    >
      {"황금 카드 열기 (3 코인)"}
    </button>
  );
};

export default OpenCardButton;
