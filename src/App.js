import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import CardInfoPanel from './components/cardInfoPanel';
import CardSection from './components/cardSection';
import HistorySection from './components/historySection';
import InfoBox from './components/infoBox';
import { createGoldenCards, createCardRarities } from './data/cardData';

function App() {
  const [goldenCards] = useState(() => createGoldenCards());
  const [rarities] = useState(() => createCardRarities());
  const [currentCard, setCurrentCard] = useState(null);
  const [isOpening, setIsOpening] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [historyCards, setHistoryCards] = useState([]);
  
  const drawRandomCard = () => {
    const random = Math.random();
    let selectedRarity;
    let cumulativeProbability = 0;
    
    for (const [rarity, details] of Object.entries(rarities)) {
      cumulativeProbability += details.prob;
      if (random <= cumulativeProbability) {
        selectedRarity = rarity;
        break;
      }
    }
    
    let filteredCards = [...goldenCards];
    
    if (selectedRarity === "UR") {
      filteredCards = filteredCards.filter(card => card.type === "양주");
    } else if (selectedRarity === "SSR") {
      filteredCards = filteredCards.filter(card => card.type === "힌트");
    } else if (selectedRarity === "SR") {
      filteredCards = filteredCards.filter(card => card.type === "event" || card.type === "special");
    } else if (selectedRarity === "R") {
      filteredCards = filteredCards.filter(card => card.type === "보상" || card.type === "벌칙");
    }
    
    if (filteredCards.length === 0) {
      filteredCards = [...goldenCards];
    }
    
    const randomCardIndex = Math.floor(Math.random() * filteredCards.length);
    const selectedCard = filteredCards[randomCardIndex];
    
    return {
      ...selectedCard,
      rarity: selectedRarity,
      id: Date.now()
    };
  };
  
  const openCard = () => {
    setIsOpening(true);
    setIsRevealed(false);
    
    setTimeout(() => {
      const drawnCard = drawRandomCard();
      setCurrentCard(drawnCard);
      
      setTimeout(() => {
        setIsRevealed(true);
        setIsOpening(false);
        
        setHistoryCards(prev => [drawnCard, ...prev].slice(0, 10));
      }, 1500);
    }, 1000);
  };
  
  const reopenCard = () => {
    if (!currentCard || isOpening) return;
    setIsRevealed(false);
    
    setTimeout(() => {
      setIsRevealed(true);
    }, 500);
  };
  
  const handleCardEffect = (card) => {
    if (!card) return;
  };
  
  return (
    <div className="app-container">
      <Header/>
      
      <CardInfoPanel rarities={rarities} />
      
      <CardSection 
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
        isOpening={isOpening}
        isRevealed={isRevealed}
        reopenCard={reopenCard}
        openCard={openCard}
        rarities={rarities}
        handleCardEffect={handleCardEffect}
      />
      <HistorySection historyCards={historyCards} />
      
      <InfoBox />
    </div>
  );
}

export default App;