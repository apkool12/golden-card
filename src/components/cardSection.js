import React, { useEffect } from "react";
import Card3D from "./card3D";
import OpenCardButton from "./openCardButton";

import "../styles/card-section.css";

const CardSection = ({
  currentCard,
  setCurrentCard,
  isOpening,
  isRevealed,
  openCard,
  coins,
  rarities,
  handleCardEffect,
  selectedTeam,
  setSelectedTeam,
}) => {
  useEffect(() => {
    if (currentCard && isRevealed && !isOpening) {
      handleCardEffect(currentCard);
    }
  }, [currentCard, isRevealed, isOpening, handleCardEffect]);

  const teams = Array.from({ length: 12 }, (_, i) => `${i + 1}조`);

  return (
    <div className="card-section">
      <div className="card-open-area">
        <div className="team-selection-container">
          <select
            className="team-dropdown"
            value={selectedTeam || ""}
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            <option value="">팀 선택</option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
          <OpenCardButton
            openCard={openCard}
            coins={coins}
            disabled={!selectedTeam}
          />
        </div>
      </div>

      {currentCard && (
        <div className="card-display">
          <Card3D
            card={currentCard}
            isOpening={isOpening}
            isRevealed={isRevealed}
            rarities={rarities}
          />
        </div>
      )}
    </div>
  );
};

export default CardSection;
