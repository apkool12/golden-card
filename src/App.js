import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import CardInfoPanel from './components/cardInfoPanel';
import CardSection from './components/cardSection';
import HistorySection from './components/historySection';
import InfoBox from './components/infoBox';
import AdminPage from './components/AdminPage';
import { createGoldenCards, createCardRarities } from './data/cardData';

function App() {
  // Initialize state with local storage or default values
  const [goldenCards, setGoldenCards] = useState(() => {
    const savedCards = localStorage.getItem('availableCards');
    return savedCards ? JSON.parse(savedCards) : createGoldenCards();
  });
  const [rarities] = useState(() => createCardRarities());
  const [currentCard, setCurrentCard] = useState(null);
  const [isOpening, setIsOpening] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isAdminPage, setIsAdminPage] = useState(false);
  const [coins, setCoins] = useState(() => {
    const savedCoins = localStorage.getItem('gameCoins');
    return savedCoins ? parseInt(savedCoins, 10) : 10;
  });
  const [historyCards, setHistoryCards] = useState(() => {
    const savedHistory = localStorage.getItem('cardHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  
  // Persist coins, history, and available cards to local storage
  useEffect(() => {
    localStorage.setItem('gameCoins', coins.toString());
  }, [coins]);

  useEffect(() => {
    localStorage.setItem('cardHistory', JSON.stringify(historyCards));
  }, [historyCards]);

  useEffect(() => {
    localStorage.setItem('availableCards', JSON.stringify(goldenCards));
  }, [goldenCards]);
  
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
    
    let filteredCards = goldenCards.filter(card => {
      // Filter by rarity type
      if (selectedRarity === "UR" && card.type !== "양주") return false;
      if (selectedRarity === "SSR" && card.type !== "힌트") return false;
      if (selectedRarity === "SR" && !["event", "special"].includes(card.type)) return false;
      if (selectedRarity === "R" && !["보상", "벌칙"].includes(card.type)) return false;
      
      return true;
    });
    
    if (filteredCards.length === 0) {
      // If no cards left, reset the deck for this rarity type
      filteredCards = goldenCards;
    }
    
    const randomCardIndex = Math.floor(Math.random() * filteredCards.length);
    const selectedCard = filteredCards[randomCardIndex];
    
    // Remove the selected card from available cards
    setGoldenCards(prevCards => prevCards.filter(card => card.id !== selectedCard.id));
    
    return {
      ...selectedCard,
      rarity: selectedRarity,
      drawnAt: Date.now(),
      team: selectedTeam
    };
  };
  
  const openCard = () => {
    setIsTeamModalOpen(true);
  };
  
  const handleTeamSelection = (team) => {
    if (goldenCards.length === 0) {
      alert('모든 카드를 소진했습니다. 관리자 페이지에서 카드를 초기화하세요.');
      return;
    }

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

  // Reset all cards and game data
  const resetCardData = () => {
    const initialCards = createGoldenCards();
    setGoldenCards(initialCards);
    setHistoryCards([]);
    setCoins(10);
    setCurrentCard(null);
    localStorage.removeItem('availableCards');
    localStorage.removeItem('cardHistory');
    localStorage.removeItem('gameCoins');
    alert('모든 데이터가 초기화되었습니다.');
  };

  // Toggle admin page
  const toggleAdminPage = () => {
    setIsAdminPage(!isAdminPage);
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
      {!isAdminPage ? (
        <>
          <Header toggleAdminPage={toggleAdminPage} />
          
          <CardInfoPanel 
            rarities={rarities} 
            availableCardsCount={goldenCards.length} 
          />
          
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
        </>
      ) : (
        <AdminPage 
          resetCardData={resetCardData} 
          toggleAdminPage={toggleAdminPage}
          availableCards={goldenCards}
        />
      )}
    </div>
  );
}

export default App;