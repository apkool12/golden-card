import React from "react";
import "../styles/open-card-button.css";

const OpenCardButton = ({ openCard, coins, disabled }) => {
  return (
    <button
      className={`open-card-btn ${disabled ? "disabled" : ""}`}
      onClick={openCard}
      disabled={disabled}
    >
      황금 카드 열기
    </button>
  );
};

export default OpenCardButton;
