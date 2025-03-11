import React from 'react';
import '../styles/card-actions.css';

const CardActions = ({ reopenCard, setCurrentCard, card }) => {
  // 특별 효과 카드인지 확인
  const hasSpecialEffect = card && card.type === "special" && card.effect === "특수 효과";
  
  // 코인 뺏기 효과가 있는지 확인하고 금액 추출
  const getStealAmount = () => {
    if (!hasSpecialEffect) return null;
    const match = card.content.match(/(\d+)개/);
    return match ? match[1] : null;
  };
  
  const stealAmount = getStealAmount();

  return (
    <div className="card-actions">
      
      {hasSpecialEffect && stealAmount && (
        <button className="special-action-btn">
          다른 팀에게 {stealAmount}코인 뺏기
        </button>
      )}
      
      
    </div>
  );
};

export default CardActions;