import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import CardInfoPanel from './components/cardInfoPanel';
import CardSection from './components/cardSection';
import HistorySection from './components/historySection';
import InfoBox from './components/infoBox';
import { createGoldenCards, createCardRarities } from './data/cardData';

function App() {
  // Initialize state with local storage or default values
  const [goldenCards] = useState(() => createGoldenCards());
  const [rarities] = useState(() => createCardRarities());
  const [currentCard, setCurrentCard] = useState(null);
  const [isOpening, setIsOpening] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [coins, setCoins] = useState(() => {
    const savedCoins = localStorage.getItem('gameCoins');
    return savedCoins ? parseInt(savedCoins, 10) : 10;
  });
  const [historyCards, setHistoryCards] = useState(() => {
    const savedHistory = localStorage.getItem('cardHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  
  // Persist coins and history to local storage
  useEffect(() => {
    localStorage.setItem('gameCoins', coins.toString());
  }, [coins]);

  useEffect(() => {
    localStorage.setItem('cardHistory', JSON.stringify(historyCards));
  }, [historyCards]);
  
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
      id: Date.now(),
      team: selectedTeam
    };
  };
  
  const openCard = () => {
    setIsTeamModalOpen(true);
  };
  
  const handleTeamSelection = (team) => {
    setSelectedTeam(team);
    setIsTeamModalOpen(false);

    setCoins(prev => prev - 3);
    
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

  // Team selection modal
  const renderTeamModal = () => {
    if (!isTeamModalOpen) return null;
    
    const teams = Array.from({ length: 12 }, (_, i) => `${i + 1}조`);
    
    return (
      <div className="team-modal-overlay">
        <div className="team-modal">
          <h2>팀 선택</h2>
          <select 
            value={selectedTeam || ''} 
            onChange={(e) => handleTeamSelection(e.target.value)}
          >
            <option value="">팀을 선택하세요</option>
            {teams.map(team => (
              <option key={team} value={team}>{team}</option>
            ))}
          </select>
          <button onClick={() => setIsTeamModalOpen(false)}>취소</button>
        </div>
      </div>
    );
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
        coins={coins}
        rarities={rarities}
        handleCardEffect={handleCardEffect}
      />
      <HistorySection historyCards={historyCards} />
      
      <InfoBox />
      
      {renderTeamModal()}
    </div>
  );
}

export default App;